import React, { useState } from "react";
import styled from "styled-components";
import Games from "./Games";
import Header from "./Header";
import MustSee from "./MustSee";
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
      <Games setIndex={setIndex} index={index} />
      <Header
        title={title}
        subTitle={subTitle}
        gameImage={gameImage}
        img={img}
        popupMessage={popupMessage}
      />
      <MustSee />
    </Home>
  );
}

const Home = styled.div`
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 110vh;
`;
