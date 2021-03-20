import PuffLoader from "react-spinners/PuffLoader";
import styled from "styled-components";
import Background from "../Assests/Background.gif";

function Spinner() {
  return (
    <SpinnerContainer>
      <PuffLoader color="white" loading size={50} />
    </SpinnerContainer>
  );
}

export default Spinner;

const SpinnerContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url(${Background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
