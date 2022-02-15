import { forwardRef } from 'react';
import styled from 'styled-components';

import useScrollAnimation from '../hooks/useScrollAnimation';

const CurriWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 200px 0;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const CurriContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
const CurriImgBox = styled.div`
  @media screen and (max-width: 1024px) {
    justify-content: center;
    width: 100%;
    height: auto;
  }
  img {
    border-radius: 15px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  }
  width: 974px;
  height: 539px;
`;

const TechStackTitle = styled.div`
  width: 413px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 53px auto;
  text-align: center;
  color: #737070;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const TechStackImgContainer = styled.div`
  @media screen and (max-width: 1024px) {
    display: block;
  }
  display: flex;
`;

const TechCommonBox = styled.div`
  display: flex;
  justify-content: center;
  img:nth-child(1) {
    margin-right: 30px;
    height: 91px;
  }
  img:nth-child(2) {
    margin: 0 27px;
    height: 91px;
    width: auto;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
    img:nth-child(1) {
      margin-right: 27px;
      width: 180px;
      height: 80px;
    }
    img:nth-child(2) {
      margin: 0 18px;
      width: 87px;
      height: 75px;
    }
  }
`;
const TechLanguageBox = styled.div`
  display: flex;
  img:nth-child(1) {
    margin: 0 27px;
  }
  img:nth-child(2) {
    margin: 0 33px;
    border-radius: 10px;
  }
  img:nth-child(3) {
    margin-left: 30px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    align-items: center;
    img:nth-child(1) {
      margin: 0 21px 0 0;
      width: 100px;
    }
    img:nth-child(2) {
      margin: 0 21px;
      width: 87px;
    }
    img:nth-child(3) {
      margin-left: 21px;
      width: 87px;
    }
  }
`;

const TechToolBox = styled.div`
  display: flex;
  img:nth-child(1) {
    margin: 0 27px 0 40px;
  }
  img:nth-child(2) {
    margin: 0 25px;
  }
  img:nth-child(3) {
    margin: 8px 0 0 17px;
    height: 73px;
  }
  margin: 0 14px 0 5px;

  @media screen and (max-width: 1024px) {
    align-items: center;
    img:nth-child(1) {
      margin: 0 9px 0 0;
      width: 55px;
    }
    img:nth-child(2) {
      margin: 0 10px;
      width: 150px;
    }
    img:nth-child(3) {
      margin: 10px 0 10px 0;
      width: 115px;
      height: 60px;
    }
  }
`;

const Curriculum = forwardRef((props, ref) => {
  const AnimationArray = [
    { id: 1, animation: useScrollAnimation('up', 2.5, 0.2) },
    { id: 2, animation: useScrollAnimation('up', 2.5, 0.4) },
    { id: 3, animation: useScrollAnimation('up', 2.5, 0.6) },
    { id: 4, animation: useScrollAnimation('up', 2.5, 0.8) },
    { id: 5, animation: useScrollAnimation('up', 2.5, 1.0) },
    { id: 6, animation: useScrollAnimation('up', 2.5, 0.2) },
    { id: 7, animation: useScrollAnimation('up', 2.5, 0.4) },
    { id: 8, animation: useScrollAnimation('up', 2.5, 0.6) },
    { id: 9, animation: useScrollAnimation('up', 2.5, 0.8) },
    { id: 10, animation: useScrollAnimation('up', 2.5, 0.8) },
  ];
  return (
    <CurriWapper ref={ref} id='curriculum'>
      <CurriContainer>
        <CurriImgBox>
          <img src='../img/curriculum.svg' alt='커리큘럼사진예시' />
        </CurriImgBox>
      </CurriContainer>
      <TechStackTitle>
        <p>Programming Language</p>
      </TechStackTitle>
      <TechStackImgContainer>
        <TechCommonBox>
          <img
            src='../img/htmlcss.png'
            alt='HtmlAndCss 아이콘'
            {...AnimationArray[0].animation}
          />
          <img
            src='../img/react.png'
            alt='리액트 아이콘'
            {...AnimationArray[1].animation}
          />
        </TechCommonBox>
        <TechLanguageBox>
          <img
            src='../img/node.png'
            alt='노드JS 아이콘'
            {...AnimationArray[2].animation}
          />
          <img
            src='../img/javascript.png'
            alt='JS 아이콘'
            {...AnimationArray[3].animation}
          />
          <img
            src='../img/django.png'
            alt='장고 아이콘'
            {...AnimationArray[4].animation}
          />
        </TechLanguageBox>
      </TechStackImgContainer>
      <TechStackTitle>
        <p>Team Collaboration Tool</p>
      </TechStackTitle>
      <TechStackImgContainer>
        {/* 피그마 아이콘 잘리는 현상 */}
        <TechCommonBox>
          <img
            src='../img/slack.png'
            alt='슬랙 아이콘'
            {...AnimationArray[5].animation}
          />
          <img
            src='../img/notion.png'
            alt='노션 아이콘'
            {...AnimationArray[6].animation}
          />
        </TechCommonBox>
        <TechToolBox TechToolBox>
          <img
            src='../img/figma.png'
            alt='피그마 아이콘'
            {...AnimationArray[7].animation}
          />
          <img
            src='../img/github.png'
            alt='깃허브 아이콘'
            {...AnimationArray[8].animation}
          />
          <img
            src='../img/gatherTown.png'
            alt='게더타운 아이콘'
            {...AnimationArray[9].animation}
          />
        </TechToolBox>
      </TechStackImgContainer>
    </CurriWapper>
  );
});

export default Curriculum;
