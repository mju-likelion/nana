import styled from 'styled-components';

import Introduction from '../components/Introduction';
import Welcom from '../components/Welcom';

const MainContainer = styled.div`
  min-width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <MainContainer>
        <Welcom />
      </MainContainer>
      <Introduction />
    </>
  );
}
