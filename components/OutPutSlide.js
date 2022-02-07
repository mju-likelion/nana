import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  /* SlideWrap 요소 hidden */
  overflow: hidden;
`;

const SlideWrap = styled.div`
  /* 보이길 원하는 컨테이너 크기 설정 */
  display: flex;
  width: 600px;

  @media screen and (max-width: 1024px) {
    width: 300px;
  }
`;

// 해커톤 설명과 사진이 들어갈 컨테이너
// SlideContent에 ref를 줘서 설명과 사진이 동시에 동작하도록
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 이미지가 들어갈 틀 */
  .ImgContainer {
    width: 590px;
    margin-top: 50px;

    @media screen and (max-width: 1024px) {
      margin: 0;
      width: 360px;
      margin-top: 20px;
    }
  }
`;

// 해커톤 서비스 설명
const OutPutContent = styled.div`
  color: #7a7a7a;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 590px;
  height: 60px;
  padding-top: 20px;
  margin: 0 60px 0 0;

  @media screen and (max-width: 1024px) {
    font-size: 11.5px;
    width: 300px;
    height: 40px;
    padding-top: 10px;
  }
`;

// 해커톤 서비스 이미지
const OutPutImages = styled.img`
  box-sizing: border-box;
  width: 550px;
  margin: 20px 0 0 0;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1024px) {
    width: 300px;
  }
`;

// 슬라이드 버튼
const SlideBtn = styled.img`
  z-index: 2;
  width: 50px;
  height: 50px;
  transform: ${(props) => props.prevBtn && 'rotate(180deg)'};
  background-color: white;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    z-index: 2;
    width: 30px;
    height: 30px;
  }
`;

const DotsWrap = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  height: 50px;
  margin-top: 140px;

  @media screen and (max-width: 1024px) {
    margin: 0 0 310px 0;
  }
`;

const Dots = styled.span`
  width: 13px;
  height: 13px;
  margin: 0 2px;
  border-radius: 100%;
  border: ${(props) => (props.active ? 'none' : '1px solid #7a7a7a80 ')};
  background-color: ${(props) => (props.active ? '#FFD25D' : 'transparent')};

  @media screen and (max-width: 1024px) {
    width: 11px;
    height: 11px;
  }
`;

const OutPutSlide = ({ Hackathon }) => {
  // 총 슬라이드 개수(0부터 시작이므로 6개면 5로 설정)
  const totalSlides = 5;

  const slideRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevEvent = () => {
    if (currentSlide === 0) setCurrentSlide(totalSlides);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextEvent = () => {
    if (currentSlide >= totalSlides) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  // useEffect(() => {
  //   setPrevState(window.innerWidth);
  //   console.log(prevState);
  // });

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.4s ease-out';
    // console.log(currentSlide);

    if (window.innerWidth >= 1024) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 650}px)`;
      // if (prevState < 1024) {
      //   setCurrentSlide(0);
      //   setPrevState(window.innerWidth);
      // }
    } else {
      slideRef.current.style.transform = `translateX(-${currentSlide * 360}px)`;
    }
    // if (prevState >= 1024) {
    //   // setCurrentSlide(0);
    //   // setPrevState(window.innerWidth);
    // }
  }, [currentSlide]);

  return (
    <>
      <SlideContainer>
        <SlideBtn src='../img/arrow.svg' prevBtn onClick={prevEvent} />
        <SlideWrap ref={slideRef}>
          {Hackathon.map((item) => (
            <SlideContent key={item.id}>
              <OutPutContent>{item.title}</OutPutContent>
              <div className='ImgContainer'>
                <OutPutImages src={item.serviceImg} alt={item.title} />
              </div>
            </SlideContent>
          ))}
        </SlideWrap>
        <SlideBtn src='../img/arrow.svg' onClick={nextEvent} />
      </SlideContainer>
      {/* 슬라이드 Dots 부분 */}
      <DotsWrap>
        {Hackathon.map((item) => (
          /* 현재 슬라이드와 id 값이 같을때 true반환 */
          <Dots active={currentSlide === item.id} />
        ))}
      </DotsWrap>
    </>
  );
};

export default OutPutSlide;
