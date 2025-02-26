import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContainer, AppContent, Header, SubTitle, Title } from "./App.styles";
import DataService from "./api/dataService";
import type { IEpisode, ITVShow } from "./api/dataService.types";
import Footer from "./components/Footer/Footer";
import { SeasonTabs } from "./components/Tabs/Tabs";

const App = () => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([
    { Duration: "", EpisodeNumber: 0, ID: "", Image: "", SeasonNumber: 0, Synopsis: "", Title: "" },
  ]);
  const [tvShow, setTVShow] = useState<ITVShow>({
    Cast: [],
    Genres: [],
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

  return (
    <AppContainer backgroundimage={tvShow.Images.Background}>
      <AppContent>
        <Header>
          <Title>{tvShow.Title}</Title>
          <SubTitle>80% INDICADO / CIENCIA FICCIÓN / 2015 / EUA / 14</SubTitle>
        </Header>
        <SeasonTabs episodes={episodes} />
      </AppContent>
      <Footer tvShow={tvShow} />
    </AppContainer>
  );
};

export default App;
