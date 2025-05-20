import React from "react";

const EarthTimeLine = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col-reverse md:flex-col items-center p-5 space-y-10 justify-end md:justify-start">
      <div className="mx-auto md:mx-30 text-center text-xl md:text-2xl ">
        <h2 className=" text-gray-900 text-sm md:text-2xl mt-10">
          <span className="text-climax-green font-bold text-3xl">
            EarthTimeLine
          </span>
          <br className="md:hidden" />
          <span className="hidden md:inline">:</span> An interactive feature
          that showcases the changes in Earth's environment over the years.
          <span className="text-climax-green font-bold">
            {" "}
            protect the Earth.
          </span>
        </h2>
      </div>
      <iframe
        width="80%"
        height="600"
        src="https://www.youtube.com/embed/6Ojagf3S0Qo?si=nE1Vir68ZAT7aPfX"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
        className="rounded-lg shadow-lg w-100 h-60 md:w-[80%] md:h-120"
      ></iframe>
    </div>
  );
};

export default EarthTimeLine;
