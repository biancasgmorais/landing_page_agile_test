import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import styled from "styled-components";

export const TabsContainer = styled(Tabs)`
.MuiButtonBase-root {
  color: #ffffff;
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  color: white;
  font-size: 16px;
  min-width: 30px !important;
  &.Mui-selected {
    color: #ffffff;
  }
}

.MuiTabs-indicator {
    background-color: #4F7353;
    border-radius: 5px;
}
`;

export const ScrollabeContainer = styled.div`
  max-height: 80%;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BoxTVShowContainer = styled.div`
  flex-direction: column;
  padding: 20px 30px 0px 30px;
`;

export const BoxContent = styled(Box)`
  margin-right: 0 !important;
  width: 30%;
`;

export const BoxContainerTabs = styled(Box)`
  margin-left: 20px;
  max-width: 90%;
  border-bottom: 1px solid #28292D;
`;

export const BoxTvShowContainerTabs = styled(Box)`
  border-bottom: 1px solid #28292D;
`;

export const BoxTabPanel = styled(Box)`
  padding: 0px 24px 0px 10px
`;

export const NoEpisodes = styled.p`
  color: #ffffff;
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  font-size: 16px;
`;

export const GeneralTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  min-height: 100px;
`;

export const GeneralTabIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  width: 30%;
  align-items: center;
`;

export const GeneralTabDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
`;

export const GeneralSynopsis = styled.div`
  color: #ffffff;
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  color: white;
  font-size: 30px;
  text-align: left;
  `;

export const GeneralDescription = styled.div`
  color: #ffffff;
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  color: white;
  font-size: 16px;
  text-align: left;
`;

export const CastTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px 20px 0px;
  gap: 20px;
  min-height: 100px;
`;

export const CastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #28292D;
  border-radius: 5px;
`;

export const CastCardTitle = styled.div`
  color: #ffffff;
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  font-size: 20px;
`;

export const CastCardDescription = styled.div`
  color: #ffffff;
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  font-size: 16px;
`;
