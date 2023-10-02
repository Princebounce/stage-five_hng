import React from "react";
import logo1 from "../../assets/icons/iCON 7 1.svg";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between px-[40px] lg:px-[70px] shadow font-semibold items-center">
      <div className="flex items-center font-bold gap-[8px] py-5">
        <img src={logo1} />
        <p className="text-[#100A42]">HelpMeOut</p>
      </div>

      <div className="gap-[35px] hidden sm:flex">
        <NavLink className="cursor-pointer">Features</NavLink>
        <NavLink className="cursor-pointer">How it Works</NavLink>
      </div>

      <div onClick={()=>navigate('/login')} className="text-[18px] cursor-pointer">
        <NavLink to="/home-page" >Get Started</NavLink>
      </div>
    </div>
  );
};

export default Header;
