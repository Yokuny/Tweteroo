import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { TitleComponent } from './title/title.component';
import { BodyComponent } from './body/body.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetService } from './services/tweet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TitleComponent,
    BodyComponent,
    TweetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TweetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
