import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  height: 100%;
  /* background-color: white; */
  /* SlideWrap 요소 hidden */
  overflow-x: hidden;

  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

const SlideWrap = styled.div`
  /* 보이길 원하는 컨테이너 크기 설정 */
  display: flex;
  width: 600px;
  height: 400px;
  /* background-color: black; */

  @media screen and (max-width: 1024px) {
    width: 500px;
  }
`;

// 해커톤 설명과 사진이 들어갈 컨테이너
// SlideContent에 ref를 줘서 설명과 사진이 동시에 동작하도록
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;

  /* 이미지가 들어갈 틀 */
  .ImgContainer {
    /* background-color: olive; */
    width: 590px;
    height: 300px;
    margin: 10px 50px 0 0;

    @media screen and (max-width: 1024px) {
      width: 500px;
    }
  }
`;

// 해커톤 서비스 설명
const OutPutContent = styled.div`
  /* background-color: white; */
  color: #7a7a7a;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 600px;
  height: 60px;
  padding-top: 20px;
  margin: 0 50px 0 0;

  @media screen and (max-width: 1024px) {
    width: 500px;
    padding-top: 15px;
  }
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
  transform: ${(props) => props.prevBtn && 'rotate(180deg)'};
  background-color: white;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;

const DotsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Dots = styled.span`
  width: 13px;
  height: 13px;
  border: 1px solid #7a7a7a;
  margin: 0 2.5px;
  border-radius: 100%;
  background-color: ${(props) => (props.active ? '#FFD25D' : 'transparent')};
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

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.4s ease-out';
    // slideRef.current.style.transform = `translateX(-${currentSlide * 650}px)`;
    if (window.innerWidth >= 1024) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 650}px)`;
    } else {
      slideRef.current.style.transform = `translateX(-${currentSlide * 550}px)`;
    }
  }, [currentSlide]);

  return (
    <>
      <SlideContainer>
        <SlideBtn src='../img/arrow.svg' prevBtn onClick={prevEvent} />
        <SlideWrap ref={slideRef}>
          {Hackathon.map((item, id) => (
            <SlideContent key={item.id}>
              <OutPutContent>{item.title}</OutPutContent>
              <div className='ImgContainer'>
                <OutPutImages src={item.serviceImg} />
              </div>
            </SlideContent>
          ))}
        </SlideWrap>
        <SlideBtn src='../img/arrow.svg' onClick={nextEvent} />
      </SlideContainer>
      {/* 슬라이드 Dots 부분 */}
      <DotsWrap>
        {Hackathon.map((_, id) => (
          /* 현재 슬라이드와 id 값이 같을때 true반환 */
          <Dots active={currentSlide === id} />
        ))}
      </DotsWrap>
    </>
  );
};

export default OutPutSlide;
