import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContainer, Header, SubTitle, Title } from "./App.styles";
import DataService from "./api/dataService";
import type { IEpisode, ITVShow } from "./api/dataService.types";
import SeasonTabs from "./components/Tabs/Tabs";

const App = () => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([
    { Duration: "", EpisodeNumber: 0, ID: "", Image: "", SeasonNumber: 0, Synopsis: "", Title: "" },
  ]);
  const [tvShow, setTVShow] = useState<ITVShow>({
    cast: [],
    genres: [],
    ID: "",
    Images: { Background: "" },
    Synopsis: "",
    Title: "",
    Year: 0,
  });

  const getData = useCallback(async () => {
    try {
      const tvShow = await DataService.getTVShow();
      setTVShow(tvShow);
      const episodes = await DataService.getEpisodes();
      setEpisodes(episodes.filter((item) => item !== null));
    } catch (error) {
      toast.error("Erro ao carregar informações");
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(episodes);
  return (
    <AppContainer backgroundimage={tvShow.Images.Background}>
      <Header>
        <Title>{tvShow.Title}</Title>
        <SubTitle>80% INDICADO / CIENCIA FICCIÓN / 2015 / EUA / 14</SubTitle>
      </Header>
      <SeasonTabs episodes={episodes} />
    </AppContainer>
  );
};

export default App;
