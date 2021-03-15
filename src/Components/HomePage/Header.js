import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
export default function Header({
  title,
  subTitle,
  gameImage,
  img,
  popupMessage,
}) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <>
      <Headers>
        <HeadersContainer>
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <ButtonContainer>
            <HeadersBtn onClick={openPopup}>Play</HeadersBtn>
            <Popup
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              title={title}
              img={img}
              popupMessage={popupMessage}
            />
          </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  float: left;
`;
