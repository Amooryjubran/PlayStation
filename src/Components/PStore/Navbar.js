import React from "react";
import styled from "styled-components";
import Logo from "../Assests/Logo.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { PStoreNavbar } from "../Data";

export default function Navbar() {
  const NavbarMap = PStoreNavbar.map((nav) => (
    <>
      <li>
        {nav.nav} <Arrow />
      </li>
    </>
  ));

  return (
    <NavContainer>
      <NavLeft>
        <ul>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          {NavbarMap}
        </ul>
      </NavLeft>
      <NavRight>
        <ul>
          <li>
            My Playstation
            <Arrow />
          </li>
          <li>
            <Link to="/">
              <button>Sign In</button>
            </Link>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </NavRight>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;

  ul > li {
    display: inline;
    margin: 7px;
    cursor: pointer;
    &:hover {
      color: #0070d1;
    }
  }
`;

const NavLeft = styled.div`
  img {
    height: 30px;
    width: 40px;
    vertical-align: bottom;
  }
`;
const NavRight = styled.div`
  button {
    background-color: #363636;
    padding: 10px 25px;
    border-radius: 30px;
    color: white;
    font-size: 15px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    outline: none;

    &:hover {
      transition: 0.5s ease-in-out;
      background-color: white;
      color: black;
    }
  }
`;

const Arrow = styled(ExpandMoreIcon)({
  verticalAlign: "text-top",
});

const Search = styled(SearchIcon)({
  verticalAlign: "text-top",
  transform: "scale(1.2)",
  marginRight: "20px",
});
