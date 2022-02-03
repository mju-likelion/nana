// LIKELION|MJU, CURRICULUM, OUTPUT, JOIN 메뉴 컴포넌트
import styled from 'styled-components';

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 485px;
  transition: 0.5s ease-in-out;

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    flex-direction: column;
    /* 세로변환 시 메뉴들 센터로 -> 너비는 넓게 100% */
    align-items: center;
    width: 100%;
  }
  /* background: red; */
`;

const MenuBtn = styled.button`
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    /* 밑줄 애니메이션을 좀 더 개선 필요 */
    border-bottom: 1px #fff solid;
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
