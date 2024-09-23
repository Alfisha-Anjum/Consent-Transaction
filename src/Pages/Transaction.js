import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { HiClipboardCopy } from "react-icons/hi";

function Transaction() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-blue-950 w-full h-20 flex  justify-end items-center gap-2 px-32">
          <button className="text-white text-sm border h-6 text-center px-3 rounded-xl ">
            TESTNET
          </button>
          <button className="text-white text-sm bg-orange-400 h-6 text-center px-3 rounded-xl ">
            MAINNET
          </button>
        </div>

        <div className=" bg-[#eeeeec] w-full flex justify-center ">
          <div className="w-[80%] h-screen py-8 space-y-8 ">
            <div className="flex  items-center  justify-end  gap-2 pt-3">
              <div className="bg-white  rounded-full flex  px-4 py-1  w-[47%]">
                <input
                  type="text"
                  placeholder="Search by Account / Transaction /..."
                  className="w-full font-semibold outline-none text-[12px]"
                />
                <FaSearch className="text-gray-700 mt-[2px] text-sm" />
              </div>
              <FaInfoCircle />
            </div>

            <div className="w-full px-3 py-4  bg-white">
              <div className="mb-5 text-sm flex items-center space-x-1">
                <span className="font-bold text-lg "> TRANSACTION </span>
                <span className="text-sm font-medium text-gray-400 leading-5 tracking-[1px]">
                  DJKSDJKJJKJJHJHHKKLKJLJJMNMNBHJFTYEWASZXCBCBNMNKH
                </span>

                <HiClipboardCopy />
              </div>
              <div className="w-full py-2 flex border-t text-sm ">
                <div className="w-1/2 ">Time </div>
                <div className="w-1/2 ">19/212024 11:32 Am</div>
              </div>
              <div className="w-full py-2 flex border-t ">
                <div className="w-1/2 text-sm ">Free </div>
                <div className="w-1/2 text-sm ">0.01 pi</div>
              </div>
              <div className="w-full py-2 flex border-t ">
                <div className="w-1/2 text-sm ">Block </div>
                <div className="w-1/2 text-sm text-blue-700">16824496</div>
              </div>
              <div className="w-full py-2 flex border-t  ">
                <div className="w-1/2 text-sm">Memo (none)</div>
                <div className="w-1/2 text-sm">f</div>
              </div>
            </div>

            <div className="">
              <div className="text-2xl ">Opeations(1)</div>
              <div className="flex w-full justify-around mb-1 text-gray-400">
                <p className="text-sm">Operation</p>
                <p className="text-sm">Time</p>
              </div>
              <div className="h-8 px-1 py-3 w-full bg-white flex  items-center">
                <button className="bg-violet-600  rounded-xl px-2 py-0.5 text-xs text-white">
                  GA3C
                </button>
                <div className="flex justify-around w-full">
                  <span className="text-sm">Pay 200 pi to GCCI</span>
                  <span className="text-xs text-blue-600">5 Seconds Ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
