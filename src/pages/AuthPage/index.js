import React from "react";
import logo1 from "../../assets/icons/iCON 7 1.svg";
import fb from "../../assets/icons/Facebook svg.svg";
import google from "../../assets/icons/Google svg.svg";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const navigate = useNavigate()
  return (
    <div className="pb-[50px]">
      <div className="flex items-center pb-[35px] pt-[40px] px-[40px] sm:px-[110px] font-bold gap-[8px] py-5">
        <img src={logo1} />
        <p className="text-[#100A42]">HelpMeOut</p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[80%] sm:w-[60%] lg:w-[40%] flex flex-col gap-[32px]">
          <div className="flex flex-col items-center">
            <p className="font-bold text-[#141414] text-[32px]">
              Log in or Sign up
            </p>
            <p className="text-[14px] font-thin text-[#434343] text-center w-[60%]">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>

          <div className="flex flex-col gap-[24px] font-semibold">
            <button className="flex gap-[8px] h-[48px] w-full justify-center items-center border border-[#141414] rounded-[12px]">
              <img src={google} />
              Continue with Google
            </button>
            <button className="flex gap-2 justify-center items-center h-[48px] w-full border border-[#141414] rounded-[12px]">
              <img className="pl-4" src={fb} />
              Continue with Facebook
            </button>
          </div>

          <div className="flex items-center gap-[12px] px-4">
            <hr className="w-full" />
            <p>or</p>
            <hr className="w-full" />
          </div>

          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[16px] font-semibold">
              <div className="flex flex-col gap-[8px]">
                <p>Email</p>
                <input
                  className="border w-full h-[51px] p-[16px] rounded-[12px] border-[#B6B3C6]"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <p>Password</p>
                <input
                  className="border w-full h-[51px] p-[16px] rounded-[12px] border-[#B6B3C6]"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
     

          <button onClick={()=>navigate('/home')} className="bg-[#120B48] rounded-[8px] h-[53px] w-full text-white text-[18px] font-semibold">
            Sign up
          </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
