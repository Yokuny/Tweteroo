import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TweetService } from '../services/tweet.service';
import { Tweets } from '../modals';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  user = 'Felipe';

  tweetForm = this.formBuilder.group({
    newTweet: '',
  });

  tweets: Tweets = [] as Tweets;

  ngOnInit() {
    this.TweetService.fetchTweets(this.user).subscribe((tweets) => {
      this.tweets = tweets;
    });
  }

  onSubmit() {
    const newTweet = this.tweetForm.value.newTweet || '';

    this.TweetService.postTweet(this.user, newTweet);
  }

  constructor(
    readonly TweetService: TweetService,
    private formBuilder: FormBuilder
  ) {}
}
