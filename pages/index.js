import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Apply from '../components/Apply';
import Introduction from '../components/Introduction';
import Join from '../components/Join';
import NavBar from '../components/NavBar';
import OutPut from '../components/OutPut';
import Welcom from '../components/Welcom';

const MainContainer = styled.div`
  min-width: 100%;
`;

export default function Home() {
  return (
    <MainContainer>
      <NavBar />
      <Welcom />
      <Introduction />
      <OutPut />
      <Join />
      <Apply />
    </MainContainer>
  );
}
