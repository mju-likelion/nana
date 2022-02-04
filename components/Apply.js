import styled from 'styled-components';

import ApplyButton from './ApplyButton';

const BgGradient = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -2;
  margin-top: 300px;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #ffffff 0.01%,
    #bfafee 7.88%,
    rgba(103, 72, 163, 0.881446) 22.48%,
    rgba(96, 60, 162, 0.875909) 24.08%,
    #4a458c 31.25%,
    #282564 49.37%,
    #221c5f 66.15%,
    #0c0d41 100%
  );
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.08) 70%,
      rgba(255, 255, 255, 0.15) 80%,
      rgba(255, 255, 255, 0.25) 85%,
      rgba(255, 255, 255, 0.8) 95%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('../img/applyBg2.png');
  background-size: cover;
  z-index: -1;
`;

const ApplyEng = styled.div`
  @media screen and (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: -20px;
  }
  font-family: 'Mulish-ExtraBold';
  font-size: 30px;
  color: white;
`;

const ApplyText = styled.div`
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
  font-size: 60px;
  font-weight: 800;
  color: white;
  margin: 50px auto;
`;

const Apply = () => {
  return (
    <BgGradient>
      <BackgroundImage />
      <ApplyEng>APPLY</ApplyEng>
      <ApplyText>10기의 주인공은 바로 당신 !</ApplyText>
      <ApplyButton text='10기 지원하기' width='356px' height='61px' />
    </BgGradient>
  );
};

export default Apply;
