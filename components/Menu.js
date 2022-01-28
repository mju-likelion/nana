// LIKELION|MJU, CURRICULUM, OUTPUT, JOIN 메뉴 컴포넌트
import styled from 'styled-components';

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 485px;
  height: 25px;

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.isToggled ? "flex" : "none")};
    flex-direction: column;
    /* 세로변환 시 메뉴들 센터로 -> 너비는 넓게 100% */
    align-items: center;
    width: 100%;
  }
`;

const MenuBtn = styled.button`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 12px;
  padding: 0 28px;
  transition: 0.2s;
  cursor: pointer;

  &:hover { 
  padding-bottom: 8px;
  }

  /* 모바일 디자인 */
  @media screen and (max-width: 1024px) {
    margin: 10px 0;
    padding: 30px 0;
  }
`;

const Menu = ({isToggled}) => {
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