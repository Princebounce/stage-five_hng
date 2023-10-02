import React from "react";
import ReactPlayer from "react-player";
import {
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaRegEdit
} from "react-icons/fa";
import {FiCopy} from "react-icons/fi"
import "./VideoPage.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "simplebar/dist/simplebar.min.css"; // Import SimpleBar CSS
import { CopyToClipboard } from "react-copy-to-clipboard";
import SimpleBar from "simplebar-react";


const VideoPage = () => {
  return (
    <div className="video-player">
      <Header />

      <div className="main-container">
        <div className="left-side">
          <div className="container1">
            <p className="bold-text">Your Video is Ready!</p>
          </div>
          <div className="container2">
            <p>Name</p>
            <div className="editable-text">
              <input type="text" value="Edit Name" readOnly />
              <FaRegEdit size={25} color="#0a0628"/>
            </div>
          </div>
          <div className="container3">
            <input type="text" placeholder="Enter email of receiver" />
            <button className="send-button">Send</button>
          </div>
          <div className="container4">
            <p className="bold-text">Video URL</p>
            <div className="url-container">
              <input type="text" value="https://example.com/video" readOnly />
              <div className="copy-container">
                <button className="copy-button">
                  
                    <FiCopy style={{ fontSize: '32px', color:"#0a0628"  }}  className="fi-copy" /> Copy
                  
                </button>
              </div>
            </div>

          </div>

          <div className="container5">
            <p>Share Your Video</p>
            <div className="share-icons">
              <div className="share-icon">
                <FaFacebook style={{ color: "#1877F2" }} /> Facebook
              </div>
              <div className="share-icon">
                <FaWhatsapp style={{ color: "#25D366" }} /> Whatsapp
              </div>
              <div className="share-icon">
                <FaTelegram style={{ color: "#0088cc" }} /> Telegram
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="right-side">
          {/* Right side content */}
          <div className="container1 video-container">
            {/* Video Player */}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=VIDEO_ID"
              width="100%"
              height="315px"
              controls
            />
          </div>
          <div className="container2">
            {/* Transcript Text */}
            <p className="bold-text">Transcript</p>
            {/* Language Dropdown */}
            <select className="language-dropdown">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              {/* Add more language options here */}
            </select>
          </div>
          <div className="container3">
            {/* Scrollbar Container */}
            <div className="scrollbar-container">
              {/* Generated Transcript */}
              <SimpleBar style={{ maxHeight: "200px", height: "100%" }}>
                <p>
                  Generated transcript goes here... Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid, dignissimos ducimus
                  numquam eaque cumque odio soluta unde illo a optio eligendi,
                  mollitia neque accusamus harum repellat labore quam veniam
                  nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Tempora corporis provident mollitia explicabo asperiores
                  quia inventore placeat unde nobis reprehenderit repellat,
                  omnis voluptas dicta delectus voluptatum eius aut vero ipsa?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt rem nihil esse labore debitis atque hic laudantium
                  culpa. Incidunt ad, adipisci ex assumenda consequuntur culpa
                  ratione! Ut rem fugiat aspernatur.
                </p>
              </SimpleBar>
            </div>
          </div>
        </div>
      </div>
      <div className="small-container">
        <div className="small-container-content">
          <p>
            To ensure the availability and privacy of your video, <br />
            we recommend saving it to your account.
          </p>
          <button className="save-button">Save Video</button>
          <p>Don't have an account? <span className="bold-text">Create an account.</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;
