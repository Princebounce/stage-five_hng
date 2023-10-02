import React from "react";
import logo1 from "../../assets/icons/iCON 7 1.svg";
import logo2 from "../../assets/icons/iCON 7 2.svg";

const Footer = () => {
  return (
    <div className="bg-[#120B48] flex justify-center items-center">
      <div className="flex w-full px-[20px] sm:px-[50px] md:px-[100px] py-[65px] gap-[60px] lg:gap-[100px]">
        <div className="flex font-bold gap-[8px] py-5">
          {/* <div>
            <img src={logo2} />
          </div> */}
          <p className="text-white font-bold mt-2">HelpMeOut</p>
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
  );
};

export default Footer;
