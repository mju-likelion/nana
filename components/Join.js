import styled from 'styled-components';

// 두 컴포넌트를 감싸는 Wrapper
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 동료상 컴포넌트 ColleagueBox
const ColleagueBox = styled.div`
  width: 974px;
  height: 469px;
  background: url(${'../img/colleague.svg'});
  margin-top: 81px;
`;

// 동료상 타이틀 컴포넌트 ColleagueTitle
const ColleagueTitle = styled.p`
  font-size: 40px;
  font-weight: 800;
  color: white;
  margin-top: 53px;
  margin-left: 46px;
  position: relative;
`;

// 동료상 내용 컴포넌트 ColleagueContent
const ColleagueContent = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-top: 80px;
  margin-left: 277px;
  position: relative;
`;

// 모집정보 컴포넌트 RecruitBox
const RecruitBox = styled.div`
  width: 974px;
  height: 469px;
  background: url(${'../img/recruit.svg'});
  margin-top: 103px;
`;

// 모집정보 타이틀 컴포넌트 RecruitTitle
const RecruitTitle = styled.p`
  font-size: 40px;
  font-weight: 800;
  color: white;
  margin-top: 53px;
  margin-left: 46px;
  position: relative;
`;

// 모집정보 내용 컴포넌트 RecruitContent
const RecruitContent = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-top: 80px;
  margin-left: 277px;
  position: relative;
`;

const Join = () => {
  return (
    <Wrapper>
      <ColleagueBox>
        <ColleagueTitle>동료상</ColleagueTitle>
        <ColleagueContent>동료상내용</ColleagueContent>
      </ColleagueBox>
      <RecruitBox>
        <RecruitTitle>모집정보</RecruitTitle>
        <RecruitContent>모집정보 내용</RecruitContent>
      </RecruitBox>
    </Wrapper>
  );
};

export default Join;
