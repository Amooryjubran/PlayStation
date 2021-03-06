import React from "react";
import styled from "styled-components";
import { MustSeeGames } from "../Data";

export default function MustSee() {
  const Games = MustSeeGames.map((game) => <img src={game.img} alt="Icons" />);
  return (
    <MustPlay>
      <h1>Must See</h1>
      <MustPlayContainer>{Games}</MustPlayContainer>
    </MustPlay>
  );
}

const MustPlay = styled.div`
  /* margin-top: 100px; */
  max-width: 80%;
  margin: 0 auto;
  color: white;
  h1 {
    font-size: 1.2rem;
    padding: 15px;
  }
  img {
    height: 100px;
    width: 200px;
    cursor: pointer;
    object-fit: cover;
    @media (max-width: 1400px) {
      width: 160px;
    }
  }
`;

const MustPlayContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
