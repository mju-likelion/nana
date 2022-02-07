import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Apply from '../components/Apply';
import Introduction from '../components/Introduction';
import Join from '../components/Join';
import NavBar from '../components/NavBar';
import Welcom from '../components/Welcom';

const MainContainer = styled.div`
  min-width: 100%;
  height: 100vh;
`;

export default function Home() {
  // 스크롤 이벤트 구현필요
  const scrollIntroductionRef = useRef();
  const scrollJoinRef = useRef();
  const scrollApplyRef = useRef();
  const scrollRefs = [scrollIntroductionRef, scrollJoinRef, scrollApplyRef];

  // 처음 로딩시 width 판단
  const [testState, setTestState] = useState(0);
  useEffect(() => {
    setTestState(window.innerWidth);
  });

  // 슬라이드 설정 useEffect
  // some codes

  return (
    <MainContainer>
      <NavBar scrollRefs={scrollRefs} />
      <Welcom />
      <Introduction ref={scrollIntroductionRef} />
      <Join ref={scrollJoinRef} />
      <Apply ref={scrollApplyRef} />
    </MainContainer>
  );
}
