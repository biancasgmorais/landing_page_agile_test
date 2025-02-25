import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Accordion } from "@mui/material";
import Typography from "@mui/material/Typography";

import styled from "styled-components";

export const AccordionContainer = styled(Accordion)`
  background-color: transparent !important;
`;

export const AccordionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  width: 100%;
`;

export const AccordionImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PlayIcon = styled(PlayCircleOutlineIcon)`
  font-size: 30px !important;
  color: #fff !important;
`;

export const AccordionTitle = styled.div`
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  color: white;
  font-size: 16px;
`;
