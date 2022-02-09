// LIKELION|MJU, CURRICULUM, OUTPUT, JOIN 메뉴 컴포넌트
import { forwardRef } from 'react';
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
    margin: 0;
    background: #071d49;
    a {
      padding: 20px 0;
    }
  }

  a {
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
      margin-top: 5px;
      transition: 0.2s ease-in-out;
    }
    &:hover:after {
      width: 100%;
      left: 0;
      background: #fff;
    }
  }
`;

const Menu = forwardRef((props, ref) => {
  const { isToggled } = props;
  const menuItems = [
    {
      ref: ref[1],
      href: '#introduction',
      tittle: 'LIKELION | MJU',
    },
    {
      ref: ref[2],
      href: '#curriculum',
      tittle: 'CURRICULUM',
    },
    {
      ref: ref[3],
      href: '#output',
      tittle: 'OUTPUT',
    },
    {
      ref: ref[4],
      href: '#join',
      tittle: 'JOIN',
    },
    {
      ref: ref[5],
      href: '#apply',
      tittle: 'APPLY',
    },
  ];

  return (
    <MenuWrap ref={ref} isToggled={isToggled}>
      {menuItems.map((item) => (
        <a ref={item.ref} href={item.href}>
          {item.tittle}
        </a>
      ))}
    </MenuWrap>
  );
});

export default Menu;
