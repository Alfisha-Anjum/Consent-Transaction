import React from "react";
import { CiSearch } from "react-icons/ci";

function Transaction() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-blue-950 w-full h-20 flex justify-end items-center gap-2 p-2">
          <button className=" bg-orange-400 h-6 text-center px-3 rounded-xl ">
            TESTNET
          </button>
          <button className=" bg-orange-400 h-6 text-center px-3 rounded-xl ">
            TESTNET
          </button>
        </div>

        <div className=" bg-[#eeeeec] w-full flex justify-center ">
          <div className="w-[70%] h-screen p-2 space-y-8 ">
            <div className="w-full flex justify-end">
              <input
                className="w-1/2 rounded-3xl text-sm outline-none border p-1"
                type="search"
                placeholder="seach by Account / transitions"
              />
              <CiSearch />
            </div>

            <div className="w-full space-y-3 p-4 bg-white">
              <div className="">
                <span className="font-bold text-xl"> tansaction</span>{" "}
                <span className="text-sm">1234567890ahjdffgkbjskdcvdknln</span>
              </div>
              <div className="w-full  flex border-t ">
                <div className="w-1/2 p-1">Time </div>
                <div className="w-1/2 p-1">19/212024 11:32Am</div>
              </div>
              <div className="w-full  flex border-t ">
                <div className="w-1/2 p-1">Free </div>
                <div className="w-1/2 p-1">0.01 pi</div>
              </div>
              <div className="w-full  flex border-t ">
                <div className="w-1/2 p-1">Block </div>
                <div className="w-1/2 p-1">16824496</div>
              </div>
              <div className="w-full  flex border-t  ">
                <div className="w-1/2 p-1">Memo(none)</div>
                <div className="w-1/2 p-1">f</div>
              </div>
            </div>

            <div className="">
              <div className="text-2xl">Opeations(1)</div>
              <div className="flex w-full justify-around ">
                <p>Operation</p>
                <p>Time</p>
                </div>
              <div className="h-8 p-2 py-1 w-full bg-white flex  items-center">

                <button className="bg-violet-600 h-7 rounded-xl px-2 ">GA3c</button>
                <div className="flex justify-around w-full">
                  <span className="">Pay 200 pi to GCCI</span>
                  <span className="">5 Secound Ago</span>
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
