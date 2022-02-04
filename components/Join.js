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
  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 250px;
    margin-top: 117px;
  }
  width: 974px;
  height: 469px;
  object-fit: cover;
  background: url(${'../img/colleague.svg'});
  background-position: center center;
  margin-top: 232px;
`;

// 동료상 타이틀 컴포넌트 ColleagueTitle
const ColleagueTitle = styled.p`
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin: 20px auto auto 20px;
  }
  font-size: 40px;
  font-weight: 800;
  color: white;
  margin: 55px auto auto 46px;
`;

// 동료상 내용 컴포넌트 ColleagueContent
const ColleagueContent = styled.div`
  @media screen and (max-width: 1024px) {
    font-size: 10px;
    margin: 10px auto;
    line-height: 35px;
  }
  width: 80%;
  font-size: 20px;
  font-weight: 800;
  color: white;
  align-items: center;
  margin: -20px auto auto 277px;
  line-height: 70px;
`;

// 모집정보 컴포넌트 RecruitBox
const RecruitBox = styled.div`
  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 250px;
    margin-top: 33px;
  }
  width: 974px;
  height: 469px;
  background: url(${'../img/recruit.svg'});
  background-position: center center;
  margin-top: 103px;
`;

// 모집정보 타이틀 컴포넌트 RecruitTitle
const RecruitTitle = styled.p`
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin: 20px auto auto 20px;
  }
  font-size: 40px;
  font-weight: 800;
  color: white;
  margin: 55px auto auto 46px;
`;

// 모집정보 내용 컴포넌트 RecruitContent
const RecruitContent = styled.div`
  @media screen and (max-width: 1024px) {
    font-size: 10px;
    margin: 15px auto;
  }
  width: 80%;
  font-size: 20px;
  font-weight: 800;
  color: white;
  align-items: center;
  margin: 10px auto auto 277px;
`;

const RecruitText = styled.div`
  @media screen and (max-width: 1024px) {
    margin: 17px auto 25px auto;
  }
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 65px;
  line-height: 15px;
`;

const RecruitDot = styled.p` 
  justify-content: center;
  margin-right: 8px;
  margin-bottom: 5px;
`;

const RecruitDate = styled.p`
  margin: -10px auto auto 20px;
`;

const Join = () => {
  return (
    <Wrapper>
      <ColleagueBox>
        <ColleagueTitle>동료상</ColleagueTitle>
        <ColleagueContent>
          <p>- 일단 해보자구요, 도전정신 가득한 사람👊🏻</p>
          <p>- 질문해도 물지 않아요🦁 질문하는 사람 대환영 !</p>
          <p>- 마음껏 나대볼 사람 🙋🏻‍♀🙋🏻‍♂</p>
          <p>- 의지활활, 열정뿜뿜 사람을 찾아요🔥</p>
          <p>- 명지대 멋사에 애정을 갖고 투자해주세요💙</p>
        </ColleagueContent>
      </ColleagueBox>
      <RecruitBox>
        <RecruitTitle>모집정보</RecruitTitle>
        <RecruitContent>
          <RecruitText>
            <RecruitDot>•</RecruitDot>
            <p>모집기간</p>
          </RecruitText>
          <RecruitText>
            <RecruitDate>- 3월 2일(수) ~ 3월 11일(금) PM 11:59까지</RecruitDate>
          </RecruitText>
          <RecruitText>
            <RecruitDot>•</RecruitDot>
            <p>모집인원(약25명-30명)</p>
          </RecruitText>
          <RecruitText>
            <RecruitDot>•</RecruitDot>
            <p>기획, 디자인, 웹 파트로 나눠 지원받아요!</p>
          </RecruitText>
        </RecruitContent>
      </RecruitBox>
    </Wrapper>
  );
};

export default Join;
