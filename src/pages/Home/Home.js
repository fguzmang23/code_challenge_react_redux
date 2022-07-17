import React from "react";
import MainCard from "../../components/MainCard";
import "./Home.scss";
import { Gradient } from "react-gradient";

const gradients = [
  ["#200844", "#fb314a"],
  ["#00c3b9", "#05053c"],
];
const Home = () => {
  return (
    <Gradient
      gradients={gradients}
      property="background"
      duration={5500}
      angle="45deg"
      className="Home"
    >
      <MainCard />
    </Gradient>
  );
};

export default Home;
