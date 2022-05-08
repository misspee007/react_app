import "../styles/home.css";

import { Link } from "react-router-dom";

import heroImg from "../assets/images/illustration-working.svg";
import Card from "./Card";
import iconBr from "../assets/images/icon-brand-recognition.svg";
import iconDr from "../assets/images/icon-detailed-records.svg";
import iconFc from "../assets/images/icon-fully-customizable.svg";
import Button from "./Button";

const Home = () => {
  return (
    <>
      <header>
        <div className="hero-section">
          <h1>More than just shorter links</h1>
          <p className="hero-txt">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button text="Get Started" type="btn btn-rg btn-rounded" />
        </div>
        <div className="hero-img-wrap">
        </div>
      </header>

      <main>
        <section>
          <form>
            <label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Shorten a link here..."
              />
            </label>
            <Button text="Shorten It!" />
          </form>
        </section>
        <section className="advanced">
          <div className="title">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="cards">
              <Card
                icon={iconBr}
                title="Brand Recognition"
                copy="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
              />
              <Card
                icon={iconDr}
                title="Detailed Records"
                copy="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              />
              <Card
                icon={iconFc}
                title="Fully Customizable"
                copy="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
