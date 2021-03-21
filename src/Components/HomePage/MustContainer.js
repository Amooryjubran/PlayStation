import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import styled from "styled-components";
import { MustSeeGames, MustPlayGames } from "../Data";

export default function MustContainer() {
  const Games = MustSeeGames.map((game) => <img src={game.img} alt="Icons" />);
  const VideoGames = MustPlayGames.map((game) => (
    <HoverVideoPlayer
      videoStyle={{
        width: 190,
        height: 300,
      }}
      videoSrc={game.vid}
      pausedOverlay={<img src={game.img} alt="Icons" />}
      loadingOverlay={<div />}
    />
  ));

  return (
    <Must>
      <h1>Must See</h1>
      <MustSeeContainer>{Games}</MustSeeContainer>
      <h1>Must Play Games</h1>
      <MustPlayContainer>{VideoGames}</MustPlayContainer>
    </Must>
  );
}

const Must = styled.div`
  max-width: 80%;
  margin: 0 auto;
  color: white;

  @media (max-width: 1600px) {
    max-width: 90%;
  }
  h1 {
    margin-left: -15px;
    font-size: 1.2rem;
    padding: 15px;
  }
  img {
    cursor: pointer;
    object-fit: cover;
    width: 100%;
    @media (min-width: 1340px) {
      max-width: 145px;
    }
    @media (max-width: 1600px) {
      max-width: 190px;
    }
    @media (min-width: 1620px) {
      max-width: 190px;
    }
  }
`;

const MustSeeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 120px;
    @media (max-width: 1316px) {
      margin: 5px;
    }
  }

  @media (max-width: 1316px) {
    overflow-x: scroll;
    padding: 20px;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
`;
const MustPlayContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 300px;
  }

  @media (max-width: 1316px) {
    overflow-x: scroll;
    padding: 20px;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
`;
