import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TweetService } from '../services/tweet.service';
import { Tweets } from '../modals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  constructor(
    private formBuilder: FormBuilder,
    readonly TweetService: TweetService,
    private router: Router
  ) {}

  tweets: Tweets = [] as Tweets;
  tweetForm = this.formBuilder.group({
    tweet: '',
  });
  responseMessage = '';
  user = localStorage.getItem('user') || '';

  private tweetFetch() {
    this.TweetService.fetchTweets(this.user).subscribe((tweets) => {
      this.tweets = tweets;
    });
  }

  onSubmit() {
    const newTweet = this.tweetForm.value.tweet || '';
    this.TweetService.postTweet(this.user, newTweet).subscribe({
      next: (tweet: any) => {
        this.responseMessage = tweet.message;
        this.tweetForm.reset();
        this.tweetFetch();
      },
      error: (error) => {
        this.responseMessage = error.error.message;
      },
    });
  }

  onLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    if (this.user === '' || this.user === null) {
      this.router.navigate(['/']);
    }
    this.tweetFetch();
  }
}
