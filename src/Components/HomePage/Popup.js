import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { useSpring, animated } from "react-spring";
export const Popup = ({
  showPopup,
  setShowPopup,
  title,
  img,
  popupMessage,
}) => {
  const ClosePopup = () => {
    setShowPopup((prev) => !prev);
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? `translateY(0%)` : `translateY(-100%)`,
  });
  return (
    <>
      {showPopup ? (
        <PopupContainer>
          <animated.div style={animation}>
            <PopupWrapper showPopup={showPopup}>
              <>
                <PopupImg src={img} alt="camera" />
                <PopupContent>
                  <h1>Are you ready for {title}</h1>
                  <p>{popupMessage}</p>
                  <button>Try</button>
                </PopupContent>
              </>
              <ClosePopupButton onClick={ClosePopup} />
            </PopupWrapper>
          </animated.div>
        </PopupContainer>
      ) : null}
    </>
  );
};

const PopupContainer = styled.div`
  margin-top: -250px;
  width: 80%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupWrapper = styled.div`
  width: 550px;
  height: 350px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const PopupImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: cover;

  min-width: 100%;
  min-height: 100%;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414 !important;

  h1,
  p {
    text-align: center;
    font-size: 15px !important;
    color: black !important;
    margin-bottom: 2rem;
  }
  button {
    cursor: pointer;
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const ClosePopupButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export default Popup;
