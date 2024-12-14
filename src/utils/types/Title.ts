import { Genre } from "./Genre";

type TitleType = {
  value: string;
  description: string;
};

type TitleName = {
  main: string;
  english: string;
  alternative: string;
};

type TitleSeason = {
  value: string;
  description: string;
};

type TitlePoster = {
  src: string;
  thumbnail: string;
  optimized: {
    src: string;
    thumbnail: string;
  };
};

type TitleAgeRating = {
  value: string;
  label: string;
  is_adult: boolean;
  description: string;
};

type TitlePublishDay = {
  value: string;
  description: string;
};

type Title = {
  id: number;
  type: TitleType;
  year: number;
  name: TitleName;
  genres: Genre[];
  alias: string;
  season: TitleSeason;
  poster: TitlePoster;
  fresh_at: string;
  created_at: string;
  updated_at: string;
  is_ongoing: boolean;
  age_rating: TitleAgeRating;
  publish_day: TitlePublishDay;
  description: string;
  notification: string | null;
  episodes_total: number | null;
  external_player: string | null;
  is_in_production: boolean;
  is_blocked_by_geo: boolean;
  episodes_are_unknown: boolean;
  is_blocked_by_copyrights: boolean;
  added_in_users_favorites: number;
  average_duration_of_episode: number;
};

export type { Title };
