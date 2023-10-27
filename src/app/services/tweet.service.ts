import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweets, NewTweet } from '../modals';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  constructor(private http: HttpClient) {}

  public fetchTweets(username: string) {
    return this.http.get<Tweets>(
      `http://localhost:5012/tweets?username=${username}`
    );
  }

  public postTweet(username: string, tweet: string) {
    const body = { username, tweet };
    return this.http.post<NewTweet>(`http://localhost:5012/tweet`, body);
  }
}
