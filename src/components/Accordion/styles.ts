import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Accordion } from "@mui/material";

import styled from "styled-components";

export const AccordionContainer = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  padding-right: 10px;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const AccordionContent = styled(Accordion)`
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
  margin-left: 10px;
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
