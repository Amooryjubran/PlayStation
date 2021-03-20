import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import Ellie from "../Assests/Ellie.jpg";
import firebaseConfig from "../../firebase.js";

export default function Navbar() {
  const currDate = new Date().toLocaleTimeString();

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Nav className="Navs">
        <nav>
          <ul>
            <li>Games</li>
            <li>Media</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <SettingsIcon />
            </li>
            <li>
              <img
                onClick={() => firebaseConfig.auth().signOut()}
                src={Ellie}
                alt=""
              />
            </li>
          </ul>
        </nav>
        <nav>
          <p>{currDate}</p>
        </nav>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  /* margin-top: 30px; */
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
  color: white;

  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
  }
  img {
    border-radius: 50%;
    height: 25px;
    width: 25px;
    object-fit: cover;
  }
`;
