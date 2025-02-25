import styled from 'styled-components';

interface IAppContainerProps {
  backgroundimage: string;
}

export const AppContainer = styled.div<IAppContainerProps>`
background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
              url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
