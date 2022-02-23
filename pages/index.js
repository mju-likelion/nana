/* eslint-disable no-plusplus */
import Head from 'next/head';
import { useEffect, useRef } from 'react';
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

  const initNabStyle = () => {
    for (let i = 1; i < navRefArr.length; i++) {
      navRefArr[i].current.style.color = '#fff';
      navRefArr[i].current.style.fontSize = '12px';
    }
  };

  const highlightNavItem = (index) => {
    navRefArr[0].current.style.background = '#071d49d9';
    initNabStyle();
    navRefArr[index].current.style.color = '#ffd25d';
    navRefArr[index].current.style.fontSize = '17px';
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const introPos =
      window.pageYOffset + introRef.current.getBoundingClientRect().top - 50;
    const curriculumPos =
      window.pageYOffset +
      curriculumRef.current.getBoundingClientRect().top -
      50;
    const outputPos =
      window.pageYOffset + outputRef.current.getBoundingClientRect().top - 50;
    const joinPos =
      window.pageYOffset + joinRef.current.getBoundingClientRect().top - 50;
    const applyPos =
      window.pageYOffset + applyRef.current.getBoundingClientRect().top - 50;

    // 첫 화면이면 스타일 초기화
    if (scrollTop < introPos) {
      navRefArr[0].current.style.background = 'none';
      initNabStyle();
    }

    // 스크롤 위치에따라 스타일 부여하기
    if (scrollTop >= introPos) highlightNavItem(1);

    if (scrollTop >= curriculumPos) highlightNavItem(2);

    if (scrollTop >= outputPos) highlightNavItem(3);

    if (scrollTop >= joinPos) highlightNavItem(4);

    if (scrollTop - applyPos >= -1) highlightNavItem(5);
  };

  // 위치별 스타일 주기
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainContainer>
      <Head>
        <title>멋쟁이사자처럼 at 명지대(자연)</title>
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://nana-promotion-mju-likelion.vercel.app/'
        />
        <meta property='og:title' content='멋쟁이사자처럼 at 명지대(자연)' />
        <meta property='og:image' content='../img/openGraphImg.png' />
        <meta
          property='og:description'
          content='멋쟁이사자처럼 명지대 홍보 사이트'
        />
        <meta
          property='og:site_name'
          content='멋쟁이사자처럼 at 명지대(자연)'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          property='og:description'
          content='멋쟁이사자처럼 명지대 홍보사이트입니다'
        />
      </Head>
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
