import { forwardRef } from 'react';
import styled from 'styled-components';

import useScrollAnimation from '../hooks/useScrollAnimation';
import DjangoImg from '../public/img/django.svg';
import FigmaImg from '../public/img/figma.svg';
import GathertownImg from '../public/img/gathertown.svg';
import GithubImg from '../public/img/github.svg';
import HtmlCssImg from '../public/img/htmlCss.svg';
import JsImg from '../public/img/javascript.svg';
import NodeImg from '../public/img/node.svg';
import NotionImg from '../public/img/notion.svg';
import ReactImg from '../public/img/react.svg';
import SlackImg from '../public/img/slack.svg';

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

const HtmlCssBox = styled(HtmlCssImg)`
  margin: 0 30px;
  width: 156px;
  height: 87px;

  @media screen and (max-width: 1024px) {
    margin: 0 15px;
    width: 140px;
    height: 78px;
  }
`;

const ReactBox = styled(ReactImg)`
  margin: 10px 30px 0 30px;
  width: 79px;
  height: 79px;
  @media screen and (max-width: 1024px) {
    margin: 5px 15px 0 15px;
    width: 77px;
    height: 80px;
  }
`;

const NodeBox = styled(NodeImg)`
  margin: 7px 30px 0 30px;
  width: 115px;
  height: 70px;
  @media screen and (max-width: 1024px) {
    margin: 0 15px;
    width: 103px;
    height: 63px;
  }
`;

const JsBox = styled(JsImg)`
  margin: 5px 30px 0 30px;
  width: 76px;
  height: 76px;
  border-radius: 6px;
  @media screen and (max-width: 1024px) {
    margin: 0 15px;
    width: 68px;
    height: 68px;
    border-radius: 6px;
  }
`;

const DjangoBox = styled(DjangoImg)`
  margin: 5px 30px 0 30px;
  width: 60px;
  height: 76px;
  @media screen and (max-width: 1024px) {
    margin: 0 15px;
    width: 54px;
    height: 68px;
  }
`;

const SlackBox = styled(SlackImg)`
  margin: 0 30px;
  width: 155px;
  height: 65px;
  @media screen and (max-width: 1024px) {
    margin: 0 15px;
    width: 138px;
    height: 57px;
  }
`;

const NotionBox = styled(NotionImg)`
  margin: 0 30px;
  width: 68px;
  height: 68px;
  @media screen and (max-width: 1024px) {
    margin: 0 15px;
    width: 61px;
    height: 50px;
  }
`;

const FigmaBox = styled(FigmaImg)`
  margin: 0 30px 0 32px;
  width: 48px;
  height: 70px;
  @media screen and (max-width: 1024px) {
    margin: 0 15px 0 8px;
    width: 43px;
    height: 63px;
  }
`;

const GithubBox = styled(GithubImg)`
  margin: 11px 30px 0 30px;
  width: 140px;
  height: 44px;
  @media screen and (max-width: 1024px) {
    margin: 2px 15px 0 10px;
    width: 126px;
    height: 40px;
  }
`;

const GathertownBox = styled(GathertownImg)`
  margin: 6px 30px 0 30px;
  width: 138px;
  height: 54px;
  @media screen and (max-width: 1024px) {
    margin: 0 2px 0 10px;
    width: 124px;
    height: 49px;
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
    { id: 10, animation: useScrollAnimation('up', 2.5, 1) },
  ];
  return (
    <CurriWapper ref={ref} id='curriculum'>
      <CurriContainer>
        <CurriImgBox>
          <img src='../img/curriculum.png' alt='커리큘럼사진예시' />
        </CurriImgBox>
      </CurriContainer>
      <TechStackTitle>
        <p>Programming Language</p>
      </TechStackTitle>
      <TechStackImgContainer>
        <TechCommonBox>
          <div {...AnimationArray[0].animation}>
            <HtmlCssBox alt='HtmlAndCss 아이콘' />
          </div>
          <div {...AnimationArray[1].animation}>
            <ReactBox alt='리액트 아이콘' />
          </div>
        </TechCommonBox>
        <TechLanguageBox>
          <div {...AnimationArray[2].animation}>
            <NodeBox alt='노드JS 아이콘' />
          </div>

          <div {...AnimationArray[3].animation}>
            <JsBox alt='JS 아이콘' />
          </div>

          <div {...AnimationArray[4].animation}>
            <DjangoBox alt='장고 아이콘' />
          </div>
        </TechLanguageBox>
      </TechStackImgContainer>
      <TechStackTitle>
        <p>Team Collaboration Tool</p>
      </TechStackTitle>
      <TechStackImgContainer>
        {/* 피그마 아이콘 잘리는 현상 */}
        <TechCommonBox>
          <div {...AnimationArray[5].animation}>
            <SlackBox alt='슬랙 아이콘' />
          </div>
          <div {...AnimationArray[6].animation}>
            <NotionBox alt='노션 아이콘' />
          </div>
        </TechCommonBox>
        <TechToolBox TechToolBox>
          <div {...AnimationArray[7].animation}>
            <FigmaBox alt='피그마 아이콘' />
          </div>

          <div {...AnimationArray[8].animation}>
            <GithubBox alt='깃허브 아이콘' />
          </div>
          <div {...AnimationArray[9].animation}>
            <GathertownBox alt='게더타운 아이콘' />
          </div>
        </TechToolBox>
      </TechStackImgContainer>
    </CurriWapper>
  );
});

export default Curriculum;
