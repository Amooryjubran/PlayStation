import React, { useState } from "react";
import styled from "styled-components";
import { GamesHeader } from "../Data";
export default function Header() {
  const [index, setIndex] = useState(0);
  const { title, subTitle, gameImage } = GamesHeader[index];

  const checkGame = (game) => {
    if (game > GamesHeader.length - 1) {
      return 0;
    }
    if (game < 0) {
      return GamesHeader.length - 1;
    }
    return game;
  };
  const nextGame = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkGame(newIndex);
    });
  };

  const PrevGame = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkGame(newIndex);
    });
  };
  return (
    <>
      <Headers>
        <HeadersContainer>
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <HeadersBtn onClick={PrevGame}>Previous</HeadersBtn>
          <HeadersBtn onClick={nextGame}>Next</HeadersBtn>
        </HeadersContainer>
        <HeadersImg src={gameImage} alt="" />
      </Headers>
    </>
  );
}

const Headers = styled.div`
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;

  h1,
  p {
    color: white;
    margin: 15px;
    font-size: 1.1rem;
    max-width: 400px;
  }
`;
const HeadersBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  margin: 15px;
  font-weight: 400;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  width: 150px;
  height: 40px;
  outline: none;
  &:hover {
    transition: 0.5s ease-in-out;
    background-color: white;
    color: black;
  }
`;

const HeadersImg = styled.img`
  width: 100%;
  cursor: pointer;
  height: 250px;
  max-width: 250px;
  object-fit: cover;

  &:hover {
    border: 0.1px solid #fff;
    transition: 0.2s ease-in-out;
  }
`;
const HeadersContainer = styled.div`
  align-self: center;
`;
