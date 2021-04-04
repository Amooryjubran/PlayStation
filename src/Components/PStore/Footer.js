import styled from "styled-components";
export default function Footer() {
  return (
    <FooterContainer>
      <h1>
        <a
          href="https://store.playstation.com/en-ca/subscriptions"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          © 2021 Sony Interactive Entertainment LLC
        </a>{" "}
      </h1>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  height: 10vh;
  background: #00439c;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: 400;
  }
  h1 > a {
    text-decoration: none;
    color: white;
  }
`;
