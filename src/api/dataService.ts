import { IDataService, IEpisode, ITVShow } from './dataService.types';
import axios from 'axios';

const urlEpisodes = "https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json";
const urlTVShow = "https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json"

const DataService: IDataService = {

  getEpisodes: async () => {
    const response = await axios.get<IEpisode[]>(urlEpisodes);
    const episodes = response.data;
    return episodes;
  },

  getTVShow: async () => {
    const response = await axios.get<ITVShow>(urlTVShow);
    const tvShow = response.data;
    return tvShow;
  },

}

export default DataService;
