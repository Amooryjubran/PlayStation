import styled from "styled-components";
import React from "react";
import { PStoreContainer } from "../Data";

export default function TopDeals() {
  const ImagesFile = PStoreContainer.PSTrending.map((image) => (
    <>
      <img src={image.img} alt="" />
    </>
  ));
  return (
    <TopDealsContainer>
      <h1>Trending Now</h1>
      <TopDealsImg>{ImagesFile}</TopDealsImg>
    </TopDealsContainer>
  );
}

const TopDealsContainer = styled.div`
  margin-top: 50px;
  h1 {
    text-align: center;
    font-weight: 400;
    margin: 50px 0;
  }
`;
const TopDealsImg = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    height: 300px;
    width: 300px;
    cursor: pointer;

    :hover {
      border: solid 2px black;
      margin: -2px;
    }
  }
`;
