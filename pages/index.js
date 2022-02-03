import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Welcom from '../components/Welcom';

const MainContainer = styled.div`
  min-width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <MainContainer>
      <NavBar />
      <Welcom />
    </MainContainer>
  );
}
