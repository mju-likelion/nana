import { useState, useRef, useEffect } from 'react';
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
  z-index: 10;
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
  right: 30px;
  font-size: 25px;
  color: #ffffff;
  cursor: pointer;

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const HamburgerMenu = styled.div`
  /* width: 60px; */
  width: 40px;
  height: 20px;
  position: relative;
  margin: 50 auto;
  transform: rotate(0deg);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  span:nth-child(1) {
    top: 0px;
  }
  span:nth-child(2) {
    top: 10px;
  }
  span:nth-child(3) {
    top: 20px;
  }
`;

const NavBar = ({ scrollRefs }) => {
  // 모바일 메뉴바 선택 전 기본 값 false
  const toggleRefTop = useRef();
  const toggleRefMid = useRef();
  const toggleRefBottom = useRef();

  const [isToggled, setIsToggled] = useState(false);

  const handleToggleMenu = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (isToggled) {
      toggleRefTop.current.style.transform = 'rotate(135deg)';
      toggleRefTop.current.style.top = '10px';
      toggleRefMid.current.style.left = '-60px';
      toggleRefMid.current.style.opacity = '0';
      toggleRefBottom.current.style.top = '10px';
      toggleRefBottom.current.style.transform = 'rotate(-135deg)';
    } else {
      toggleRefTop.current.style.transform = 'rotate(0)';
      toggleRefTop.current.style.top = '0';
      toggleRefMid.current.style.left = '0';
      toggleRefMid.current.style.opacity = '1';
      toggleRefBottom.current.style.top = '20px';
      toggleRefBottom.current.style.transform = 'rotate(0)';
    }
  }, [isToggled]);

  return (
    <NavWrap>
      <NavContainer>
        <Logo />
        <Menu isToggled={isToggled} scrollRefs={scrollRefs} />
      </NavContainer>
      <ToggleMenu onClick={handleToggleMenu}>
        <HamburgerMenu>
          <span ref={toggleRefTop} />
          <span ref={toggleRefMid} />
          <span ref={toggleRefBottom} />
        </HamburgerMenu>
      </ToggleMenu>
    </NavWrap>
  );
};

export default NavBar;
