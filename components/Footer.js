import styled from 'styled-components';

import Github from '../public/img/GitFooter.svg';

const FooterSelf = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  margin-top: auto;
  flex-direction: row;
  z-index: 100;
`;

const MjuLogo = styled.div`
  font-size: 15px;
  margin: auto;
  color: white;
`;

function Footer() {
  return (
    <FooterSelf>
      <MjuLogo>LIKE LION | MJU Nature © 2022</MjuLogo>
      <a
        href='https://github.com/mju-likelion/nana'
        target='_blank'
        rel='noreferrer'
      >
        <Github width='35' height='35' alt='깃허브로고' fill='none' />
      </a>
    </FooterSelf>
  );
}

export default Footer;
