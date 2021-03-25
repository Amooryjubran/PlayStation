import React from "react";
import styled from "styled-components";
import Logo from "../Assests/SonyLogo.PNG";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <TopbarContainer>
      <Link to="Home">
        <img src={Logo} alt="" />
      </Link>
    </TopbarContainer>
  );
}

const TopbarContainer = styled.nav`
  background-color: black;
  img {
    display: block;
    margin-left: auto;
    padding: 5px;
    height: 24px;
  }
`;
