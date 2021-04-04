import Whirligig from "react-whirligig";
import { PStoreContainer } from "../Data";
import styled from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Slider = () => {
  const ImgContainer = PStoreContainer.PSGamesTrending.map((game) => (
    <>
      <img src={game.img} alt="newGames" />
    </>
  ));
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();

  return (
    <NewGamesContainer>
      <h1>Trending Games</h1>
      <GamesContainer>
        <button onClick={prev}>
          <ArrowLeft />
        </button>
        <Whirligig
          visibleSlides={5}
          gutter="1em"
          className="Whirligig"
          ref={(_whirligigInstance) => {
            whirligig = _whirligigInstance;
          }}
        >
          {ImgContainer}
        </Whirligig>
        <button onClick={next}>
          <ArrowRight />
        </button>
      </GamesContainer>
    </NewGamesContainer>
  );
};
export default Slider;

const NewGamesContainer = styled.div`
  max-width: 80%;
  margin: 70px auto;

  h1 {
    font-weight: 400;
  }

  .Whirligig {
    overflow-x: hidden !important;
  }
  img {
    height: 175px;
    width: 175px;
    cursor: pointer;
    :hover {
      border: 2px solid #0070d1;
    }
  }
`;

const GamesContainer = styled.div`
  display: flex;
  button {
    border: none;
    background: transparent;
    outline: none;
  }
`;

const ArrowRight = styled(ChevronRightIcon)`
  cursor: pointer;
  color: white;
  background-color: #0070d1;
  border-radius: 50%;
`;

const ArrowLeft = styled(ChevronLeftIcon)`
  cursor: pointer;
  color: white;
  background-color: #0070d1;
  border-radius: 50%;
`;
