import React from "react";
import { FaSearch } from "react-icons/fa";

const operationsData = [
  { account: "GBCG", operation: "Pay 38 Pi to GCPF", time: "16 minutes ago" },
  { account: "GAWZ", operation: "Pay 10 Pi to GAMK", time: "16 minutes ago" },
  {
    account: "GACF",
    operation: " create_claimable_balance",
    time: "16 minutes ago",
  },
  {
    account: "GASC",
    operation: "Pay 0.0000005 Pi to GBBM",
    time: "16 minutes ago",
  },
  {
    account: "GDZT",
    operation: " claim_claimable_balance",
    time: "16 minutes ago",
  },
  { account: "GCXO", operation: "Pay 80 Pi to GCDQ", time: "16 minutes ago" },
  {
    account: "GA7L",
    operation: " claim_claimable_balance",
    time: "16 minutes ago",
  },
  {
    account: "GDXY",
    operation: " create_claimable_balance",
    time: "17 minutes ago",
  },
  {
    account: "GDXY",
    operation: " claim_claimable_balance",
    time: "17 minutes ago",
  },
  { account: "GCOF", operation: "Pay 36 Pi to GBU4", time: "17 minutes ago" },
  {
    account: "GCBI",
    operation: "Pay 2000 Pi to GBU7",
    time: "17 minutes ago",
  },
  { account: "GAQ3", operation: "Pay 14 Pi to GCGT", time: "17 minutes ago" },
  {
    account: "GAS6",
    operation: " claim_claimable_balance",
    time: "17 minutes ago",
  },
  { account: "GC7P", operation: "Pay 10 Pi to GD64", time: "17 minutes ago" },
  {
    account: "GBJV",
    operation: "claim_claimable_balance",
    time: "17 minutes ago",
  },
  { account: "GBXT", operation: "Pay 200 Pi to GCDQ", time: "17 minutes ago" },
  { account: "GCRW", operation: "Pay 780 Pi to GAWZ", time: "17 minutes ago" },
  {
    account: "GACF",
    operation: " claim_claimable_balance",
    time: "17 minutes ago",
  },
];

const Main = () => {
  return (
    <>
      <div>
        <div className="bg-blue-950 w-full h-16"></div>

        <div className=" bg-[#eeeeec]">
          <div className="w-[75%] bg-[#eeeeec] m-auto h-full">
            <div className="flex items-center justify-between pr-28">
              <span></span>
              <div className="bg-white h-10 rounded-3xl flex  p-3 w-[600px] mt-10">
                <input
                  type="text"
                  placeholder="Search by Account / Transaction /..."
                  className="w-full font-semibold"
                />
                <FaSearch className="text-gray-700" />
              </div>
            </div>
            <div className="flex gap-5 w-full">
              <div className="bg-white w-[616px] h-[970px] rounded-md mt-5">
                <div className="flex items-center justify-between p-3">
                  <h1 className="text-lg font-semibold">Latest Operations</h1>
                  <h1 className="text-red-700 text-lg">View All</h1>
                </div>
                <div className="flex w-full justify-between px-7 py-1 my-1">
                  <div className="flex gap-20">
                    <h1 className="text-gray-500 font-semibold text-md">
                      Accounts
                    </h1>
                    <h1 className="text-gray-500 font-semibold text-md">
                      Operation
                    </h1>
                  </div>
                  <h1 className="text-gray-500 font-semibold text-md pr-36">
                    Time
                  </h1>
                </div>
                <hr className="w-[90%] m-auto" />

                {operationsData.map((operation, index) => (
                  <div key={index}>
                    <div className="flex w-full justify-between px-7 py-1 my-1">
                      <div className="flex gap-20">
                        <div className="bg-[#a34ea7] font-semibold text-white rounded-full px-4 py-1">
                          {operation.account}
                        </div>
                        <h1 className="text-gray-500 font-semibold text-md">
                          {operation.operation}
                        </h1>
                      </div>
                      <h1 className="text-gray-500 font-semibold text-md pr-20 hover:text-[#fbb44a]">
                        {operation.time}
                      </h1>
                    </div>
                    <hr className="w-[90%] m-auto" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="bg-white w-[380px] h-[200px] rounded-md mt-5 ">
                  <div className="flex items-center justify-between p-3 ">
                    <h1 className="text-md font-semibold">MAINNET METRICS</h1>
                  </div>
                  <div className="mt-2">
                    <hr className="w-[90%] m-auto " />
                    <div className="flex w-[90%] justify-between my-3 m-auto">
                      <h1 className="text-gray-500 font-semibold text-[14px]">
                        Total Migrated Mining Rewards:
                      </h1>
                      <h1 className="text-gray-500 font-semibold text-sm">
                        4036138806.1613917
                      </h1>
                    </div>
                    <hr className="w-[90%] m-auto" />
                    <div className="flex w-[90%] justify-between my-3 m-auto">
                      <h1 className="text-gray-500 font-semibold text-[14px]">
                        Total Migrated Mining Rewards:
                      </h1>
                      <h1 className="text-gray-500 font-semibold text-sm">
                        4036138806.1613917
                      </h1>
                    </div>
                    <hr className="w-[90%] m-auto" />
                  </div>
                </div>
                <div className="bg-white w-[380px] h-[400px] rounded-md mt-5">
                  <div className="flex items-center justify-between p-3">
                    <h1 className="text-lg font-semibold">Latest Operations</h1>
                    <h1 className="text-red-700 text-lg">View All</h1>
                  </div>
                  <div className="flex w-full justify-between px-7 py-1 my-1">
                    <div className="flex gap-20">
                      <h1 className="text-gray-500 font-semibold text-md">
                        Accounts
                      </h1>
                      <h1 className="text-gray-500 font-semibold text-md">
                        Operation
                      </h1>
                    </div>
                    <h1 className="text-gray-500 font-semibold text-md pr-36">
                      Time
                    </h1>
                  </div>
                  <hr className="w-[90%] m-auto" />

                  {operationsData.map((operation, index) => (
                    <div key={index}>
                      <div className="flex w-full justify-between px-7 py-1 my-1">
                        <div className="flex gap-20">
                          <div className="bg-[#a34ea7] font-semibold text-white rounded-full px-4 py-1">
                            {operation.account}
                          </div>
                          <h1 className="text-gray-500 font-semibold text-md">
                            {operation.operation}
                          </h1>
                        </div>
                        <h1 className="text-gray-500 font-semibold text-md pr-20 hover:text-[#fbb44a]">
                          {operation.time}
                        </h1>
                      </div>
                      <hr className="w-[90%] m-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
