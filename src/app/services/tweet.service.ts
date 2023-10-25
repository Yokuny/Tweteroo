import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweets } from '../modals';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  constructor(private http: HttpClient) {}

  public fetchTweets(username: string) {
    return this.http.get<Tweets>(
      `http://localhost:5002/tweets?username=${username}`
    );
  }
}
