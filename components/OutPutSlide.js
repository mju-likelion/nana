import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Modal from './Modal';

const SlideContainer = styled.div`
  display: flex;
  /* SlideWrap 요소 hidden */
  overflow: hidden;
`;

const SlideWrap = styled.div`
  /* 보이길 원하는 컨테이너 크기 설정 */
  display: flex;
  width: 750px;

  @media screen and (max-width: 1024px) {
    width: 350px;
  }
`;

// SlideContent에 ref를 줘서 해커톤이미지 동작
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 이미지가 들어갈 틀(사진 찌그러짐 방지) */
  div {
    display: flex;
    justify-content: center;
    width: 750px;
  }

  @media screen and (max-width: 1024px) {
    div {
      width: 350px;
    }
  }
`;

// 해커톤 서비스 설명
const OutPutTitle = styled.div`
  color: #7a7a7a;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  width: 750px;
  height: 60px;
  padding-top: 20px;

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
  over-fit: contain;
  width: 700px;
  border-radius: 6px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03, 1.03);
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
    margin: 0;
  }
`;

const TitleAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 840px;
  height: 50px;

  @media screen and (max-width: 1024px) {
    width: 360px;
    height: 30px;
  }
`;

// 슬라이드 버튼
const SlideBtn = styled.img`
  z-index: 2;
  width: 50px;
  height: 50px;
  transform: ${(props) => props.prevBtn && 'rotate(180deg)'};
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    z-index: 2;
    width: 30px;
    height: 30px;
  }
`;

const DotsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    margin: 0;
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
  const [slideTitle, setSliteTitle] = useState('');
  const [isModal, setIsModal] = useState(false);

  const prevEvent = () => {
    if (currentSlide === 0) setCurrentSlide(totalSlides);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextEvent = () => {
    if (currentSlide >= totalSlides) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  const openModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.4s ease-out';
    setSliteTitle(Hackathon[currentSlide].title);

    if (window.innerWidth >= 1024) {
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    } else {
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <>
      <TitleAndBtn>
        <SlideBtn src='../img/arrow.svg' prevBtn onClick={prevEvent} />
        <OutPutTitle>{slideTitle}</OutPutTitle>
        <SlideBtn src='../img/arrow.svg' onClick={nextEvent} />
      </TitleAndBtn>
      {/* 슬라이드 Dots 부분 */}
      <DotsWrap>
        {Hackathon.map((item) => (
          /* 현재 슬라이드와 id 값이 같을때 true반환 */
          <Dots active={currentSlide === item.id} key={item.id} />
        ))}
      </DotsWrap>
      <SlideContainer>
        <SlideWrap ref={slideRef}>
          {Hackathon.map((item) => (
            <SlideContent key={item.id}>
              <div>
                <OutPutImages
                  src={item.serviceImg}
                  alt={item.title}
                  onClick={openModal}
                />
              </div>
            </SlideContent>
          ))}
        </SlideWrap>
      </SlideContainer>
      {isModal && <Modal openModal={openModal} currentSlide={currentSlide} />}
    </>
  );
};

export default OutPutSlide;
