import {GiHamburgerMenu} from 'react-icons/gi';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';

const NavWrap = styled.div`
  /* 상단 고정 */
  background-color: royalblue;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 114px;
  background-color: transparent;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1084px;
  margin: 0 auto;

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  position: absolute;
  top: 35px;
  right: 100px;
  font-size: 25px;
  color: #FFFFFF;
  cursor: pointer;

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const NavBar = () => {
  return (
    <div>
      <NavWrap>
        <NavContainer>
          <Logo />
          <Menu />
        </NavContainer>
      </NavWrap>
      <HamburgerMenu>
        <GiHamburgerMenu />
      </HamburgerMenu>
    </div>
  );
};

export default NavBar;