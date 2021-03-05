import React from "react";
import styled from "styled-components";
import Games from "./Games";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <Home>
      <Navbar />
      <Games />
    </Home>
  );
}

const Home = styled.div`
  background-image: url("https://images6.alphacoders.com/777/thumb-1920-777426.jpg");
  background-position: center;
  background-size: cover;
  height: 100vh;
`;
