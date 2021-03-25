import React from "react";
import styled from "styled-components";
import { GamesHeader } from "../Data";
import NearMeIcon from "@material-ui/icons/NearMe";
import { Link } from "react-router-dom";
export default function Games({ setIndex }) {
  const GameImages = GamesHeader.map((game, index) => (
    <>
      <div className="game">
        <GameLogos
          onClick={() => setIndex(index)}
          key={game.id}
          src={game.img}
          alt="Icons"
        />
      </div>
    </>
  ));
  return (
    <>
      <GamesIcons>
        <div className="container">
          <GameNav>
            <div className="game active">
              <Arrow />
            </div>
            {GameImages}
            <Link to="/store">
              <PStoreLogo
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps-store-bag-22jun20?$native--t$"
                alt=""
              />
            </Link>
          </GameNav>
        </div>
      </GamesIcons>
    </>
  );
}

const GamesIcons = styled.div`
  margin-top: 30px;
  animation-name: animation-from-bottom;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: (1ms);
  transform: translateX(50%);
  opacity: 0;

  @keyframes animation-from-bottom {
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

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
  margin-bottom: 50px;
`;
const GameLogos = styled.img`
  transform: scale(1.5);
  width: 100px;
  object-fit: contain;
  height: 100px;
`;

const PStoreLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20%;
  cursor: pointer;
  background-color: rgb(76, 72, 72, 0.5);
  border: 0px solid #576170;
  &:hover {
    border: 2px solid #576170;
    background-color: gray;
  }
`;

const Arrow = styled(NearMeIcon)({
  display: "block",
  margin: "20px auto",
  transform: "scale(2.5)",
});
