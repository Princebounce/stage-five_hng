import React from "react";
import stop from "../../assets/icons/stop.svg";
import video from "../../assets/icons/video-camera.svg";
import mic from "../../assets/icons/microphone.svg";
import pause from "../../assets/icons/Frame 1000002571.svg";
import trash from "../../assets/icons/trash.svg";
import arrow_down from "../../assets/icons/arrow-up.svg";

const RecorderMenu = ({onClose}) => {
  const ToggleMenu = [
    { name: "Pause", img: pause, switch: false },
    { name: "Stop", img: stop, switch: false },
    { name: "Camera", img: video, switch: true },
    { name: "mic", img: mic, switch: true },
  ];

  return (
    <div className="h-[100vh] absolute bottom-7 mx-4">
      <div className="h-[92px] w-[551px] absolute bottom-1 border-[6px] border-[#626262]  bg-[#141414] p-[14px] flex justify-center items-center rounded-[200px]">
        <div className="flex justify-center items-center gap-4">
          <div className=" text-white font-semibold flex items-center gap-[12px]">
            <p>{"00:03:45"}</p>
            <div className="w-[10px] h-[10px] rounded-[20px] bg-[#C00404]"></div>
          </div>
          <div className="border-l flex gap-[24px]">
            {ToggleMenu.map((items) => (
              <div className="flex pl-4 gap-[24px]">
                <div className="flex flex-col relative">
                  <div className="h-[44px] w-[44px]  rounded-[40px] bg-white flex justify-center items-center cursor-pointer">
                    <img src={items.img} />
                  </div>
                  {items.switch === true ?
                  <div className="absolute flex justify-center items-center text-[12px] bottom-4 right-1 bg-white text-black h-[12px] w-[12px] ">
                    <img src={arrow_down} />
                  </div> : ''
                  }
                  <p className="text-white text-[12px] flex justify-center">
                    {items.name}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex flex-col">
              <div onClick={onClose} className="h-[44px] w-[44px] rounded-[40px] bg-[#4B4B4B] flex justify-center items-center cursor-pointer">
                <img src={trash} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//top-7 absolute w-full
export default RecorderMenu;
