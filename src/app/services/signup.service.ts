import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../modals';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  postUser(username: string, avatar: string) {
    const body = { username, avatar };
    return this.http.post<NewUser>(`http://localhost:5012/signup`, body);
  }
}
