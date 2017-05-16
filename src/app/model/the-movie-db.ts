export interface TMDBMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  }[];
  budget?: number;
  genres?: {id: number, name: string}[];
  genre_ids?: number[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language?: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string,
  production_companies?: {name: string, id: number}[];
  production_countries?: {iso_3166_1: string, name: string} ;
  release_date: string;
  revenue?:  number;
  runtime?: number;
  spoken_languages?: {iso_639_1: string, name: string}[];
  status?: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TMDBConfiguration {
  change_keys: string[];
  images: {
    backdrop_sizes: string[];
    base_url: string;
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    secure_base_url: string;
    still_sizes: string[];
  };
}
