import { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';

const IntroWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const IntroContainer = styled.div`
  position: relative;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    position: absolute;
    width: 1024px;
    height: 425px;
  }

  @media screen and (max-width: 1024px) {
    img {
      position: static;
      width: 80%;
      height: auto;
    }
  }
`;

const IntroServiceHover = styled.a`
  color: #ffd25d;
  cursor: pointer;
  text-decoration: underline;
`;

const IntroStudyHover = styled.a`
  color: #ffd25d;
  cursor: pointer;
  text-decoration: underline;
`;

const IntroTextArray = styled.div`
  @media screen and (max-width: 1024px) {
    position: static;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-top: 27px;
    font-size: 16px;
    font-weight: 900;
  }
  width: 985px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  z-index: 1;
  word-break: keep-all;
`;

const IntroMjuTextColor = styled.p`
  @media screen and (max-width: 1024px) {
    color: black;
  }
  color: #ffffff;
`;

const IntroLastTextBox = styled.div`
  @media screen and (max-width: 1024px) {
    font-size: 25px;
    margin-top: 120px;
  }
  margin-top: 250px;
  margin-bottom: 200px;
  font-size: 55px;
  font-weight: 800;
  color: #1f1f1f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Introduction = forwardRef((props, ref) => {
  return (
    <IntroWapper ref={ref} id='introduction'>
      <IntroContainer>
        <img src='../img/introLikelion.png' alt='멋사중앙건물' />
        <IntroTextArray>
          <IntroMjuTextColor>
            멋쟁이사자처럼은 2013년 비영리법인으로 시작하여
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            국내 및 국외(한국, 미국, 호주, 홍콩, 일본 등) 7,000여명의 대학생에게
            프로그래밍 교육을 제공해왔습니다.
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            2018년 5월 영리법인으로 전환하여 교육 대상과 지역(베트남 등)을
            확장했고,
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            현재는 멋쟁이사자처럼 대학생, 멋쟁이사자처럼 직장인 , 멋쟁이사자처럼
            AI School , 광주 인공지능사관학교 등의
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            오프라인 교육과, 글로벌 온라인 코딩 교육 플랫폼 코드라이언(CODE
            LION)을 개발, 운영하고 있습니다.
          </IntroMjuTextColor>
          <br />
          <IntroMjuTextColor>
            2018년 5월 영리법인으로 전환한 이후, 2019년 전년 대비 매출액 425%를
            달성했고,
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            2020년에는 전년 대비 1,500% 이상의 성장을 달성했습니다.
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            이에 역량과 향후 글로벌 차원의 성장성을 인정받아 2019년 9월
            미래에셋벤처투자로부터 투자를 유치한바 있습니다.
          </IntroMjuTextColor>
        </IntroTextArray>
      </IntroContainer>

      <IntroContainer>
        <img src='../img/introLikelionMju.png' alt='멋사명지대단체사진' />
        <IntroTextArray>
          <IntroMjuTextColor>
            명지대(자연) 멋사는 (시작한년도)부터 시작하여 현재 N년 간 함께
            이어오는 중이에요 !
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            우리는 웹 서비스 제작을 위한 프로그래밍언어부터 프레임워크까지
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            하나하나 맛보고 내 것으로 만들 수 있어요.
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            우리가 만든{' '}
            <IntroServiceHover>
              <a href='#output'>웹서비스</a>
            </IntroServiceHover>
            가 궁금하다면 ?
          </IntroMjuTextColor>
          {/* 위문장 누르면 웹 서비스 소개하는 곳으로 스크롤 이동되게끔 구현 */}
          <IntroMjuTextColor>
            명지대 멋사는 우리끼리의 활동뿐만 아니라 다른 학교와의 연합스터디도
            준비되어 있어요 !
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            많은 사람들과 원하는 스택을 공부할 수 있는 환경까지 만들어준답니다.
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            <IntroStudyHover
              href='https://github.com/KOSMOSstudy'
              target='_blank'
            >
              명지대(자연)와 다른 학교의 연합
            </IntroStudyHover>
            이 궁금하다면?
          </IntroMjuTextColor>
          {/* 위 문장을 코스모스 깃허브 링크 url로 연결해야 함 */}
        </IntroTextArray>
      </IntroContainer>
      <IntroLastTextBox>
        <p>지금 보시는 페이지도 만들 수 있어요! </p>
      </IntroLastTextBox>
    </IntroWapper>
  );
});

export default Introduction;
