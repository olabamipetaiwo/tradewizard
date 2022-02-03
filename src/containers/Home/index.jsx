import useBook from "hooks/useBook";
import "./home.scss";
import SuccessModal from "./components/SuccessModal";
import StepsContainer from "./components/StepsContainer";
import BooksListing from "components/Books";

const Home = () => {
  const { newBookCreated } = useBook();

  return (
    <main className="main">
      <section className="content flex flex-col align-center pt-lg">
        <h2 className="h-title text-center mb-sm"> TradeCore Wizard</h2>
        {newBookCreated ? <SuccessModal /> : <StepsContainer />}
        <BooksListing />
      </section>
    </main>
  );
};

export default Home;
