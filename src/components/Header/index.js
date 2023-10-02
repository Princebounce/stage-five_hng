import React from "react";
import logo1 from "../../assets/icons/iCON 7 1.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between px-[40px] lg:px-[70px] shadow font-semibold items-center">
      <div className="flex items-center font-bold gap-[8px] py-5">
        <img src={logo1} />
        <p className="text-[#100A42]">HelpMeOut</p>
      </div>

      <div className="gap-[35px] hidden sm:flex">
        <p className="cursor-pointer">Features</p>
        <p className="cursor-pointer">How it Works</p>
      </div>

      <div onClick={()=>navigate('/login')} className="text-[18px] cursor-pointer">
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default Header;
