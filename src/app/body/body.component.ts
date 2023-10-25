import { Component } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { Tweets } from '../modals';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  constructor(readonly TweetService: TweetService) {}

  tweets: Tweets = [] as Tweets;
  user = 'Felipe';

  ngOnInit() {
    this.TweetService.fetchTweets(this.user).subscribe((tweets) => {
      this.tweets = tweets;
    });
  }
}
