import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
export default function Header({
  title,
  subTitle,
  gameImage,
  img,
  popupMessage,
  gameBtn,
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
        <HeadersImgContainer>
          <HeadersImg src={gameImage} alt="" />
          <HeadersImgBtn>{gameBtn}</HeadersImgBtn>
        </HeadersImgContainer>
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
  animation-name: animation-from-bottom;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: (300ms);
  transform: translateY(5%);
  opacity: 0;

  @keyframes animation-from-bottom {
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  h1,
  p {
    color: white;
    margin: 15px;
    max-width: 400px;
  }
  h1 {
    font-weight: 600;
    font-size: 1.3rem;
  }
  p {
    font-weight: 400;
    font-size: 1.1rem;
  }

  @media (max-width: 890px) {
    flex-direction: column;
    align-items: center;
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
  cursor: pointer;
  height: 250px;
  max-width: 250px;
  object-fit: cover;

  box-shadow: -44px 8px 81px -12px rgba(255, 255, 255, 0.77);
  &:hover {
    border: 0.1px solid #fff;
    transition: 0.2s ease-in-out;
  }
`;
const HeadersContainer = styled.div`
  align-self: center;

  @media (max-width: 890px) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  float: left;
  @media (max-width: 890px) {
    display: block;
    float: inherit;
  }
`;

const HeadersImgContainer = styled.div`
  position: relative;
  max-width: 100%;
`;

const HeadersImgBtn = styled.button`
  position: absolute;
  top: 80%;
  left: 25%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  color: white;
  padding: 8px 15px;
  border: none;
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: white;
    color: black;
  }
`;
