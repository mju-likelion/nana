// import { useState, useEffect } from 'react';
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
  /* over-fit: contain; */
  border-radius: 6px;
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
      '../img/walwal.svg',
      '../img/walwal1.svg',
      '../img/walwal2.svg',
    ],
    explainImgs: ['메인페이지', '테스트 합격증', '멍멍고사'],
  },
  {
    id: 1,
    explaination: '9기 RaonAir 팀',
    serviceImgs: ['../img/raonAir.svg', '../img/raonAir1.svg'],
    explainImgs: ['메인페이지', '상세페이지'],
  },
  {
    id: 2,
    explaination: '9기 MapLog 팀',
    serviceImgs: [
      '../img/mapLog.svg',
      '../img/mapLog1.svg',
      '../img/mapLog2.svg',
    ],
    explainImgs: ['메인페이지', '로그 작성창', '맵로그 팀소개'],
  },
  {
    id: 3,
    explaination: '9기 Mans Skin 팀',
    serviceImgs: [
      '../img/mansSkin.svg',
      '../img/mansSkin1.svg',
      '../img/mansSkin2.svg',
    ],
    explainImgs: ['메인페이지', '피부 측정', '커뮤니티 페이지'],
  },
  {
    id: 4,
    explaination: '9기 Save Energy 팀',
    serviceImgs: [
      '../img/saveEnergy.svg ',
      '../img/saveEnergy1.svg',
      '../img/saveEnergy2.svg',
    ],
    explainImgs: ['메인페이지', '월 이산화탄소 계산', '월별 사용량 기록'],
  },
  {
    id: 5,
    explaination: '9기 One Can Do it! 팀',
    serviceImgs: [
      '../img/oneCan.svg',
      '../img/oneCan1.svg',
      '../img/oneCan2.svg',
    ],
    explainImgs: ['메인페이지', '로그인화면', '레시피 커뮤니티'],
  },
];

const Modal = ({ openModal, currentSlide }) => {
  return (
    <Container onClick={openModal}>
      <Background>
        {/* 모달창 바깥쪽에만 off되도록 stopPropagation 적용 */}
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ContentsWrap>
            <ImgsContainer>
              {/* 서비스별로 다른 사진 나타내기 */}
              {Addition[currentSlide].serviceImgs.map((item) => (
                <Imgs key={item}>
                  <AdditionImg src={item} alt='해커톤 서비스 사진' />
                </Imgs>
              ))}
            </ImgsContainer>
          </ContentsWrap>
          <CloseBtn onClick={openModal}>나가기</CloseBtn>
        </ModalContainer>
      </Background>
    </Container>
  );
};

export default Modal;
