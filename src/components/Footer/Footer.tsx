import { TvShowTabs } from "../Tabs/Tabs";
import { FooterContainer } from "./styles";
import type { IFooterProps } from "./types";

export const Footer = ({ tvShow }: IFooterProps) => {
  return (
    <FooterContainer>
      <TvShowTabs tvShow={tvShow} />
    </FooterContainer>
  );
};

export default Footer;
