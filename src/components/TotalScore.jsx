import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffeded, #e3e3e3);
  border-radius: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 90px;
    line-height: 90px;
    color: #333;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: #444;
  }

  @media (max-width: 768px) {
    max-width: 160px;

    h1 {
      font-size: 70px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    max-width: 140px;

    h1 {
      font-size: 60px;
    }
    p {
      font-size: 16px;
    }
  }
`;
