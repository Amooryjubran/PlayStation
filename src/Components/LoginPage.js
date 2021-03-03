import styled from "styled-components";
import Background from "./Assests/Background.gif";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import Ellie from "./Assests/Ellie.jpg";
import Crash from "./Assests/Crash.jpg";
import AddIcon from "@material-ui/icons/Add";
export default function LoginPage() {
  return (
    <Login>
      <h1>Welcome Back To PlayStaion</h1>
      <p>Who's using this contoller?</p>
      <ControllerIcon />
      <div>
        <div>
          <AddIcon className="Icon" />
          <h2>Create User</h2>
        </div>
        <div>
          <img src={Ellie} alt="" />
          <h2>Omar</h2>
        </div>
        <div>
          <img src={Crash} alt="" />
          <h2>Dona</h2>
        </div>
      </div>
    </Login>
  );
}

const Login = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-position: center;
  background-size: cover;
  color: white;

  > div {
    display: flex;
    margin: 0px auto;
  }
  > div > div {
    margin: 0 20px;
  }

  img,
  .Icon {
    border: 1px solid white;
    cursor: pointer;
    border-radius: 50%;
    padding: 10px;
    height: 100px;
    width: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;

    &::hover {
      padding: 500px;
    }
  }

  h1,
  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    color: lightgray !important;
    font-size: 20px;
  }
`;

const ControllerIcon = styled(SportsEsportsIcon)({
  display: "block",
  margin: "20px auto",
  transform: "scale(1.7)",
});
