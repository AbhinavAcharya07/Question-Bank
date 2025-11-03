import React from "react";
import Card from "./Card";
import "./Home.css";
const Home = () => {
  return (
    <div className="Main">
      <h1>WELCOME</h1>
      <div className="card-grid">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
