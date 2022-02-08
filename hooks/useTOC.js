// 커스텀 hooks
import { useRef, useEffect } from 'react';

const useScrollAnimation = (setActiveId, content) => {
  // heading element를 담아 사용하기 위한 ref
  const headingElementsRef = useRef({});

  useEffect(() => {
    // init
    headingElementsRef.current = {};

    // observer api의 callback 구현
    const callback = (headings) => {
      // 모든 제목을 reduce로 순회해 headingElementsRef.current에 key, value 형태로 전달
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        // eslint-disable-next-line no-param-reassign
        map[headingElementsRef.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      // 화면 상단에 보이고 있는 제목 찾기 위함
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];

        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      // observer가 관찰하는 영역에 여러개의 제목이 있다면 상단의 제목만 알아내기
      const getIndexFromId = (id) => {
        headingElementsRef.findIndex((heading) => heading.id === id);
      };

      if (visibleHeadings.length === 1) {
        // 보이고 있는 제목이 1개일 때 해당 element의 target id를 setActiveId로 set
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id),
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    // intersection observer에 callback, option을 생성자로 넘겨 새로 생성
    const observer = new IntersectionObserver(callback, {
      // rootMargin 옵션 선택적으로 주기
      rootMargin: '0 0 0 0',
    });

    // 제목 태그 찾고 observer로 관찰
    const headingElements = Array.from(document.querySelectorAll('h1 h2 h3'));
    headingElements.forEach((ele) => observer.observe(ele));

    // 뒷정리 함수로 observer 멈추기
    return () => observer.disconnect();
  }, [content]);
};

export default useScrollAnimation;
