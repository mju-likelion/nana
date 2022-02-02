import styled from 'styled-components';

import Curriculum from '../components/Curriculum';
import Welcom from '../components/Welcom';

const MainContainer = styled.div`
  min-width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <MainContainer>
      <Welcom />
      <Curriculum />
    </MainContainer>
  );
}
