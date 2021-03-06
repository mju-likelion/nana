import styled from 'styled-components';

import ApplyButton from './ApplyButton';
import FallingStarEffect from './FallingStarEffect';

const WelcomContainer = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  min-width: 100%;
  height: 100vh;
  z-index: 0;
  background: linear-gradient(
      180deg,
      #0c0d41 0%,
      #221c5f 36.98%,
      #352f85 67.71%,
      #40399e 79.69%,
      rgba(91, 55, 158, 0.76) 89.58%,
      rgba(84, 61, 151, 0) 100%
    ),
    linear-gradient(
      180deg,
      #0c0d41 0%,
      #221c5f 36.98%,
      #352f85 67.71%,
      #40399e 79.69%,
      rgba(91, 55, 158, 0.76) 89.58%,
      rgba(84, 61, 151, 0) 100%
    );
`;

const BackgroundBox = styled.div`
  position: absolute;
  min-width: 100%;
  /* height: 90vh; */
  min-height: 90%;
  top: 0;
  background: url('https://promotionlikelion.s3.ap-northeast-2.amazonaws.com/bgSky.png');
  background-size: cover;
  z-index: -1;
`;

const WelcomText = styled.div`
  font-family: 'Mulish-ExtraBold';
  margin: 0 auto;
  text-align: center;
  word-break: keep-all;
  h2 {
    color: #fff;
    font-size: 30px;
    font-weight: bolder;
    line-height: 25px;
  }
  h2:nth-child(1)::after {
    content: '';
    margin-left: 8px;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: bolder;
    margin: 24px 0 61px 0;
    line-height: 15px;
  }
  span {
    display: flex;
  }

  @media screen and (max-width: 1024px) {
    span {
      display: block;
    }
    h1,
    h2 {
      font-size: 20px;
    }
    p {
      margin: 8px auto 30px auto;
      /* width: 162px; */
      font-size: 10px;
    }
  }
`;

const WelcomeTitle = styled.div`
  font-family: 'Mulish-ExtraBold';
  color: #ffd25e;
  font-size: 60px;
  font-weight: bolder;
  margin-bottom: 25px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

const Welcom = () => {
  return (
    <WelcomContainer>
      {/* 별똥별 이팩트 */}
      <FallingStarEffect />
      {/* 백그라운드를 제외하고 싶다면 이 컴포넌트를 주석해주세요 */}
      <BackgroundBox />
      <WelcomText>
        <WelcomeTitle>HACK YOUR LIFE</WelcomeTitle>
        <span>
          <h2>프로그래밍으로</h2>
          <h2>당신의 인생을 바꿔보세요!</h2>
        </span>
        <p>프로그래밍을 통해 함께 만들어 가는 꿈을 위한 여정</p>
        <ApplyButton text='10기 지원하기' width='166px' height='50px' />
      </WelcomText>
    </WelcomContainer>
  );
};

export default Welcom;
