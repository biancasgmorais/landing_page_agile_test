import React, { useCallback, useEffect, useState } from 'react';
import { IEpisode, ITVShow } from './api/dataService.types';
import DataService from './api/dataService';
import { toast } from 'react-toastify';
import { AppContainer, Header, SubTitle, Title } from './App.styles';


const App = () => {

  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [tvShow, setTVShow] = useState<ITVShow>({cast: [], genres: [], ID: "", Images: {Background: ""}, Synopsis: "", Title: "", Year: 0});

  const getData = useCallback(async () => {
    try{
      const tvShow = await DataService.getTVShow();
      setTVShow(tvShow);
      const episodes = await DataService.getEpisodes();
      setEpisodes(episodes);
    } catch (error) {
      toast.error("Erro ao carregar informações");
    }
  }, [])

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(tvShow);
  return (
    <AppContainer backgroundimage={tvShow.Images.Background}>
      <Header>
            <Title>{tvShow.Title}</Title>
            <SubTitle>80% INDICADO / CIENCIA FICCIÓN / 2015 / EUA / 14</SubTitle>
      </Header>


    </AppContainer>
  );
}

export default App;
