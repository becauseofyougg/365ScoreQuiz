export interface Highscore {
  user: string;
  score: number;
  timestamp: number;
}

export type MedalPosition = 1 | 2 | 3;

export interface HighscoreListItemProps extends Highscore {
  position: number;
  isCurrentUser: boolean;
}
