import styled from 'styled-components';

const FallingStarContainer = styled.div`
  position: absolute;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  /* background-color: black; */
`;

const TopBox = styled.div`
  position: relative;
  min-width: inherit;
  min-height: 100%;
`;

const InnerBox = styled.div`
  position: relative;
  min-width: inherit;
  margin: 0 auto;
  min-height: 100%;
`;

const AnimationBox = styled.div`
  min-width: 100vh;
  min-height: 100vh;

  /* margin 조절시 비율 고려해야함 */
  @keyframes star {
    from {
      opacity: 0;
      margin-left: 0;
      margin-top: 0;
    }
    35% {
      opacity: 1;
      margin-left: 25%;
      margin-top: 25%;
    }

    70% {
      opacity: 0;
      margin-left: 50%;
      margin-top: 50%;
    }

    to {
      opacity: 0;
      margin-left: 100%;
      margin-top: 100%;
    }
  }

  img {
    width: 200px;
    height: 40px;
    position: absolute;
    animation: star 10s linear infinite;
    opacity: 0;
    margin: 0 auto auto 0;
    transform: rotate(35deg);
    top: ${(props) => props.top || '0'};
    left: ${(props) => props.left || '0'};
  }

  /* animation-duration은 비율 맞춰 조절필요 */
  img:nth-child(1) {
    top: 10%;
    left: 0;
    animation-delay: 0;
    animation-duration: 4s;
  }
  img:nth-child(2) {
    top: 60%;
    left: 0;
    animation-delay: -1.5s;
    animation-duration: 3.8s;
  }
  img:nth-child(3) {
    top: 50%;
    left: 24%;
    animation-delay: -0.7s;
    animation-duration: 3.4s;
  }
  img:nth-child(4) {
    top: 0;
    left: 36%;
    animation-delay: -1s;
    animation-duration: 3.8s;
  }
  img:nth-child(5) {
    top: 58%;
    left: 58%;
    animation-delay: 0.2s;
    animation-duration: 5.8s;
  }
  img:nth-child(6) {
    top: 292px;
    left: 60%;
    animation-delay: -2s;
    animation-duration: 5.6s;
  }
  img:nth-child(7) {
    top: 143px;
    left: 72%;
    animation-delay: -0.5s;
    animation-duration: 5s;
  }
`;

const FallingStarEffect = () => {
  const effectPositions = [1, 2, 3, 4, 5, 6, 7];
  return (
    <FallingStarContainer>
      <TopBox>
        <InnerBox>
          <AnimationBox>
            {effectPositions.map((position) => (
              <img src='../img/fallingStar.png' alt='유성' key={position} />
            ))}
          </AnimationBox>
        </InnerBox>
      </TopBox>
    </FallingStarContainer>
  );
};

export default FallingStarEffect;
