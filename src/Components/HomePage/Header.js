import React from "react";
import TLOU2 from "../Assests/TLOU2.png";
import styled from "styled-components";

export default function Header() {
  return (
    <Headers>
      <HeadersContainer>
        <h1> Ready For A New Advunture ?</h1>
        <p>
          {" "}
          With The Last Of Us Part ll you will confront the devastating physical
          and emotional repercussions of Ellie's actions.
        </p>
        <HeadersBtn>Play</HeadersBtn>
      </HeadersContainer>
      <HeadersImg src={TLOU2} alt="" />
    </Headers>
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

  max-width: 250px;

  &:hover {
    border: 0.1px solid #fff;
    transition: 0.2s ease-in-out;
  }
`;
const HeadersContainer = styled.div`
  align-self: center;
`;
