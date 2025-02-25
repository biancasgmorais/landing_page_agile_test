import styled from 'styled-components';

interface IAppContainerProps {
  backgroundimage: string;
}

export const AppContainer = styled.div<IAppContainerProps>`
  background: url(${props => props.backgroundimage});
  overflow: hidden;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  margin-left: 50px;
`;

export const Title = styled.div`
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  font-style: bold;
  font-weight: 800;
  color: white;
  font-size: 60px;
`;

export const SubTitle = styled.div`
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  color: white;
  font-size: 20px;
`;
