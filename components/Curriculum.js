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
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
const CurriImgBox = styled.div`
@media screen and (max-width: 1024px) {
      justify-content: center;
      img {
        /* width: 10px; */
        /* height: auto; */
      }
    }
    img {
      /* margin-left: 36px;
      margin-bottom: 50px;
      margin-right: 37px;
      width: 840px;
      height: 316px; */
    }
    background: blue;
  }`;

const CurriTextBox = styled.p`
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  width: 100%;
  margin-top: 8px;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 16px;
  text-align: right;
  color: #737070;
`;
const PLText = styled.div`
  width: 413px;
  height: 21px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 53px auto;
  text-align: center;
  color: #737070;
`;

const PLImgContainer = styled.div`
  @media screen and (max-width: 1024px) {
    display: block;
  }
  display: flex;
`;
const PLImgFirstBox = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
    img:nth-child(1) {
      margin-right: 33px;
      width: 150px;
      height: 91px;
    }
    img:nth-child(2) {
      margin: 0 33px;
      width: 87px;
      height: 87px;
    }
  }
  img {
    /* margin: 0 33px; */
  }
  img:nth-child(1) {
    margin-right: 33px;
  }
  img:nth-child(2) {
    margin: 0 33px;
    width: ;
  }
`;
const PLImgSecondBox = styled.div`
  display: flex;
  img:nth-child(1) {
    margin: 0 33px;
  }
  img:nth-child(2) {
    margin: 0 33px;
  }
  img:nth-child(3) {
    margin-left: 33px;
  }

  @media screen and (max-width: 1024px) {
    /* justify-content: space-between; */
    img:nth-child(1) {
      margin: 0 33px 0 0;
    }
  }
`;

const Curriculum = () => {
  return (
    <CurriWapper>
      <CurriContainer>
        <CurriImgBox>
          <img src='../img/fakeCurriculum.png' alt='커리큘럼사진예시' />
        </CurriImgBox>
        <CurriTextBox>*커리큘럼은 상황에 따라 변경될 수 있습니다.</CurriTextBox>
      </CurriContainer>
      <PLText>
        <p>Programming Language</p>
      </PLText>
      <PLImgContainer>
        <PLImgFirstBox>
          <img src='../img/htmlcss.png' alt='HtmlAndCss' />
          <img src='../img/react.png' alt='react' />
        </PLImgFirstBox>
        <PLImgSecondBox>
          <img src='../img/node.png' alt='node.js' />
          <img src='../img/javascript.png' alt='javascript' />
          <img src='../img/django.png' alt='django' />
        </PLImgSecondBox>
      </PLImgContainer>
    </CurriWapper>
  );
};

export default Curriculum;
