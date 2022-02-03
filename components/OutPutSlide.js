import {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  height: 70%;
  background-color: white;
  overflow-x: hidden;
`;

const SlideWrap = styled.div`
  /* 보이길 원하는 컨테이너 크기 설정 후, SlideContent를 hidden */
  display: flex;
  width: 700px;
  /* width: 100%; */
  height: 100%;
  background-color: black;
`;

// 해커톤 설명과 사진이 들어갈 컨테이너
// SlideContent에 ref를 줘서 설명과 사진이 동시에 동작하도록
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;

  /* 이미지가 들어갈 틀 */
  .ImgContainer {
    background-color: olive;
    width: 600px;
    height: 300px;
    margin: 10px 50px 0 50px;
  }
`;

// 해커톤 서비스 설명
const OutPutContent = styled.div`
  background-color: pink;
  color: #7a7a7a;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 600px;
  height: 60px;
  padding-top: 15px;
  margin: 0 50px 0 50px;
`;

// 해커톤 서비스 이미지
const OutPutImages = styled.img`
  box-sizing: border-box;
  /* 원본 비율 유지, ImgContainer에 맞춰 이미지 조정하기 */
  object-fit: contain;
  width: 100%;
`;

// 슬라이드 버튼
const SlideBtn = styled.img`
  z-index: 2;
  width: 50px;
  height: 50px;
  transform: ${(props)=>props.prevBtn && "rotate(180deg)"};
  cursor: pointer;
`;

const DotsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 20px;
`;

const Dots = styled.span`
  width: 13px;
  height: 13px;
  border: 1px solid #7a7a7a;
  margin: 0 2.5px;
  border-radius: 100%;
  background-color: ${props => props.active ? "#FFD25D" : "transparent"}
`;

// 총 슬라이드 개수(0부터 시작이므로 6개면 5로 설정)
const totalSlides = 5;

const OutPutSlide = ({Hackathon}) => {
  const slideRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevEvent = () => {
    if (currentSlide === 0) setCurrentSlide(totalSlides);
    else setCurrentSlide(currentSlide - 1);
  }

  const nextEvent = () => {
    if (currentSlide >= totalSlides) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  }

  useEffect(()=>{
    slideRef.current.style.transition = "all 0.4s ease-out";
    slideRef.current.style.transform = `translateX(-${currentSlide * 700}px)`;
  }, [currentSlide]);

  return (
    <>
      <SlideContainer>
        <SlideBtn src="../img/arrow.svg" prevBtn onClick={prevEvent} />
        <SlideWrap ref={slideRef}>
          {
            Hackathon.map((item, index)=>
              <SlideContent key={item.index}>
                <OutPutContent>{item.title}</OutPutContent>
                <div className="ImgContainer">
                  <OutPutImages src={item.serviceImg} />
                </div>
              </SlideContent>
            )
          }
        </SlideWrap>
        <SlideBtn src="../img/arrow.svg" onClick={nextEvent} />
      </SlideContainer>
      {/* 슬라이드 Dots 부분 */}
        <DotsWrap>
          { 
            Hackathon.map((_, index) => 
              /* 현재 슬라이드와 index 값이 같을때 true반환 */
              <Dots active={currentSlide === index} /> 
          )}
        </DotsWrap>
    </>
  );
};

export default OutPutSlide;
