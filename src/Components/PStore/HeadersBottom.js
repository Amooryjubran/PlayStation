import styled from "styled-components";
export default function HeadersBottom() {
  return (
    <HeadersContainer>
      <HeadersTop>
        <h1>Welcome to Playstation Plus</h1>
        <p>
          Enhance your PlayStation experience with online multiplayer, monthly
          games, exclusive discounts and more.
        </p>
      </HeadersTop>

      <HeadersHero>
        <button>See More</button>
      </HeadersHero>
    </HeadersContainer>
  );
}
const HeadersContainer = styled.div`
  justify-content: space-around;
  display: flex;
  margin-top: -50px;
  color: black;
  height: 23vh;
  box-shadow: 2px 4px 10px lightgray;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), #fff 4.5rem);
`;

const HeadersTop = styled.div`
  display: flex;
  flex-direction: column !important;
  h1 {
    font-weight: 400;
  }
`;
const HeadersHero = styled.div`
  align-self: center;

  button {
    background-color: #0070d1;
    padding: 10px 25px;
    border-radius: 30px;
    color: white;
    font-size: 15px;
    border: none;
    cursor: pointer;
    font-weight: 800;
    outline: none;

    &:hover {
      transition: 0.5s ease-in-out;
      border: 1px solid #0070d1;
      color: white;
    }
  }
`;
