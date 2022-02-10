// 커스텀 hooks
import { useRef, useCallback, useEffect } from 'react';

/*
  scroll이 발생할 때마다 이벤트를 실행하게 되면 px단위로 리렌더링이 발생 => 성능저하
  intersection observer 사용함
*/

// 스크롤 fadein 동작
// 기본 인자를 up, 1, 0으로 받음
const useScrollAnimation = (direction = 'up', duration = 1, delay = 0) => {
  // fadein 방향 지정
  const element = useRef();
  // eslint-disable-next-line consistent-return
  const handleDirection = (name) => {
    // scroll 전 숨길 위치 지정
    switch (name) {
      case 'up':
        return 'translate3d(0, 25%, 0)';
      case 'down':
        return 'translate3d(0, -25%, 0)';
      case 'left':
        return 'translate3d(-15%, 0, 0)';
      case 'right':
        return 'translate3d(15%, 0, 0)';
      default:
    }
  };

  // fadein 동작 css 설정
  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [delay, duration],
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    let observer; // 관찰자
    if (element.current) {
      // 옵저버 객체 생성(타겟을 관측함)
      // threshold를 통해 요소가 70% 보일 때 handleScroll 호출
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }
    // 타겟 변화 관찰 종료 '실행'
    return () => observer && observer.disconnect();
  }, [handleScroll]);

  // 객체 return
  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollAnimation;
