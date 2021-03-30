import React, { useState } from "react";
import styled from "styled-components";
import HeadersNav from "./HeadersNav";
import { PStoreContainer } from "../Data";

export default function Header() {
  const [index, setIndex] = useState(0);
  const { img } = PStoreContainer.PStoreHeadrsNav[index];
  return (
    <>
      <HeadersNav setIndex={setIndex} index={index} />
      <HeaderContainer
        style={{ backgroundImage: "url(" + img + ")" }}
      ></HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  height: 90vh;
  background-position: center;
  background-size: cover;
`;
