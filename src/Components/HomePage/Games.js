import React from "react";
import styled from "styled-components";
import { GamesHeader } from "../Data";
import NearMeIcon from "@material-ui/icons/NearMe";
export default function Games() {
  const GameImages = GamesHeader.map((game) => (
    <>
      <div className="game">
        <GameLogos key={game.id} src={game.img} alt="Icons" />
      </div>
    </>
  ));
  return (
    <GamesIcons>
      <div className="container">
        <GameNav className="game-nav">
          <div className="game active">
            <Arrow />
          </div>
          {GameImages}
        </GameNav>
      </div>
    </GamesIcons>
  );
}

const GamesIcons = styled.div`
  margin-top: 30px;

  .container {
    max-width: 80%;
    margin: 0 auto;
  }

  .game {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 20%;
    margin-right: 15px;
    cursor: pointer;
    border: 0px solid #576170;
    color: white;
    object-fit: cover;
    &:hover {
      border: 2px solid #576170;
    }
  }
  .game.active {
    overflow: visible;
    width: 140px;
    height: 140px;
    border: 2px solid #576170;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::after {
      content: "Explore";
      position: absolute;
      color: white;
      font-size: 1.6rem;
      font-weight: 100;
      bottom: 10px;
      right: -100px;
    }
  }
`;

const GameNav = styled.section`
  display: flex;
  margin-bottom: 100px;
`;
const GameLogos = styled.img`
  transform: scale(1.5);
  width: 100px;
  object-fit: contain;
  height: 100px;
  background: url("https://progameguides.com/wp-content/uploads/2019/12/last-of-us-desktop-wallpaper001-450x253.jpg");
`;

const Arrow = styled(NearMeIcon)({
  display: "block",
  margin: "20px auto",
  transform: "scale(2.5)",
});
