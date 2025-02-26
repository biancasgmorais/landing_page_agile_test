import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import EpisodesAccordion from "../Accordion/Accordion";
import TabPanel from "./TabPanel";
import { BoxContainer, BoxContainerTabs, BoxContent, TabsContainer } from "./styles";
import type { ITabProps } from "./types";

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
        <TabPanel value={season} index={0}>
          <EpisodesAccordion episodes={getEpisodesForSeason(1)} />
        </TabPanel>
        <TabPanel value={season} index={1}>
          <EpisodesAccordion episodes={getEpisodesForSeason(2)} />
        </TabPanel>
        <TabPanel value={season} index={2}>
          <p>Não há episódios para esta temporada.</p>
        </TabPanel>
      </BoxContent>
    </BoxContainer>
  );
};

export default SeasonTabs;
