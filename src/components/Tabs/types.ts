import type { IEpisode } from "../../api/dataService.types";

export interface ITabProps {
  episodes: IEpisode[];
}

export interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
