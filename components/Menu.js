// LIKELION|MJU, CURRICULUM, OUTPUT, JOIN 메뉴 컴포넌트
import { forwardRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
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
    margin: 15px 0 0 0;
    background: #071d49d9;

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
      title: 'LIKELION | MJU',
    },
    {
      ref: ref[2],
      href: '#curriculum',
      title: 'CURRICULUM',
    },
    {
      ref: ref[3],
      href: '#output',
      title: 'OUTPUT',
    },
    {
      ref: ref[4],
      href: '#join',
      title: 'JOIN',
    },
    {
      ref: ref[5],
      href: '#apply',
      title: 'APPLY',
    },
  ];

  // href를 받아 string으로 변환한 후 해당 객체 까지 이동
  const smoothScrollEvent = (target) => {
    smoothscroll.polyfill();

    // herf 객체를 object로 변환 후 쌍따옴표를 기준으로 나눔 그 후 다시 #으로 나눈다
    const pointArr = JSON.stringify(target.href).split('"');
    const splitAddr = pointArr[1].split('#');

    const ele = document.getElementById(splitAddr[1]);
    ele.scrollIntoView({
      behavior: 'smooth',
    });
  };

  // 부드러운 스크롤을 위한 헨들러
  const handleScroll = (e) => {
    smoothScrollEvent(e.target);
    e.preventDefault();
  };

  return (
    <MenuWrap ref={ref} isToggled={isToggled}>
      {menuItems.map((item) => (
        <a
          onClick={handleScroll}
          href={item.href}
          ref={item.ref}
          key={item.title}
        >
          {item.title}
        </a>
      ))}
    </MenuWrap>
  );
});

export default Menu;
