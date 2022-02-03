import styled from 'styled-components';

import Apply from '../components/Apply';
import Join from '../components/Join';
import Welcom from '../components/Welcom';

const MainContainer = styled.div`
  min-width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <MainContainer>
      <Welcom />
      <Join />
      <Apply />
    </MainContainer>
  );
}
