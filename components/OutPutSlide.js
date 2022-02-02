import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  width: 85%;
  height: 80%;
  background-color: white;
`;

const SlideWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

// 슬라이드 버튼
const SlideBtn = styled.img`
  width: 50px;
  height: 50px;
  transform: ${(props)=>props.prevBtn && "rotate(180deg)"};
  cursor: pointer;
`;

// 해커톤 설명과 사진이 들어갈 컨테이너
const SlideContent = styled.div`
  background-color: black;
  width: 555px;
  height: 95%;
`;

// 해커톤 서비스 설명
const OutPutContent = styled.div``;

// 해커톤 서비스 이미지
const OutPutImages = styled.div``;

const OutPutSlide = () => {
  return (
    <SlideContainer>
      <SlideWrap>
        <SlideBtn src="../img/arrow.svg" prevBtn />
        <SlideContent />
        <SlideBtn src="../img/arrow.svg" />
      </SlideWrap>
    </SlideContainer>
  );
};

export default OutPutSlide;
