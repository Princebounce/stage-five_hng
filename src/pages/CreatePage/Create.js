import React from "react";
import NavLogo from "../../assets/img/Nav Logo.png";
import ProfileCircle from "../../assets/img/profile-circle.png";
import ArrowDown from "../../assets/img/arrow-down.png";
import Edit from "../../assets/img/edit.png";
import VideoFrame from "../../assets/img/video frame.png";
import CopyIcon from "../../assets/img/copy.png";
import Facebook from "../../assets/img/Facebook.png";
import WhatsApp from "../../assets/img/WhatsApp.png";
import Telegram from "../../assets/img/Telegram.png";

const create = () => {
  return (
    <main className="flex flex-col">
      {/* NAV */}
      <div className="ml-10 mt-4 flex flex-row md:mt-8 md:ml-24 justify-between">
        <div className="flex flex-row">
          <img src={NavLogo} alt="" className="w-10 h-10" />
          <p className="mt-2 ml-2 text-base text-[#100a42] font-bold">
            HelpMeOut
          </p>
        </div>
        <div className="flex flex-row mr-3 lg:flex lg:flex-row lg:mr-14">
          <img src={ProfileCircle} alt="" className="w-10 h-10 mr-7" />
          <p className="text-base font-normal text-[#141414] mt-1.5 -ml-6">
            John Mark
          </p>
          <img src={ArrowDown} alt="" className="w-6 h-6 mt-1.5 ml-2" />
        </div>
      </div>
      {/* BREADCRUMB SECTION */}
      <div className="ml-10 mt-5 lg:mt-10 lg:ml-24">
        <p className=" text-lg font-medium text-[#141414] tracking-wider">
          Home / Recent Videos /{" "}
          <span className="text-xl text-[#413c6d]">
            How To Create A Facebook Ad Listing{" "}
          </span>{" "}
        </p>
      </div>
      {/* TOPBAR */}
      <div className="flex flex-row mt-2.5 ml-10 lg:flex lg:flex-row lg:mt-5 lg:ml-24">
        <h2 className="text-xl lg:text-3xl font-bold">
          How To Create A Facebook Ad Listing{" "}
        </h2>
        <img src={Edit} alt="" className="w-5 h-5 lg:w-6 lg:h-6 mt-1.5 ml-3" />
      </div>
      {/* WEB CARD */}
      <div className="mt-5 ml-10 lg:mt-7 web-card rounded-3xl border-0 lg:ml-24 border-[#b6b3c6]">
        <img src={VideoFrame} alt="" className="video-frame p-3" />
      </div>
      {/* SHARE VIDEO SECTION */}
      <div className="ml-10 mt-5 flex flex-col lg:ml-24 lg:mt-10 ">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="flex flex-row">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email of receiver"
              className="email-bar bg-[#e7e7ed] h-10 rounded-xl "
            />
            <button className="send-btn w-16 h-10 pt-2.5 pb-4 bg-[#605c84] rounded-lg mt-1.5 text-[#fff] text-base font-medium">
              Send
            </button>
          </div>
          <div className="flex flex-row">
            <input
              type="url"
              id="url"
              name="url"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
              className="url-bar bg-[#f0f3f4] h-10 rounded-xl "
            />
            <button className="copy-icon flex flex-row gap-2 mt-1.5">
              {" "}
              <img src={CopyIcon} alt="" className="w-5 h-5" /> Copy URL
            </button>
          </div>
        </div>
        <div className="mt-7">
          <p className="text-[#08051e] text-lg font-medium">Share your video</p>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-1.5 mt-3">
            <button className="flex flex-row w-36 h-12 rounded-md p-3 text-base font-medium text-[#0a0628] border-[#0a0628] social-btn">
              {" "}
              <img src={Facebook} alt="" className="w-5 h-5 mt-1  mr-2" />
              <span className="social-link">Facebook</span>
            </button>
            <button className="flex flex-row w-36 h-12 rounded-md p-3 text-base font-medium text-[#0a0628] border-[#0a0628] social-btn">
              {" "}
              <img src={WhatsApp} alt="" className="w-5 h-5 mt-1  mr-2" />
              <span className="social-link">WhatsApp</span>
            </button>
            <button className="flex flex-row w-36 h-12 rounded-md p-3 text-base font-medium text-[#0a0628] border-[#0a0628] social-btn">
              {" "}
              <img src={Telegram} alt="" className="w-5 h-5 mt-1  mr-2" />
              <span className="social-link">Telegram</span>
            </button>
          </div>
        </div>
      </div>
      {/* TRANSCRIPT */}
      <div className="flex flex-col ml-10 lg:ml-24 mt-10">
        <h3 className="text-[#000] text-xl font-medium">Transcript</h3>
        <select className=" w-32 h-10 rounded color-[#9d9d9d] border-[#cfcfcf] mt-4">
          <option>English</option>
        </select>

        <div className="flex flex-col w-4/5 mt-10 mb-5 gap-8 overflow-y-scroll transcript-bar">
          <div className="flex flex-row gap-4 lg:gap-8">
            <p className="text-[#141414] text-xl font-medium">0.01</p>
            <p className="font-normal text-lg lg:text-xl text-[#000000]">
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand <br /> menu or at the top of
              the First step. Open Facebook on your desktop or mobile device and
              locate <br /> "Marketplace" in the left-hand menu or at the top of
              the
            </p>
          </div>
          <div className="flex flex-row gap-4 lg:gap-8">
            <p className="text-[#141414] text-xl font-medium">0.15</p>
            <p className="font-normal text-lg lg:text-xl text-[#000000]">
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand <br /> menu or at the top of
              the . Open Facebook on your desktop or mobile device and locate
              "Marketplace" <br /> in the left-ha
            </p>
          </div>
          <div className="flex flex-row gap-4 lg:gap-8">
            <p className="text-[#141414] text-xl font-medium">0.30</p>
            <p className="font-normal text-lg lg:text-xl text-[#000000]">
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand <br /> menu or at the top of
              the
            </p>
          </div>
          <div className="flex flex-row gap-4 lg:gap-8">
            <p className="text-[#cfcfcf] text-xl font-medium">1.00</p>
            <p className="font-normal text-lg lg:text-xl text-[#cfcfcf]">
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand <br /> menu or at the top of
              the
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default create;
