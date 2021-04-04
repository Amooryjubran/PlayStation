import Header from "./Header";
import HeadersBottom from "./HeadersBottom";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import TopDeals from "./TopDeals";
import NewGames from "./NewGames";
import TrendingGames from "./TrendingGames";

export default function PStore() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Header />
      <HeadersBottom />
      <TopDeals />
      <NewGames />
      <TrendingGames />
    </>
  );
}
