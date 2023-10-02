import React from "react";
import Popup from "../../components/PopUp";
import logo1 from "../../assets/icons/iCON 7 1.svg";
import Edit from "../../assets/img/edit.png";
import CopyIcon from "../../assets/img/copy.png";
import Facebook from "../../assets/img/Facebook.png";
import WhatsApp from "../../assets/img/WhatsApp.png";
import Telegram from "../../assets/img/Telegram.png";
import Divider from "../../assets/img/divider.png";
import Video from "../../assets/img/video.png";
import logo2 from "../../assets/icons/iCON 7 2.svg";

const ready = () => {
  return (
    
    <main className="flex flex-col">
      
      {/* HEADER */}
      <div className="flex justify-between px-[40px] lg:px-[70px] font-semibold items-center">
        <div className="flex items-center font-bold gap-[8px] py-5">
          <img src={logo1} />
          <p className="text-[#100A42]">HelpMeOut</p>
        </div>

        <div className="gap-[35px] hidden sm:flex">
          <p className="cursor-pointer">Features</p>
          <p className="cursor-pointer">How it Works</p>
        </div>

        <div className="text-[18px]">
          <p>Get Started</p>
        </div>
      </div>
      {/* MAIN PAGE */}
      <div className="flex flex-col lg:flex-row ml-10 lg:ml-20 mt-10 mb-5 justify-between gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-[#141414]">
            Your video is ready!
          </h1>
          <p className="font-medium text-base text-[#141414] mt-5">Name</p>
          <div className="flex flex-row gap-3 -mt-3">
            <p className="text-2xl font-semibold text-[#413c6d]">
              Untitled_Video_20232509
            </p>
            <img
              src={Edit}
              alt=""
              className="w-5 h-5 lg:w-6 lg:h-6 mt-1 ml-2 cursor-pointer"
            />
          </div>
          <div className="flex flex-row mt-8">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email of receiver"
              className="email-bar bg-[#e7e7ed] h-10 rounded-xl "
            />
            <button className="send-btn w-16 h-10 pt-2.5 pb-4 bg-[#605c84] rounded-lg cursor-pointer mt-1.5 text-[#fff] text-base font-medium">
              Send
            </button>
          </div>
          <div className="flex flex-col mt-8 gap-3">
            <p className="font-semibold text-xl text-[#141414]">Video Url</p>
            <div className="flex flex-row">
              <input
                type="url"
                id="url"
                name="url"
                placeholder="https://www.helpmeout/Untitled_Video_20232509"
                className="share-url-bar bg-[#f0f3f4] h-10 rounded-xl "
              />
              <button className="copy-icon flex flex-row gap-2 mt-1.5 cursor-pointer">
                {" "}
                <img src={CopyIcon} alt="" className="w-5 h-5" /> Copy URL
              </button>
            </div>
          </div>
          {/* SHARE VIDEO SECTION */}
          <div className="flex flex-col">
            <div className="mt-7">
              <p className="text-[#08051e] text-lg font-medium">
                Share your video
              </p>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-1.5 mt-3">
                <button className="flex flex-row w-36 h-12 rounded-md cursor-pointer p-3 text-base font-medium text-[#0a0628] border-[#0a0628] social-btn">
                  {" "}
                  <img src={Facebook} alt="" className="w-5 h-5 mt-1  mr-2" />
                  <span className="social-link">Facebook</span>
                </button>
                <button className="flex flex-row w-36 h-12 rounded-md cursor-pointer p-3 text-base font-medium text-[#0a0628] border-[#0a0628] social-btn">
                  {" "}
                  <img src={WhatsApp} alt="" className="w-5 h-5 mt-1  mr-2" />
                  <span className="social-link">WhatsApp</span>
                </button>
                <button className="flex flex-row w-36 h-12 rounded-md cursor-pointer p-3 text-base font-medium text-[#0a0628] border-[#0a0628] social-btn">
                  {" "}
                  <img src={Telegram} alt="" className="w-5 h-5 mt-1  mr-2" />
                  <span className="social-link">Telegram</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={Divider} alt="" className="divider" />
        {/* VIDEO SECTION */}
        <div className="flex -ml-6 flex-col gap-3">
          <img src={Video} alt="" className="video" />
          {/* TRANSCRIPT */}
          <div className="flex flex-col gap-1 ml-6 lg:ml-10 mt-3">
            <h3 className="text-[#000] text-2xl font-semibold">Transcript</h3>
            <select className=" w-32 h-10 rounded color-[#9d9d9d] border-[#cfcfcf] mt-2">
              <option>English</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 ml-6 lg:ml-10 mt-4">
            <div className="flex flex-row gap-3">
              <p className="text-[#141414] text-xl font-medium">0.01</p>
              <p className="text-base font-medium text-[#000000]">
                First step. Open Facebook on your desktop or mobile device and{" "}
                <br />
                locate "Marketplace" in the left-hand menu or at the top of the{" "}
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-[#141414] text-xl font-medium">0.15</p>
              <p className="text-base font-medium text-[#000000]">
                First step. Open Facebook on your desktop or mobile device and{" "}
                <br />
                locate "Marketplace" in the left-hand menu or at the top of the{" "}
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-[#141414] text-xl font-medium">0.30</p>
              <p className="text-base font-medium text-[#000000]">
                First step. Open Facebook on your desktop or mobile device and{" "}
                <br />
                locate "Marketplace" in the left-hand menu or at the top of the{" "}
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-[#cfcfcf] text-xl font-medium">0.30</p>
              <p className="text-base font-medium text-[#cfcfcf]">
                First step. Open Facebook on your desktop or mobile device and{" "}
                <br />
                locate "Marketplace" in the left-hand menu or at the top of the{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CREATE ACCOUNT SECTION */}
      <div className="flex flex-col gap-3 items-center justify-center bg-[#e7e7ed] h-80">
        <p className="text-center text-2xl font-semibold">
          To ensure the availability and privacy of your video, <br /> we
          recommend saving it to your account.
        </p>
        <button className="w-36 h-12 mt-4 py-4 px-8 rounded-lg bg-[#120b48] text-[#fff] text-base font-normal text-center cursor-pointer">
          Save Video
        </button>
        <p className="text-[#7e7e7e] text-2xl font-semibold cursor-pointer mt-4">
          Don't have an account?{" "}
          <a className="text-[#120b48] underline">Create account</a>
        </p>
      </div>
      {/* FOOTER */}
      <div className="bg-[#120B48] flex justify-center items-center">
        <div className="flex w-full px-[20px] sm:px-[50px] md:px-[100px] py-[65px] gap-[60px] lg:gap-[100px]">
          <div className="flex font-bold gap-[8px] py-5">
            <div className="flex flex-row">
              <img
                src={logo2}
                className="w-12 h-12 ml-5 lg:w-14 lg:h-14 lg:-mt-2"
              />
            </div>
            <p className="mt-3 ml-5 text-white font-bold lg:mt-2">HelpMeOut</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 w-full text-[14px] lg:text-[16px] gap-[40px] lg:gap-[100px] text-white">
            <div className="flex flex-col gap-[24px]">
              <p className="font-semibold">Menu</p>
              <p>Home</p>
              <p>Converter</p>
              <p>How it Works</p>
            </div>

            <div className="flex flex-col gap-[24px]">
              <p className="font-semibold">About us</p>
              <p>About</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>

            <div className="flex flex-col gap-[24px]">
              <p className="font-semibold">Screen Record</p>
              <p>Browsing Window</p>
              <p>Desktop</p>
              <p>Application</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Popup />
    </div>
    </main>
  );
};

export default ready;
