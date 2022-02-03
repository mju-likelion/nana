import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  height: 80%;
  background-color: white;
`;

const SlideWrap = styled.div`
  /* 보이길 원하는 컨테이너 크기 설정 후, SlideContent를 hidden */
  display: flex;
  width: 700px;
  height: 95%;
  /* overflow-x: hidden; */
  background-color: black;
`;

// 해커톤 설명과 사진이 들어갈 컨테이너
// SlideContent에 ref를 줘서 설명과 사진이 동시에 동작하도록
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;

  /* 이미지가 들어갈 틀 */
  .ImgContainer {
    background-color: olive;
    width: 600px;
    height: 315px;
    margin: 10px 50px 0 50px;
  }
`;

// 해커톤 서비스 설명
const OutPutContent = styled.div`
  background-color: pink;
  color: #7a7a7a;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 600px;
  height: 60px;
  padding-top: 20px;
  margin: 0 50px 0 50px;
`;

// 해커톤 서비스 이미지
const OutPutImages = styled.img`
  box-sizing: border-box;
  /* 원본 비율 유지, ImgContainer에 맞춰 이미지 조정하기 */
  object-fit: contain;
  width: 100%;
`;

// 슬라이드 버튼
const SlideBtn = styled.img`
  width: 50px;
  height: 50px;
  transform: ${(props)=>props.prevBtn && "rotate(180deg)"};
  cursor: pointer;
`;

const Hackathon = [
  {
    title: "준비됐멍 팀의 반려견 입양 준비도 테스트 & 커뮤니티",
    serviceImg: "../Img/walwal.png",
  },
  {
    title: "라온에어 팀의 연극, 극단을 찾아볼 수 있는 서비스", 
    serviceImg: "../Img/raonAir.png",
  },
  {
    title: "Maplog 팀의 그 날의 기록을 지도로 한 눈에 보는 서비스",
    serviceImg: "../Img/mapLog.png",
  },
  {
    title: "Man’s Skin 팀의 그루밍 정보를 빠르게 제공하는 서비스",
    serviceImg: "../Img/mansSkin.png",
  },
  {
    title: "Save Energy 팀의 대기 전력 계산을 통한 환경보호 서비스",
    serviceImg: "../Img/saveEnergy.png",
  },
  {
    title: "One can do it 팀의 1인 가구 맞춤형 마켓 & 커뮤니티",
    serviceImg: "../Img/oneCan.png",
  },
]

const OutPutSlide = () => {
  return (
    <SlideContainer>
      <SlideBtn src="../img/arrow.svg" prevBtn />
      <SlideWrap>
        {
          Hackathon.map((item, index)=>
            <SlideContent key={item.index}>
              <OutPutContent>{item.title}</OutPutContent>
              <div className="ImgContainer">
                <OutPutImages src={item.serviceImg} />
              </div>
            </SlideContent>
          )
        }
      </SlideWrap>
      <SlideBtn src="../img/arrow.svg" />
    </SlideContainer>
  );
};

export default OutPutSlide;
