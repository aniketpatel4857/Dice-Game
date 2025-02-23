import styled from "styled-components"
import { Button } from "./styled/Button"

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image-container">
        <img src="/images/dices.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* padding: 20px; */
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    flex-direction: row;
    background-color: #e6e6fa;
  }

  .image-container {
    margin-bottom: 20px;

    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 40px;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .content {
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }

    h1 {
      font-size: 48px;
      white-space: nowrap;
      margin-bottom: 20px;

      @media (min-width: 768px) {
        font-size: 72px;
      }

      @media (min-width: 1024px) {
        font-size: 96px;
      }
    }
  }
`

