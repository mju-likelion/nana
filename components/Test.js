// 예시, 테스트용 컴포넌트
import styled from "styled-components";

// styled component 예시
const TestBox = styled.div`
  border: 1px solid black;
  font-size: 50px;
`;

const Test = () => {
  return (
    <TestBox>
      <h1>안녕하세요!</h1>
      <p>저는 테스트 컴포넌트에요</p>
    </TestBox>
  );
};

export default Test;
