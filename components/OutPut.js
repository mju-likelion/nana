import styled from 'styled-components';

import OutPutSlide from './OutPutSlide';

const OutPutWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 85px;
  width: 50%;
  height: 70%;
  background-color: orange;

  h2 {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding: 30px 0 20px 0;
    background-color: tomato;
  }
`;

const OutPut = () => {
  return (
    <OutPutWrap>
      <ContentWrap>
        <h2>우리는 이런 것을 만들었어요</h2>
        <OutPutSlide />
      </ContentWrap>
    </OutPutWrap>
  );
};

export default OutPut;
