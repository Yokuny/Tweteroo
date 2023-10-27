type User = {
  username: string;
};

export type NewUser = User & {
  avatar: string;
};

export type NewTweet = User & {
  tweet: string;
};

export type Tweet = NewTweet & {
  avatar: string;
};

export type Tweets = Tweet[];
