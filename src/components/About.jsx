import { useContext } from "react";
import { DataContext } from "../App.js";
import "../styles/about.css";

const About = () => {
  const data = useContext(DataContext);

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>{data.about}</p>
    </div>
  )
}

export default About