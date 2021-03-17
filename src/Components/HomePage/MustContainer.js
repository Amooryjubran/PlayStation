import React from "react";
import styled from "styled-components";
import { MustSeeGames, MustPlayGames } from "../Data";

export default function MustContainer() {
  const Games = MustSeeGames.map((game) => <img src={game.img} alt="Icons" />);
  const VideoGames = MustPlayGames.map((game) => (
    <img src={game.img} alt="Icons" />
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
      max-width: 160px;
    }
    @media (min-width: 1620px) {
      max-width: 200px;
    }
  }
`;

const MustSeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    height: 100px;
    @media (min-width: 1620px) {
      height: 120px;
    }
  }
`;
const MustPlayContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 200px;
    @media (min-width: 1620px) {
      height: 300px;
    }
  }
`;
