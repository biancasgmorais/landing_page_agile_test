import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AdjustIcon from "@mui/icons-material/Adjust";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import EpisodesAccordion from "../Accordion/Accordion";
import TabPanel from "./TabPanel";
import {
  BoxContainer,
  BoxContainerTabs,
  BoxContent,
  BoxTVShowContainer,
  BoxTvShowContainerTabs,
  CastCard,
  CastCardDescription,
  CastCardTitle,
  CastTabContainer,
  GeneralDescription,
  GeneralSynopsis,
  GeneralTabContainer,
  GeneralTabDescription,
  GeneralTabIcons,
  NoEpisodes,
  ScrollabeContainer,
  TabsContainer,
} from "./styles";
import type { ITabProps, ITvShowTabsProps } from "./types";

const SeasonTabs = ({ episodes }: ITabProps) => {
  const [season, setSeason] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newSeasonValue: number) => {
    setSeason(newSeasonValue);
  };

  const getEpisodesForSeason = (seasonNumber: number) => {
    return episodes.filter((episode) => episode.SeasonNumber === seasonNumber);
  };

  return (
    <BoxContainer>
      <BoxContent>
        <BoxContainerTabs>
          <TabsContainer value={season} onChange={handleChange} aria-label="espisodes tabs">
            <Tab label="T1" />
            <Tab label="T2" />
            <Tab label="T3" />
          </TabsContainer>
        </BoxContainerTabs>
        <ScrollabeContainer>
          <TabPanel value={season} index={0}>
            <EpisodesAccordion episodes={getEpisodesForSeason(1)} />
          </TabPanel>
          <TabPanel value={season} index={1}>
            <EpisodesAccordion episodes={getEpisodesForSeason(2)} />
          </TabPanel>
          <TabPanel value={season} index={2}>
            <NoEpisodes>Não há episódios para esta temporada.</NoEpisodes>
          </TabPanel>
        </ScrollabeContainer>
      </BoxContent>
    </BoxContainer>
  );
};

const TvShowTabs = ({ tvShow }: ITvShowTabsProps) => {
  const [element, setElement] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newSeasonValue: number) => {
    setElement(newSeasonValue);
  };

  return (
    <BoxTVShowContainer>
      <BoxTvShowContainerTabs>
        <TabsContainer value={element} onChange={handleChange} aria-label="tvshow tabs">
          <Tab label="Geral" />
          <Tab label="Elenco" />
          <Tab label="Premios Principais" />
        </TabsContainer>
      </BoxTvShowContainerTabs>
      <TabPanel value={element} index={0}>
        <GeneralTab tvShow={tvShow} />
      </TabPanel>
      <TabPanel value={element} index={1}>
        <CastTab tvShow={tvShow} />
      </TabPanel>
      <TabPanel value={element} index={2}>
        <GeneralTabContainer>Não há informações sobre os principais premios</GeneralTabContainer>
      </TabPanel>
    </BoxTVShowContainer>
  );
};

const GeneralTab = ({ tvShow }: ITvShowTabsProps) => {
  return (
    <GeneralTabContainer>
      <GeneralTabIcons>
        <AddCircleOutlineIcon sx={{ fontSize: "40px", color: "#35363A", cursor: "pointer" }} />
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: "40px", color: "#35363A", cursor: "pointer" }} />
        <AdjustIcon sx={{ fontSize: "40px", color: "#35363A", cursor: "pointer" }} />
        <IosShareRoundedIcon sx={{ fontSize: "40px", color: "#35363A", cursor: "pointer" }} />
      </GeneralTabIcons>

      <GeneralTabDescription>
        <GeneralSynopsis>SINOPSE</GeneralSynopsis>
        <GeneralDescription>{tvShow.Synopsis}</GeneralDescription>
      </GeneralTabDescription>
    </GeneralTabContainer>
  );
};

const CastTab = ({ tvShow }: ITvShowTabsProps) => {
  return (
    <CastTabContainer>
      {tvShow.Cast.map((actor) => {
        return (
          <CastCard key={actor.ID}>
            <CastCardTitle>{actor.Name}</CastCardTitle>
            <CastCardDescription>Atriz ou Ator</CastCardDescription>
          </CastCard>
        );
      })}
    </CastTabContainer>
  );
};
export { SeasonTabs, TvShowTabs };
