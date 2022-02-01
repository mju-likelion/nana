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
        <ColleagueContent>
          - 일단 해보자구요, 도전정신 가득한 사람👊🏻
        </ColleagueContent>
        <ColleagueContent>
          - 질문해도 물지 않아요🦁 질문하는 사람 대환영 !
        </ColleagueContent>
        <ColleagueContent>- 마음껏 나대볼 사람 🙋🏻‍♀🙋🏻‍♂</ColleagueContent>
        <ColleagueContent>
          - 의지활활, 열정뿜뿜 사람을 찾아요🔥
        </ColleagueContent>
        <ColleagueContent>
          - 명지대 멋사에 애정을 갖고 투자해주세요💙
        </ColleagueContent>
      </ColleagueBox>
      <RecruitBox>
        <RecruitTitle>모집정보</RecruitTitle>
        <RecruitContent>● 모집기간</RecruitContent>
        <RecruitContent>
          - 3월 2일(수) ~ 3월 11일(금) PM 11:59까지
        </RecruitContent>
        <RecruitContent>● 모집인원 (약 25명~30명)</RecruitContent>
        <RecruitContent>
          ● 기획, 디자인, 웹 파트로 나눠 지원받아요!
        </RecruitContent>
      </RecruitBox>
    </Wrapper>
  );
};

export default Join;
