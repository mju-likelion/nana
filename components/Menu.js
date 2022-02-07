/* eslint-disable no-console */
// LIKELION|MJU, CURRICULUM, OUTPUT, JOIN 메뉴 컴포넌트
import styled from 'styled-components';

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 485px;
  margin: 0 20px;

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    flex-direction: column;
    /* 세로변환 시 메뉴들 센터로 -> 너비는 넓게 100% */
    align-items: center;
    width: 100%;
  }
`;

const MenuBtn = styled.button`
  position: relative;
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  transition: 0.2s;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 50%;
    width: 0;
    height: 2px;
    border-radius: 3px;
    margin: 5px auto 0 auto;
    transition: 0.2s ease-in-out;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    background: #fff;
  }

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
    padding: 20px 0;
  }
`;

const Menu = ({ isToggled }) => {
  return (
    <MenuWrap isToggled={isToggled}>
      <MenuBtn>LIKELION | MJU</MenuBtn>
      <MenuBtn>CURRICULUM</MenuBtn>
      <MenuBtn>OUTPUT</MenuBtn>
      <MenuBtn>JOIN</MenuBtn>
    </MenuWrap>
  );
};

export default Menu;
