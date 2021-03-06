import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Headers>
      <span> Official News from PlayStation | 2021</span>
      <h1> Ready For A PS5 Advunture ?</h1>
      <p>
        {" "}
        Astro's Playroom is pre-loaded and waiting for you! explore the new
        cabilities of PS5 and feel the world!
      </p>
    </Headers>
  );
}

const Headers = styled.div`
  opacity: 0.8;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;

  h1,
  span,
  p {
    color: white;
    margin: 15px;
    font-size: 1.1rem;
    max-width: 700px;
  }
`;
