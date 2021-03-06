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
  width: 50%;
  height: 80%;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;

  @media screen and (max-width: 1024px) {
    margin-top: 45px;
    width: 85%;
    height: 77%;
  }
`;

const ContentsWrap = styled.div`
  width: 90%;
  height: 90%;

  @media screen and (max-width: 1024px) {
    display: flex;
    width: 90%;
    height: 95%;
  }
`;

const ImgsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin: 20px auto -25px auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0 auto;
    height: 100%;
  }
`;

const Imgs = styled.div`
  width: 47%;
  height: 52%;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  margin: 5px;

  @media screen and (max-width: 1024px) {
    width: 75%;
    max-height: 35%;
  }
`;

// 모달창에 추가로 넣는 해커톤 이미지
const AdditionImg = styled.img`
  box-sizing: border-box;
  border-radius: 6px;
  object-fit: contain;
`;

// 데스크탑/랩탑환경에서만 보이는 나가기버튼
const CloseBtn = styled.button`
  width: 130px;
  height: 30px;
  margin: 22px 0 25px 0;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #eeeeee;
  border-radius: 0.5em;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: white;
  background-color: #bdbdbd80;
  cursor: pointer;

  &:hover {
    background-color: #bdbdbd;
    transition-duration: 0.2s;
  }

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
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/walwal1.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/walwal2.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/walwal3.png',
    ],
  },
  {
    id: 1,
    explaination: '9기 RaonAir 팀',
    serviceImgs: [
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/raonAir1.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/raonAir2.png',
    ],
  },
  {
    id: 2,
    explaination: '9기 MapLog 팀',
    serviceImgs: [
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/mapLog1.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/mapLog2.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/mapLog3.png',
    ],
  },
  {
    id: 3,
    explaination: '9기 Mans Skin 팀',
    serviceImgs: [
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/mansSkin1.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/mansSkin2.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/mansSkin3.png',
    ],
  },
  {
    id: 4,
    explaination: '9기 Save Energy 팀',
    serviceImgs: [
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/saveEnergy1.png ',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/saveEnergy2.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/saveEnergy3.png',
    ],
  },
  {
    id: 5,
    explaination: '9기 One Can Do it! 팀',
    serviceImgs: [
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/oneCan1.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/oneCan2.png',
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/oneCan3.png',
    ],
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
