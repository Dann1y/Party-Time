import React from "react";
import styled from "styled-components";
import Timer from "../components/Timer";

export default function index() {
  const futureDate: Date = new Date(2021, 8, 9, 22, 10);

  const initialDate: Date = new Date(
    futureDate.getTime() - new Date().getTime()
  );

  return (
    <Container>
      <Title>Let's get party tonight! 🤪🎉</Title>
      <Content>
        You've been selected!
        <br />
        420
      </Content>
      <Timer initialDate={initialDate} />
      <BackgroundItem imageUrl="/party-image.jpg" />
    </Container>
  );
}

interface ItemProps {
  imageUrl: String;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 7rem;
  color: #ffffff;
  animation: neon 0.08s ease-in-out infinite alternate;

  @keyframes neon {
    from {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
        0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
        0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),
        0 0 54px rgba(30, 132, 242, 0.92);
    }
    to {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
        0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
        0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88),
        0 0 60px rgba(30, 132, 242, 1);
    }
  }

  @media (min-width: 0px) and (max-width: 280px) {
    font-size: 1.3rem;
    margin-bottom: 1vh;
  }

  @media (min-width: 281px) and (max-width: 450px) {
    font-size: 1.6rem;
    margin-bottom: 1vh;
  }

  @media (min-width: 450px) and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1vh;
  }

  @media (min-width: 769px) and (max-width: 1335px) {
    font-size: 5rem;
  }
`;

const Content = styled.div`
  font-size: 2rem;
  color: lightyellow;
  font-family: Londrina Outline;
  text-shadow: 0 0 10px gold, 0 0 20px firebrick, 0 0 40px pink, 0 0 80px red;
  margin-bottom: 2vh;
  text-align: center;

  @media (min-width: 280px) and (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 1vh;
  }

  @media (min-width: 450px) and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1vh;
  }
`;

const BackgroundItem = styled.div<ItemProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${(p) => p.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;
