import { forwardRef } from 'react';
import styled from 'styled-components';

import useScrollAnimation from '../hooks/useScrollAnimation';

const IntroWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;
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
`;

const IntroBackground = styled.img`
  position: absolute;
  width: 1005px;
  height: ${(props) => (props.isBlue ? '550px' : '425px')};
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1024px) {
    position: static;
    width: 80%;
    height: auto;
  }
`;

const IntroServiceHover = styled.a`
  color: #ffd25d;
  cursor: pointer;
  text-decoration: underline;
`;

const IntroLinkHover = styled.a`
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
    font-size: 13px;
    font-weight: 900;
  }
  width: 985px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  z-index: 1;
  word-break: keep-all;
`;

const Textpartion = styled.div`
  margin: 15px 0;
`;

// const LikelionText = styled.div`
//   width: 340px;
//   margin: 10px auto;
//   text-align: start;
// `;

const IntroMjuTextColor = styled.p`
  @media screen and (max-width: 1024px) {
    color: black;
  }
  color: #ffffff;
`;

const IntroBigText = styled.p`
  font-size: 27px;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    color: black;
    margin: 60px 0 7px 0;
    font-size: 24px;
  }
`;
const Introduction = forwardRef((props, ref) => {
  const IntroductionAnimation = useScrollAnimation('up', 1.3, 0);
  const IntroductionMjuAnimation = useScrollAnimation('up', 2, 0);

  return (
    <IntroWapper ref={ref} id='introduction'>
      <IntroContainer>
        <IntroBackground
          src='../img/introLikelion.png'
          alt='멋사중앙건물'
          isBlue
        />
        <IntroTextArray {...IntroductionAnimation}>
          <Textpartion>
            <IntroMjuTextColor>
              우리 멋쟁이사자처럼은 2013년 비영리법인으로, 서울대학교에서부터
              1기가 시작됐어요!
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              현재는 영리법인으로 전환하여 교육의 범위를 확장했고,
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              `멋쟁이사자처럼 대학생-직장인` `AI SCHOOL` `광주
              인공지능사관학교`와 같은
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              온•오프라인 교육을 제공하고 있어요!
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              더불어 멋쟁이사자처럼의 설립자이신 이두희님과 유튜브 38만명
              구독자를 보유하신 조코딩님 등
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              멋진 실력자분들과 함께할 수 있는 온라인 코딩 교육 플랫폼인
              `코드라이언(CODE LION)`까지 운영하고 있답니다.
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              2020년에는 전년 대비 1,500% 이상의 성장을 달성했습니다.
            </IntroMjuTextColor>
          </Textpartion>
          <Textpartion>
            <IntroBigText>
              우리 멋쟁이사자처럼의 비전은 이렇습니다.
            </IntroBigText>

            <IntroMjuTextColor>
              • 성장 의지를 가진 사람들을 연결합니다
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              • 누구나 성장을 실현할 수 있도록 합니다
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              • 혁신적인 교육방식으로 성장을 이끌어 나갑니다
            </IntroMjuTextColor>
            <IntroMjuTextColor>
              • 시공간의 제약 없이 성장 가능한 환경을 만듭니다
            </IntroMjuTextColor>
          </Textpartion>
        </IntroTextArray>
      </IntroContainer>

      <IntroContainer>
        <IntroBackground
          src='../img/introLikelionMju.png'
          alt='멋사명지대단체사진'
        />
        <IntroTextArray {...IntroductionMjuAnimation}>
          <IntroMjuTextColor>
            명지대(자연) 멋사는 2019년부터 시작하여 현재 4년 간 함께 이어오는
            중이에요 !
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            우리는 웹 서비스 제작을 위한 프로그래밍언어부터 프레임워크까지
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            하나하나 맛보고 내 것으로 만들 수 있어요.
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            우리가 만든{' '}
            <IntroServiceHover href='#output'>웹서비스</IntroServiceHover>가
            궁금하다면 ?
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
            <IntroLinkHover
              href='https://github.com/KOSMOSstudy'
              target='_blank'
            >
              명지대(자연)와 다른 학교의 연합
            </IntroLinkHover>
            이 궁금하다면?
          </IntroMjuTextColor>
          <IntroMjuTextColor>
            <IntroLinkHover
              href='https://www.notion.so/4ad89f6d80eb45db97b78127b1a8dbf6'
              target='blank'
            >
              2022년 멋사를 이끌어 갈, 우리가 누구게~!~!~!
            </IntroLinkHover>
          </IntroMjuTextColor>
        </IntroTextArray>
      </IntroContainer>
    </IntroWapper>
  );
});

export default Introduction;
