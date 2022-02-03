import styled from 'styled-components';

import OutPutSlide from './OutPutSlide';

const OutPutWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 85px;
  width: 900px;
  height: 80%;
  /* background-color: orange; */

  h2 {
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    padding: 30px 0 20px 0;
    /* background-color: tomato; */
  }
`;

// 해커톤 서비스 정보배열
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
    title: "MapLog 팀의 그 날의 기록을 지도로 한 눈에 보는 서비스",
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

const OutPut = () => {
  return (
    <OutPutWrap>
      <ContentWrap>
        <h2>우리는 이런 것을 만들었어요</h2>
        <OutPutSlide Hackathon={Hackathon} />
      </ContentWrap>
    </OutPutWrap>
  );
};

export default OutPut;
