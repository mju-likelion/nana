// 예시, 테스트용 컴포넌트
import styled from "styled-components";

// styled components 예시(이것도 컴포넌트입니다)
const TestBox = styled.div`
  border: 1px solid black;
  font-size: 25px;
`;

const TestButton = styled.button`
  border: 1px solid red;
  :hover {
    background: black;
    color: white;
  }
`;

const PropsStyle = styled.div`
  height: 50px;
  /* props를 이용한 조건부 연산 */
  background: ${(props) => (props.isBlue ? "blue" : "red")};

  /* TestButton 컴포넌트가 hover하면 이 컴포넌트에 발생시킬 동작 */
  ${TestButton}:hover ~ & {
    background: green;
  }
`;
// styled components 예시 끝

// 컴포넌트의 이름(파일명포함)은 반드시 첫 글자가 대문자여야 합니다
const Test = () => {
  console.log('test');
  return (
    // return문 안에는 HTML과 매우 유사한 코드를 작성할 수 있습니다
    <TestBox>
      <h1>안녕하세요!</h1>
      <p>저는 테스트 컴포넌트에요</p>
      <p>hi! im test component!</p>
      <p>HI! IM TEST COMPONENT!</p>
      {/* 컴포넌트 안에 또 다른 컴포넌트를 가져올 수 있습니다 */}
      <TestButton>테스트버튼</TestButton>
      <PropsStyle isBlue={true}>isBlue라는 props가 true면 파란색</PropsStyle>
      <PropsStyle isBlue={false}>
        isBlue라는 props가props가 false면 빨간색
      </PropsStyle>
    </TestBox>
  );
};

export default Test;
