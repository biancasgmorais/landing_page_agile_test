export interface IDataService {
  getEpisodes: () => Promise<IEpisode[]>;
  getTVShow: () => Promise<ITVShow>;
}

export interface IEpisode {
  Duration: string;
  EpisodeNumber: number;
  ID: string;
  Image: string;
  SeasonNumber: number;
  Synopsis: string;
  Title: string;
}

export interface ITVShow {
  cast: ICast[];
  genres: IGenres[];
  ID: string;
  Images: IImage;
  Synopsis: string;
  Title: string;
  Year: number;
}

export interface ICast {
  ID: string;
  Name: string;
}

export interface IGenres {
  ID: string;
  Title: string;
}

export interface IImage {
  Background: string;
}
