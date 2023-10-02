import React from "react";
import logo1 from "../../assets/icons/iCON 7 1.svg";
import logo2 from "../../assets/icons/iCON 7 2.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#120B48] flex justify-center items-center">
      <div className="flex w-full px-[20px] sm:px-[50px] md:px-[100px] py-[65px] gap-[60px] lg:gap-[100px]">
        <div className="flex font-bold gap-[8px] py-5">
          
            <img src={logo2} />
          
          <p className="text-white font-bold mt-2">HelpMeOut</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 w-full text-[14px] lg:text-[16px] gap-[40px] lg:gap-[100px] text-white">
          <div className="flex flex-col gap-[24px]">
            <NavLink className="font-semibold">Menu</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink>Converter</NavLink>
            <NavLink>How it Works</NavLink>
          </div>

          <div className="flex flex-col gap-[24px]">
            <NavLink className="font-semibold">About us</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink>Privacy Policy</NavLink>
          </div>

          <div className="flex flex-col gap-[24px]">
            <NavLink className="font-semibold">Screen Record</NavLink>
            <NavLink>Browsing Window</NavLink>
            <NavLink>Desktop</NavLink>
            <NavLink>Application</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
