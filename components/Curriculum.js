import styled from 'styled-components';

const CurriWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 0;

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
    }
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
const TechStackTitle = styled.div`
  width: 413px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 53px auto;
  text-align: center;
  color: #737070;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
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
  img:nth-child(1) {
    margin-right: 33px;
  }
  img:nth-child(2) {
    margin: 0 33px;
    width: ;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
    img:nth-child(1) {
      margin-right: 27px;
      width: 180px;
      height: 91px;
    }
    img:nth-child(2) {
      margin: 0 33px;
      width: 87px;
      height: 87px;
    }
  }
`;
const PLImgSecondBox = styled.div`
  display: flex;
  img:nth-child(1) {
    margin: 0 27px;
  }
  img:nth-child(2) {
    margin: 0 33px;
  }
  img:nth-child(3) {
    margin-left: 30px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 15px;
    width: 75px;
    height: auto;
    align-items: center;
    img:nth-child(1) {
      margin: 0 21px 0 0;
      width: 90px;
    }
    img:nth-child(2) {
      margin: 0 30px;
      width: 550px;
    }
    img:nth-child(3) {
      margin-left: 21px;
      width: 550px;
    }
  }
`;

const PLImgThirdBox = styled.div`
  display: flex;
  img:nth-child(1) {
    margin: 0 27px;
  }
  img:nth-child(2) {
    margin: 0 33px;
  }
  img:nth-child(3) {
    margin-left: 30px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 15px;
    width: 75px;
    height: auto;
    align-items: center;
    img:nth-child(1) {
      margin: 0 21px 0 30px;
      width: 90px;
    }
    img:nth-child(2) {
      margin: 0 0 0 50px;
      width: 550px;
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
      <TechStackTitle>
        <p>Programming Language</p>
      </TechStackTitle>
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

      <CurriContainer>
        <CurriImgBox>
          <img src='../img/fakeCurriculum.png' alt='커리큘럼사진예시' />
        </CurriImgBox>
        <CurriTextBox>*커리큘럼은 상황에 따라 변경될 수 있습니다.</CurriTextBox>
      </CurriContainer>
      <TechStackTitle>
        <p>Team Collaboration Tool</p>
      </TechStackTitle>
      <PLImgContainer>
        {/* 피그마 아이콘 잘리는 현상 */}
        <PLImgFirstBox>
          <img src='../img/slack.png' alt='HtmlAndCss' />
          <img src='../img/notion.png' alt='react' />
        </PLImgFirstBox>
        <PLImgThirdBox>
          <img src='../img/figma.png' alt='node.js' />
          <img src='../img/github.png' alt='javascript' />
        </PLImgThirdBox>
      </PLImgContainer>
    </CurriWapper>
  );
};

export default Curriculum;
