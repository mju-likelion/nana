import styled from 'styled-components';

const ApplyBtn = styled.button`
  /* props에 수치가 들어왔으면 해당 수치대로 실행하고, 없다면 기본 수치를 적용합니다 */
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '50px'};

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: #fff;
  color: #000;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 5px;
  cursor: pointer;

  img {
    margin-left: 5px;
    width: 40px;
    height: 15px;
  }

  @media screen and (max-width: 1024px) {
    width: 110px;
    height: 40px;
    font-size: 12px;
    img {
      margin-left: 5px;
      width: 10px;
    }
  }
`;

// props로 text, width, height을 받아옵니다
const ApplyButton = ({ text, width, height }) => {
  return (
    // 받아온 props를 스타일링을 위한 수치로 활용합니다
    <ApplyBtn width={width} height={height}>
      {text}
      <img src='../img/ic-more.svg' alt='화살표' />
    </ApplyBtn>
  );
};

export default ApplyButton;
