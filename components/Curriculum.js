import styled from 'styled-components';

const CurriWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const CurriContainer = styled.div`
  position: relative;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;

  img {
    position: absolute;
    width: 854px;
    height: 319px;
  }
  p {
    position: absolute;
    width: 420px;
    height: 22px;
    margin-top: 380px;
    margin-left: 520px;

    font-family: NanumGothic;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 16px;
    text-align: center;

    color: #737070;
  }

  @media screen and (max-width: 1024px) {
    img {
      position: static;
      width: 80%;
      height: auto;
    }
  }
`;
const PLText = styled.div`
  width: 413px;
  height: 21px;
  margin-top: 240px;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #737070;
`;
const PLImgBox = styled.div`
  position: relative;
  margin-top: 41px;
  display: inline-flex;

  img {  
    margin-left:36px;
     margin-bottom: 50px;
    margin-right: 37px;
  }
  

  // @media screen and (max-width: 1024px) {
  //   img {
  //     position: static;
  //     width: 80%;
  //     height: auto;
  //   }
  }
`;

const Curriculum = () => {
  return (
    <CurriWapper>
      <CurriContainer>
        <img src='../img/fakeCurriculum.png' alt='커리큘럼사진예시' />
        <p>*커리큘럼은 상황에 따라 변경될 수 있습니다.</p>
      </CurriContainer>
      <PLText>
        <p>Programming Language</p>
      </PLText>
      <PLImgBox>
        <img src='../img/htmlcss.png' alt='HtmlAndCss' />
        <img src='../img/react.png' alt='react' />
        <img src='../img/node.png' alt='node.js' />
        <img src='../img/javascript.png' alt='javascript' />
        <img src='../img/django.png' alt='django' />
      </PLImgBox>
    </CurriWapper>
  );
};

export default Curriculum;
