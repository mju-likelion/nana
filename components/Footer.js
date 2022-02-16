import styled from 'styled-components';

import Github from '../public/img/GitFooter.svg';
import Insta from '../public/img/InstaFooter.svg';

const FooterSelf = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  margin-top: auto;
  flex-direction: row;
  justify-content: center;
  z-index: 100;
`;

const MjuLogo = styled.div`
  font-size: 15px;
  color: white;
  margin-top: 15px;
`;

const GitContainer = styled.div`
  margin: 5px 0 0 30px;
`;

const InstaContainer = styled.div`
  margin: 5px 0 0 10px;
`;

function Footer() {
  return (
    <FooterSelf>
      <MjuLogo>LIKE LION | MJU Nature © 2022</MjuLogo>
      <GitContainer>
        <a
          href='https://github.com/mju-likelion/nana'
          target='_blank'
          rel='noreferrer'
        >
          <Github width='35' height='35' alt='깃허브로고' fill='none' />
        </a>
      </GitContainer>
      <InstaContainer>
        <a
          href='https://www.instagram.com/mju_likelion/'
          target='_blank'
          rel='noreferrer'
        >
          <Insta width='35' height='35' alt='인스타그램' fill='none' />
        </a>
      </InstaContainer>
    </FooterSelf>
  );
}

export default Footer;
