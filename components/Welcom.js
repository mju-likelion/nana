import styled from 'styled-components';

import ApplyButton from './ApplyButton';

const WelcomComtainer = styled.div`
  display: flex;
  align-items: center;

  min-width: 100vh;
  height: 100vh;
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

const WelcomText = styled.div`
  margin: 0 auto;
  text-align: center;
  h1 {
    color: #ffd25e;
    font-size: 60px;
    font-weight: bolder;
    margin-bottom: 25px;
  }
  h2 {
    color: #fff;
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: 24px;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 61px;
  }
`;

const Welcom = () => {
  return (
    <WelcomComtainer>
      <WelcomText>
        <h1>HACK YOUR LIFE</h1>
        <h2>프로그래밍으로 당신의 인생을 바꿔보세요!</h2>
        <p>프로그래밍을 통해 함께 만들어 가는 꿈을 위한 여정</p>
        <ApplyButton text='10기 지원하기' width='166px' height='50px' />
      </WelcomText>
    </WelcomComtainer>
  );
};

export default Welcom;
