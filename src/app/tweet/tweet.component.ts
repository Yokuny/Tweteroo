import { Component, Input } from '@angular/core';
import { Tweet } from '../modals';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {
  @Input('tweet')
  public tweet: Tweet = {} as Tweet;

  constructor() {}
}
