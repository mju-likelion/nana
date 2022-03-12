import { forwardRef } from 'react';
import styled from 'styled-components';

import OutPutSlide from './OutPutSlide';

const OutPutWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 230px;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 85px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  h2 {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding: 30px 0 20px 0;

    @media screen and (max-width: 1024px) {
      font-size: 23px;
      width: 100%;
    }
  }
`;

// 해커톤 서비스 정보배열
const Hackathon = [
  {
    id: 0,
    title: '준비됐멍 팀의 반려견 입양 준비도 테스트 & 커뮤니티',
    serviceImg:
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/walwal1.png',
  },
  {
    id: 1,
    title: '라온에어 팀의 연극, 극단을 찾아볼 수 있는 서비스',
    serviceImg:
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/raonAir1.png',
  },
  {
    id: 2,
    title: 'MapLog 팀의 그 날의 기록을 지도로 한 눈에 보는 서비스',
    serviceImg:
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/mapLog1.png',
  },
  {
    id: 3,
    title: 'Man’s Skin 팀의 그루밍 정보를 빠르게 제공하는 서비스',
    serviceImg:
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/mansSkin1.png',
  },
  {
    id: 4,
    title: 'Save Energy 팀의 대기 전력 계산을 통한 환경보호 서비스',
    serviceImg:
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/saveEnergy1.png',
  },
  {
    id: 5,
    title: 'One can do it 팀의 1인 가구 맞춤형 마켓 & 커뮤니티',
    serviceImg:
      'https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/oneCan1.png',
  },
];

const OutPut = forwardRef((props, ref) => {
  return (
    <OutPutWrap ref={ref} id='output'>
      <ContentWrap>
        <h2>우리는 이런 것을 만들었어요</h2>
        <OutPutSlide Hackathon={Hackathon} />
      </ContentWrap>
    </OutPutWrap>
  );
});

export default OutPut;
