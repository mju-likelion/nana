import styled from 'styled-components';

import Apply from '../components/Apply';
import Curriculum from '../components/Curriculum';
import Introduction from '../components/Introduction';
import Join from '../components/Join';
import OutPut from '../components/OutPut';
import Welcom from '../components/Welcom';

const MainContainer = styled.div`
  min-width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <MainContainer>
      <Welcom />
      <Introduction />
      <Curriculum />
      <OutPut />
      <Join />
      <Apply />
    </MainContainer>
  );
}
