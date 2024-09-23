import React from "react";
import { FaSearch, FaInfoCircle, FaCopy } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#89368f] to-[#3f4585] w-full h-20"></div>
      <div className=" bg-[#eeeeec]">
        <div className="w-[60%] bg-[#eeeeec] h-[1200px] m-auto">
          <div className="flex pr-28 gap-2 pt-3 items-center">
            <div className="bg-white rounded-full flex px-4 py-[3px] w-[65%]">
              <input
                type="text"
                placeholder="Search by Account / Transaction /..."
                className="w-full font-semibold outline-none text-[12px]"
              />
              <FaSearch className="text-gray-700 mt-[2px] text-sm" />
            </div>
            <FaInfoCircle className="text-lg" />
          </div>

          <div className="bg-white w-full">
            <div className=" flex justify-between font-semibold m-auto mt-4 px-4 py-4">
              <h1 className="">Account</h1>
              <div className="bg-[#d3d3d3] text-[12px] text-white rounded-full text-center p-[2px] px-3">
                JSON
              </div>
            </div>
            <div className="flex gap-28 px-4 ">
              <h1 className="text-[12px]">Public Key:</h1>
              <div className="flex items-center">
                <h1 className="text-[12px]">
                  GCYOG4UEEYGOCTUL6ZHWMUDOY4UK53BFNKPX2ZJTV72IMXYZHDGJJZZI
                </h1>
                <FaCopy className="text-gray-700 ml-2 cursor-pointer" />
              </div>
            </div>
            <h1 className="pl-4 text-[12px]">Home Domain:</h1>
            <div className="flex gap-20 pb-2">
              <h1 className="pl-4 text-[12px]">Subentry Count:</h1>
              <p className="text-[12px]">0</p>
            </div>
          </div>

          <div className="bg-white w mt-1-full h-36 mt-3"></div>
          <div className="border-t-[1px] w-full  mt-4 border-black"></div>
          <div className="flex gap-2 justify-end  mt-1">
            <img src="/gh.png" className="w-[18px] h-[18px] mt-[1px]" />
            <h1 className="text-right text-[12px] mr-10 text-blue-700 hover:text-[#fbb44a]">
              Source Code
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
