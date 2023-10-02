import React from "react";
import vector2 from "../../assets/images/grid.136a9256d16888900db0.svg.png";
import image3 from "../../assets/images/woman-using-smartphone-technology 2.png";
import grid1 from "../../assets/images/AdobeStock_362497671 1.png";
import grid2 from "../../assets/images/AdobeStock_400053098 1.png";
import vector1 from "../../assets/images/grid.136a9256d16888900db0.svg (1).png";
import rightArrow from '../../assets/icons/arrow-right.svg'

const Banner = () => {
  return (
    <div className="relative z-[999]">
      <div className="flex flex-col md:flex-row pt-10 md:pt-0 w-full gap-16 md:gap-0 h-[95vh] items-center px-[30px] lg:px-[50px]">
        <div className="w-[95%] md:w-[45%] flex justify-center ">
          <div className="w-full flex flex-col gap-[26px] lg:gap-[48px] ">
            <div className="flex flex-col gap-[10px] lg:gap-[20px] w-[95%] lg:w-[90%] xl:w-[80%]">
              <p className="text-[46px] xl:text-[64px] font-bold text-[#141414] leading-[60px]">
                Show Them <br /> Don't Just Tell
              </p>
              <p className="text-[18px] lg:text-[20px]">
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
            </div>
            <button className="bg-[#120B48] flex gap-2 items-center justify-center text-white w-[180px] lg:w-[210px] xl:w-[236px] h-[50px] lg:h-[65px] rounded-[8px]">
              Install HelpMeOut
<img src={rightArrow}/>
            </button>
          </div>
        </div>

        <div className="w-[95%] sm:w-[70%] md:w-[55%] flex relative top-5 gap-3 lg:gap-1">
          <div className="flex flex-col gap-[14px]">
            <div className="w-[80%]">
              <img className="rounded-[8px]" src={grid1} />
            </div>
            <div className="relative w-[80%]">
              <img className="" src={vector1} />
              <img className="rounded-[8px] absolute top-3" src={grid2} />
            </div>
          </div>

          <div className="relative bottom-[50px]">
            <img src={vector2} />
            <img
              className="absolute top-[45px] rounded-[8px] right-[35px] lg:right-[48px]"
              src={image3}
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F4F6F8] h-[55px] opacity-0 md:opacity-100" />
    </div>
  );
};

export default Banner;
