import React from "react";
import styled from "styled-components";
import NearMeIcon from "@material-ui/icons/NearMe";
export default function Games() {
  const GameImages = data.map((game) => (
    <>
      <div className="game">
        <img key={game.id} src={game.img} className="img" alt="Icons" />
      </div>
    </>
  ));
  return (
    <GamesIcons>
      <div className="container">
        <section className="game-nav">
          <div className="game active">
            <NearMeIcon className="arrow" />
          </div>
          {GameImages}
        </section>
      </div>
    </GamesIcons>
  );
}

const data = [
  {
    id: 1,
    img:
      "https://progameguides.com/wp-content/uploads/2019/12/last-of-us-desktop-wallpaper001-450x253.jpg",
  },
  {
    id: 2,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmM78uSVkFaxM2gR8Xv4qh7Z5EibjfgZB2HuR9fOTR6dLln4IC5QsNTNlhak&usqp=CAc",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81QoNRp5%2BWL._SL1353_.jpg",
  },

  {
    id: 4,
    img:
      "https://images.pushsquare.com/a04274dbec2ec/resident-evil-village-cover.cover_large.jpg",
  },

  {
    id: 5,
    img: "https://twinfinite.net/wp-content/uploads/2020/09/codblopscwfeat.jpg",
  },

  {
    id: 6,
    img:
      "https://static.wikia.nocookie.net/godofwar/images/a/a7/God_of_War_4_cover.jpg/revision/latest/top-crop/width/360/height/360?cb=20170614023116",
  },

  {
    id: 7,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Uncharted_4_box_artwork.jpg/220px-Uncharted_4_box_artwork.jpg",
  },
];

const GamesIcons = styled.div`
  margin-top: 30px;
  .arrow {
    font-size: 5rem;
  }
  .container {
    max-width: 80%;
    margin: 0 auto;
  }
  .game-nav {
    display: flex;
    margin-bottom: 250px;
  }
  .img {
    transform: scale(1.5);
    width: 100px;
    object-fit: contain;
    height: 100px;
    background: url("https://progameguides.com/wp-content/uploads/2019/12/last-of-us-desktop-wallpaper001-450x253.jpg");
  }

  .game-nav .game {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 20%;
    margin-right: 15px;
    cursor: pointer;
    border: 0px solid #576170;
    color: white;
    object-fit: cover;
    &:hover {
      border: 2px solid #576170;
    }
  }
  .game-nav .game.active {
    overflow: visible;
    width: 140px;
    height: 140px;
    border: 2px solid #576170;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::after {
      content: "Explore";
      position: absolute;
      color: white;
      font-size: 1.6rem;
      font-weight: 100;
      bottom: 10px;
      right: -100px;
    }
  }
`;
