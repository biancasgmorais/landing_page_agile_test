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

export const BoxContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BoxContent = styled(Box)`
  margin-right: 0 !important;
  width: 30%;
`;

export const BoxContainerTabs = styled(Box)`
  margin-left: 30px;
  max-width: 80%;
  border-bottom: 1px solid #28292D;
`;
