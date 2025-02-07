import React from "react";
const geistspace = () => {
  return (
    <div className="mt-28 bg-[#111111] rounded-xl flex justify-between p-14 items-center flex-wrap ">
      <div className="space-y-6">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl  font-bold tracking-tight">
          Unleash New Possibilities
        </h1>

        <p className="text-gray-400 text-lg md:text-xl">
          Deploy your app on Vercel and unlock its full potential
        </p>
      </div>
      <div className="pt-4">
        <a
          href="#"
          className="inline-block bg-gray-950 shadow-2xl text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 hover:border transition-all duration-200 hover:shadow-lg"
        >
          Try Vercel Free
        </a>
      </div>
    </div>
  );
};

export default geistspace;
