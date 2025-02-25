import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import type { IAccordionProps } from "./Accordion.types";
import { AccordionContainer, AccordionImage, AccordionTitle, AccordionTitleContainer, PlayIcon } from "./styles";

const EpisodesAccordion = ({ episodes }: IAccordionProps) => {
  return (
    <div>
      {episodes.map((episode, index) => (
        <AccordionContainer key={episode.ID} defaultExpanded={index === 0}>
          <AccordionSummary aria-controls="panel-content" id={`panel-header-${episode.ID}`}>
            <AccordionTitleContainer>
              <AccordionTitle>
                {episode.EpisodeNumber} {episode.Title}
              </AccordionTitle>
              <PlayIcon />
            </AccordionTitleContainer>
          </AccordionSummary>
          <AccordionImage src={episode.Image} alt={episode.Title} />
          <AccordionDetails>
            <Typography>{episode.Synopsis}</Typography>
          </AccordionDetails>
        </AccordionContainer>
      ))}
    </div>
  );
};

export default EpisodesAccordion;
