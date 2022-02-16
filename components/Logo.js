// Navbar 로고와 명지대이름 컴포넌트
import styled from 'styled-components';

import LogoSVG from '../public/img/MjuLogo.svg';

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin: 5px 0 0 10px;
    margin-top: 10px;
  }
`;

const MjuLogo = styled(LogoSVG)`
  margin-right: 15px;
  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

const LogoTitle = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
    font-weight: bold;
    font-size: 13px;
  }
`;

const Logo = () => {
  return (
    <LogoWrap>
      <MjuLogo alt='MJULOGO' />
      <LogoTitle>멋쟁이사자처럼 명지대(자연)</LogoTitle>
    </LogoWrap>
  );
};

export default Logo;
