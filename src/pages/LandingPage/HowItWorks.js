import React from "react";
import card from "../../assets/images/rec-1.cb7888a47e24214aeb105805426a8300.svg.png";

const HowItWorks = () => {
  const myArray = [
    {
      num: 1,
      title: "Record Screen",
      content:
        'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
    },
    {
      num: 2,
      title: "Share Your Recording",
      content:
        "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    },
    {
      num: 3,
      title: "Learn Effortlessly",
      content:
        "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
    },
  ];

  return (
    <div>
      <div className="mt-[103px] mb-[113px] relative z-[999]">

      <div className="flex flex-col items-center mb-[56px]">
          <p className="text-[#141414] font-bold text-[36px] lg:text-[40px]">
            How it works
          </p>
        </div>

        <div className="px-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-[60px]">
            {myArray.map((items) => (
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[10px] lg:gap-[16px] max-w-[360px] items-center">
                  <div className="h-[50px] lg:h-[67px] w-[50px] lg:w-[67px] rounded-[70px] flex justify-center items-center font-bold text-white bg-[#120B48]">
                    {items.num}
                  </div>
                  <div>
                    <p className="text-[20px] lg:text-[24px] font-semibold lg:font-bold text-center">{items.title}</p>
                  </div>

                  <div>
                    <p className="text-center text-[14px] lg:text-[16px]">{items.content}</p>
                  </div>
                </div>

                <div className="hidden lg:flex">
                  <img src={card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F4F6F8] h-[55px]" />
    </div>
  );
};

export default HowItWorks;
