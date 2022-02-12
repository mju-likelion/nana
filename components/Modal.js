import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

// 모달의 하얀창
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 500px;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;

  @media screen and (max-width: 1024px) {
    width: 320px;
    height: 470px;
  }
`;

const ContentsWrap = styled.div`
  width: 85%;
  height: 380px;

  @media screen and (max-width: 1024px) {
    display: flex;
    width: 90%;
    height: 430px;
  }
`;

// 따옴표와 팀명이 들어갈 컨테이너
const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0 0 0;

  @media screen and (max-width: 1024px) {
    margin: 5px 0 0 0;
  }
`;

const TeamName = styled.div`
  display: inline;
  margin: 10px 0 0 0;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  line-height: 25px;
  color: #7a7a7a;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

const Quotes = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px;
  transform: ${(props) => props.reverseQuotes && 'rotate(180deg)'};
`;

const ImgsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  margin: 20px auto -25px auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 94%;
    margin: 10px 0 0 0;
  }
`;

const Imgs = styled.div`
  width: 200px;
  height: 65%;
  margin: 0 5px 5px 5px;

  @media screen and (max-width: 1024px) {
    width: 180px;
    height: 40%;
  }
`;

// 모달창에 추가로 넣는 해커톤 이미지
const AdditionImg = styled.img`
  box-sizing: border-box;
  over-fit: contain;
  border-radius: 6px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
    height: 95%;
    margin: 10px 0 0 0;
  }
`;

// 해커톤 사진 설명
const AdditionContent = styled.div`
  width: 160px;
  height: 40px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  padding: 12px 0;
  margin: 0 30px 5px 30px;
  border: 1px solid #7a7a7a80;
  border-radius: 2em;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: #7a7a7a;
  background-color: transparent;

  @media screen and (max-width: 1024px) {
    font-size: 10px;
    width: 100px;
    height: 30px;
    padding: 10px 0;
    margin: 0 -10px 0 0px;
  }
`;

// 데스크탑/랩탑환경에서만 보이는 나가기버튼
const CloseBtn = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #eeeeee;
  border-radius: 2em;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: white;
  background-color: #bdbdbd80;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

// 모달창에 사용할 배열
const Addition = [
  {
    id: 0,
    explaination: '9기 준비됐멍 팀',
    serviceImgs: [
      '../img/walwal.png',
      '../img/walwal1.png',
      '../img/walwal2.png',
    ],
    explainImgs: ['메인페이지', '테스트 합격증', '멍멍고사'],
  },
  {
    id: 1,
    explaination: '9기 RaonAir 팀',
    serviceImgs: ['../img/raonAir.png', '../img/raonAir1.png'],
    explainImgs: ['메인페이지', '상세페이지'],
  },
  {
    id: 2,
    explaination: '9기 MapLog 팀',
    serviceImgs: [
      '../img/mapLog.png',
      '../img/mapLog1.png',
      '../img/mapLog2.png',
    ],
    explainImgs: ['메인페이지', '로그 작성창', '맵로그 팀소개'],
  },
  {
    id: 3,
    explaination: '9기 Mans Skin 팀',
    serviceImgs: [
      '../img/mansSkin.png',
      '../img/mansSkin1.png',
      '../img/mansSkin2.png',
    ],
    explainImgs: ['메인페이지', '피부 측정', '커뮤니티 페이지'],
  },
  {
    id: 4,
    explaination: '9기 Save Energy 팀',
    serviceImgs: [
      '../img/saveEnergy.png',
      '../img/saveEnergy1.png',
      '../img/saveEnergy2.png',
    ],
    explainImgs: ['메인페이지', '월 이산화탄소 계산', '월별 사용량 기록'],
  },
  {
    id: 5,
    explaination: '9기 One Can Do it! 팀',
    serviceImgs: [
      '../img/oneCan.png',
      '../img/oneCan1.png',
      '../img/oneCan2.png',
    ],
    explainImgs: ['메인페이지', '로그인화면', '레시피 커뮤니티'],
  },
];

const Modal = ({ openModal, currentSlide }) => {
  const [isExplaination, setIsExplaination] = useState('');

  useEffect(() => {
    setIsExplaination(Addition[currentSlide].explaination);
  }, [isExplaination]);

  return (
    <Container onClick={openModal}>
      <Background>
        {/* 모달창 바깥쪽에만 off되도록 stopPropagation 적용 */}
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <HeadContainer>
            <Quotes src='../img/quotes.png' />
            <TeamName>{isExplaination}</TeamName>
            <Quotes src='../img/quotes.png' reverseQuotes />
          </HeadContainer>
          <ContentsWrap>
            <ImgsContainer>
              {/* 서비스별로 다른 사진 나타내기 */}
              {Addition[currentSlide].serviceImgs.map((item) => (
                <Imgs key={item}>
                  <AdditionImg src={item} alt='해커톤 서비스 사진' />
                </Imgs>
              ))}
            </ImgsContainer>
            <ContentContainer>
              {/* 서비스별로 다른 설명 나타내기 */}
              {Addition[currentSlide].explainImgs.map((item) => (
                <AdditionContent key={item}>{item}</AdditionContent>
              ))}
            </ContentContainer>
          </ContentsWrap>
          <CloseBtn onClick={openModal}>나가기</CloseBtn>
        </ModalContainer>
      </Background>
    </Container>
  );
};

export default Modal;
