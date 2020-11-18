import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#5e5e5e, #858383);
`;

const Title = styled.h1`
  font-size: 5rem;
  padding-bottom: 5rem;

  color: rgba(0, 0, 0, 0.9);

  text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.2);
`;

const FrontFace = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 9rem;
  text-transform: uppercase;
  border-radius: 3rem;
  border: 2px solid black;
  height: 40vh;
  width: 60vw;
  background-color: #fff;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const BackFace = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 3rem;
  border: 2px solid black;
  height: 40vh;
  width: 60vw;
  background-color: #fff;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const BackFaceText = styled.span`
  font-size: 2rem;
  letter-spacing: 1px;
  width: 65%;
  height: 60%;
`;

const BackFaceTextSig = styled.div`
  font-size: 2rem;
  width: 50%;
  height: 20%;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 4px;
  color: #333;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: 600;
  height: 10%;
  width: 15%;
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
    color: black;
  }
`;

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Background>
      <Title>Dear Grandpa and Grandma</Title>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontFace>
          Thank You
          <Button onClick={handleClick}>Click to flip</Button>
        </FrontFace>

        <BackFace>
          <BackFaceText>
            I couldn't wish for better Grandparents. Reaching out to me made my
            birthday grand and joyous. I hope you have a great, healthy, and
            relaxing holiday season. I am looking forward to seeing you once the
            'Rona' is over.
          </BackFaceText>
          <BackFaceTextSig>Much love, Will.</BackFaceTextSig>
          <Button onClick={handleClick}>Click to flip</Button>
        </BackFace>
      </ReactCardFlip>
    </Background>
  );
}

export default App;
