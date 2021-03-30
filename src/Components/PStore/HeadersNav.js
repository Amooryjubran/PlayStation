import styled from "styled-components";
import Logo from "../Assests/PStoreNav.PNG";
import PSN from "../Assests/PlayStation.Store.png";
import { PStoreContainer } from "../Data";

export default function HeadersNav({ setIndex }) {
  const Nav = PStoreContainer.PStoreHeadrsNav.map((nav, index) => (
    <>
      <li onClick={() => setIndex(index)} key={nav.id}>
        {nav.nav}
      </li>
    </>
  ));
  return (
    <HeadersNavContainer>
      <HeadersLogo>
        <img src={Logo} alt="" />
        <PSNImage src={PSN} alt="" />
      </HeadersLogo>
      <HeadersNavigation>
        <ul>{Nav}</ul>
      </HeadersNavigation>
    </HeadersNavContainer>
  );
}

const HeadersNavContainer = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
`;
const HeadersLogo = styled.div`
  display: flex;
  flex: 1;
  margin-left: 30px;
  img {
    cursor: pointer;
    margin: 0 7px;
    height: 50px;
  }
`;
const PSNImage = styled.img`
  height: 25px !important;
  width: 150px;
  align-self: center;
`;

const HeadersNavigation = styled.div`
  flex: 2.2;
  ul > li {
    cursor: pointer;
    display: inline;
    margin: 10px;
    font-weight: 600;
    :focus {
      color: red;
    }
  }
`;
