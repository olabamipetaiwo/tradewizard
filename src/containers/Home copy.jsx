import { ReactComponent as CaretDown } from "assets/caret-down.svg";
import "./home.scss";

const Home = () => {
  return (
    <main className="main">
      <section className="content flex flex-col align-center pt-lg">
        <h2 className="h-title text-center mb-sm"> TradeCore Wizard</h2>

        <section className="form__container">
          <h6 className="p-title pb-sm"> Add Book - New Book</h6>
          <section className="steps__indicator mb-sm">
            <section className="flex justify-between align-center">
              <div className="flex flex-col steps__item">
                <button>1</button>
                <p>Genre</p>
              </div>
              <div className="flex flex-col  steps__item">
                <button>2</button>
                <p>SubGenre</p>
              </div>
              <div className="flex flex-col  steps__item active">
                <button>3</button>
                <p>Add New SubGenre</p>
              </div>
              <div className="flex flex-col  steps__item">
                <button>4</button>
                <p>Information</p>
              </div>
            </section>
          </section>
          <section className="steps__content mb-sm">
            <div className="flex flex-wrap">
              <button className="btn btn-outline mr-sm mb-sm">xxxx</button>
              <button className="btn btn-outline mr-sm mb-sm">xxxx</button>
            </div>

            <div className="form__group">
              <label>Email</label>
              <input name="ddd" type="text"></input>
            </div>

            <label className="flex flex-row align-center mb-sm mt-sm ">
              <input type="checkbox" name="checkbox" />
              <span className="ml-xs p-title">Description is needed</span>
            </label>

            <div className="form__group mb-sm">
              <select>
                <option>ddddd</option>
                <option>ddddd</option>
                <option>ddddd</option>
              </select>
            </div>

            <div className="form__group mb-sm">
              <textarea placeholder="rrrrr"></textarea>
            </div>
            <section className="flex align-center justify-end steps__actions">
              <button className="btn btn-outline mr-sm">
                {/* <CaretDown /> */}
                <span>Back</span>
              </button>
              <button className="btn btn-primary">Next</button>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Home;
