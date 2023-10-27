export type NewTweet = {
  username: string;
  tweet: string;
};

export type Tweet = NewTweet & {
  avatar: string;
};

export type Tweets = Tweet[];
