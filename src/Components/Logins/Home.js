import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import styled from "styled-components";
import Background from "../Assests/Background.gif";
import Logo from "../Assests/PSN.png";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <HomeContainer>
        {currentUser ? (
          <LoggedIn>
            <p>Welcome Back</p>
            <Link to="/loggedin">
              <LogoImg src={Logo} alt="" />
            </Link>
          </LoggedIn>
        ) : (
          <>
            <p>
              <Link to="/login">
                <Btn>Log In</Btn>
              </Link>{" "}
              or{" "}
              <Link to="/signup">
                <Btn>Sign Up</Btn>
              </Link>
            </p>
            <Link to="/" style={{ margin: "0 auto" }}>
              <Btn>Users</Btn>
            </Link>
          </>
        )}
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-position: center;
  background-size: cover;
  color: white;

  p {
    text-align: center;
  }
`;

const LoggedIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoImg = styled.img`
  cursor: pointer;
  margin-top: 30px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 37px 16px #fff;
`;

const Btn = styled.button`
  cursor: pointer;
  background: transparent;
  color: white;
  padding: 10px 60px;
  border: 1px solid white;
  cursor: pointer;
  margin: 30px 15px;
  text-align: center;
  :hover {
    background: white;
    color: black;
  }
`;
export default Home;
