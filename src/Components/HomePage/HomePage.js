import React, { useState } from "react";
import styled from "styled-components";
import Games from "./Games";
import Header from "./Header";
import MustContainer from "./MustContainer";
import Navbar from "./Navbar";
import { GamesHeader } from "../Data";
export default function HomePage() {
  const [index, setIndex] = useState(0);
  const {
    title,
    subTitle,
    gameImage,
    backgroundImage,
    img,
    popupMessage,
  } = GamesHeader[index];

  return (
    <Home style={{ backgroundImage: "url(" + backgroundImage + ")" }}>
      <Navbar />
      <HomeContainer>
        <Games setIndex={setIndex} index={index} />
        <Header
          title={title}
          subTitle={subTitle}
          gameImage={gameImage}
          img={img}
          popupMessage={popupMessage}
        />
        <MustContainer />
      </HomeContainer>
    </Home>
  );
}

const Home = styled.div`
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 170vh;
`;

const HomeContainer = styled.div`
  animation-name: animation-from-bottom;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: (300ms);
  transform: translateY(5%);
  opacity: 0;

  @keyframes animation-from-bottom {
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
