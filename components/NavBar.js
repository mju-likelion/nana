import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';

const NavWrap = styled.div`
  /* 상단 고정 */
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

const ToggleMenu = styled.div`
  /* 기본 설정 none -> 모바일에서는 block */
  display: none;
  position: absolute;
  top: 35px;
  right: 80px;
  font-size: 25px;
  color: #FFFFFF;
  cursor: pointer;

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const NavBar = () => {
  // 모바일 메뉴바 선택 전 기본 값 false
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <NavWrap>
        <NavContainer>
          <Logo />
          <Menu isToggled={isToggled} />
        </NavContainer>
        <ToggleMenu onClick={()=>{
          setIsToggled(!isToggled);
        }}>
          {!isToggled ? <GiHamburgerMenu /> : <MdClose />}
        </ToggleMenu>
      </NavWrap>
    </div>
  );
};

export default NavBar;