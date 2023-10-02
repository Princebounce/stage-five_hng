import React from "react";
import Footer from "../../components/Footer";
import Card from "./Card";
import "./home.css";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo1 from "../../assets/icons/iCON 7 1.svg";
import Profile from "../../assets/icons/profile-circle.svg";
import Search from "../../assets/icons/search-normal.svg";

const Home = () => {
  return (
    <div className="home">
      {/* Navbar properties */}
      <div className="nav-bar">
        <div className="help-container">
          <span>
            <img src={logo1} />
          </span>
          <div className="text1">HelpMeOut</div>
        </div>
        <div className="mini-user">
          <span className="user-icon">
            {" "}
            <img src={Profile} />
          </span>
          <p>John Mark</p>

          <RiArrowDropDownLine style={{ fontSize: "32px", color: "#0a0628" }} />
        </div>
      </div>

      <div className="user-search-container">
        <div className="user-container">
          <div className="username">Hello, John Mark</div>
          <p>Here are your recorded videos</p>
        </div>
        <div className="search-container">
          <span className="search-icon">
            {" "}
            <img src={Search} />
          </span>

          <input
            type="text"
            className="search-input"
            placeholder="Search for a particular video"
          />
        </div>
      </div>

      <hr className="divider" />

      <main>
        <div className="scroll-container">
          {/* Container 1 */}
          <div className="container">
            <div className="container-header">Recent files</div>
            <div className="cards">
              <Card title="Card 1" content="Content for Card 1" />
              <Card title="Card 2" content="Content for Card 2" />
            </div>
          </div>

          {/* Container 2 */}
          <div className="container">
            <div className="container-header">Files from last week</div>
            <div className="cards">
              <Card title="Card 1" content="Content for Card 1" />
              <Card title="Card 2" content="Content for Card 2" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
