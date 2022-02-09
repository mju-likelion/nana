/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import { useState, useEffect, useRef } from 'react';
import { Children } from 'react/cjs/react.production.min';
import styled from 'styled-components';

import Apply from '../components/Apply';
import Curriculum from '../components/Curriculum';
import Introduction from '../components/Introduction';
import Join from '../components/Join';
import NavBar from '../components/NavBar';
import OutPut from '../components/OutPut';
import Welcom from '../components/Welcom';

const MainContainer = styled.div`
  min-width: 100%;
`;

export default function Home() {
  // forwardRef 이용하기
  const navRef = useRef();
  const menuIntroRef = useRef();
  const menuCurriculumRef = useRef();
  const menuOutputRef = useRef();
  const menuJoinRef = useRef();
  const menuApplyRef = useRef();

  const navRefArr = [
    navRef,
    menuIntroRef,
    menuCurriculumRef,
    menuOutputRef,
    menuJoinRef,
    menuApplyRef,
  ];

  const introRef = useRef();
  const curriculumRef = useRef();
  const outputRef = useRef();
  const joinRef = useRef();
  const applyRef = useRef();

  // 위치별 스타일 주기
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const introPos =
        window.pageYOffset + introRef.current.getBoundingClientRect().top;
      const curriculumPos =
        window.pageYOffset + curriculumRef.current.getBoundingClientRect().top;
      const outputPos =
        window.pageYOffset + outputRef.current.getBoundingClientRect().top;
      const joinPos =
        window.pageYOffset + joinRef.current.getBoundingClientRect().top;
      const applyPos =
        window.pageYOffset + applyRef.current.getBoundingClientRect().top;

      // 첫 화면이면 스타일 초기화
      if (scrollTop < introPos) {
        navRefArr[0].current.style.background = 'none';
        for (let i = 1; i < navRefArr.length; i++) {
          navRefArr[i].current.style.color = '#fff';
          navRefArr[i].current.style.fontSize = '12px';
        }
      }

      // 스크롤 위치에따라 스타일 부여하기
      if (scrollTop >= introPos) {
        // navRefArr[0].current.style.background = '#212121DD';
        navRefArr[0].current.style.background = '#071d49';
        for (let i = 1; i < navRefArr.length; i++) {
          navRefArr[i].current.style.color = '#fff';
          navRefArr[i].current.style.fontSize = '12px';
        }
        // navRefArr[1].current.style.color = '#78648C';
        // navRefArr[1].current.style.color = '#FFFBE3';
        navRefArr[1].current.style.color = '#FFFB51';
        navRefArr[1].current.style.fontSize = '17px';
      }

      if (scrollTop >= curriculumPos) {
        // navRefArr[0].current.style.background = '#212121DD';
        navRefArr[0].current.style.background = '#071d49';
        for (let i = 1; i < navRefArr.length; i++) {
          navRefArr[i].current.style.color = '#fff';
          navRefArr[i].current.style.fontSize = '12px';
        }
        // navRefArr[1].current.style.color = '#78648C';
        // navRefArr[1].current.style.color = '#FFFBE3';
        navRefArr[2].current.style.color = '#FFFB51';
        navRefArr[2].current.style.fontSize = '17px';
      }

      if (scrollTop >= outputPos) {
        navRefArr[0].current.style.background = '#071d49';
        for (let i = 1; i < navRefArr.length; i++) {
          navRefArr[i].current.style.color = '#fff';
          navRefArr[i].current.style.fontSize = '12px';
        }
        navRefArr[3].current.style.color = '#FFFB51';
        navRefArr[3].current.style.fontSize = '17px';
      }

      if (scrollTop >= joinPos) {
        navRefArr[0].current.style.background = '#071d49';
        for (let i = 1; i < navRefArr.length; i++) {
          navRefArr[i].current.style.color = '#fff';
          navRefArr[i].current.style.fontSize = '12px';
        }
        navRefArr[4].current.style.color = '#FFFB51';
        navRefArr[4].current.style.fontSize = '17px';
      }

      if (scrollTop - applyPos >= -1) {
        navRefArr[0].current.style.background = '#071d49';
        for (let i = 1; i < navRefArr.length; i++) {
          navRefArr[i].current.style.color = '#fff';
          navRefArr[i].current.style.fontSize = '12px';
        }
        navRefArr[5].current.style.color = '#FFFB51';
        navRefArr[5].current.style.fontSize = '17px';
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainContainer>
      <NavBar ref={navRefArr} />
      <Welcom />
      <Introduction ref={introRef} />
      <Curriculum ref={curriculumRef} />
      <OutPut ref={outputRef} />
      <Join ref={joinRef} />
      <Apply ref={applyRef} />
    </MainContainer>
  );
}
