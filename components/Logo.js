// Navbar 로고와 명지대이름 컴포넌트
import styled from 'styled-components';

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const MjuLogo = styled.div`
  width: 112px;
  height: 112px;
  padding: 20px 0 0 0;

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
   width: 90px;
   height: 90px;
  }
`;

const LogoTitle = styled.div`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 15px;
  margin-left: -10px;

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
   font-weight: bold;
   font-size: 14px;
  }
`;

const Logo = () => {
  return (
    <LogoWrap>
      <MjuLogo>
        <img src="../img/MjuLogo.svg" alt="MJULOGO"/>
      </MjuLogo>
      <LogoTitle>멋쟁이사자처럼 명지대(자연)</LogoTitle>
    </LogoWrap>
  );
};

export default Logo;