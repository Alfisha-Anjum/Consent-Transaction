import React from "react";
import { FaSearch } from "react-icons/fa";

const operationsData = [
  { account: "GBCG", operation: "Pay 38 Pi to GCPF", time: "16 minutes ago" },
  { account: "GAWZ", operation: "Pay 10 Pi to GAMK", time: "16 minutes ago" },
  {
    account: "GACF",
    operation: "create_claimable_balance",
    time: "16 minutes ago",
  },
  {
    account: "GASC",
    operation: "Pay 0.0000005 Pi to GBBM",
    time: "16 minutes ago",
  },
  {
    account: "GDZT",
    operation: "claim_claimable_balance",
    time: "16 minutes ago",
  },
  { account: "GCXO", operation: "Pay 80 Pi to GCDQ", time: "16 minutes ago" },
  {
    account: "GA7L",
    operation: "claim_claimable_balance",
    time: "16 minutes ago",
  },
  {
    account: "GDXY",
    operation: "create_claimable_balance",
    time: "17 minutes ago",
  },
  {
    account: "GDXY",
    operation: "claim_claimable_balance",
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
    operation: "claim_claimable_balance",
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
    operation: "claim_claimable_balance",
    time: "17 minutes ago",
  },
];

const transactionsData = [
  { id: 1, block: "0102a72...", ops: 1, time: "6 minutes ago" },
  { id: 2, block: "5e34676...", ops: 1, time: "6 minutes ago" },
  { id: 3, block: "6bf173f...", ops: 1, time: "5 minutes ago" },
  { id: 4, block: "80bc3a9...", ops: 1, time: "5 minutes ago" },
  { id: 5, block: "93e9f75...", ops: 1, time: "5 minutes ago" },
  { id: 6, block: "54e6a1a...", ops: 1, time: "5 minutes ago" },
  { id: 7, block: "7e90a7a...", ops: 1, time: "5 minutes ago" },
  { id: 8, block: "cf5d8ff...", ops: 1, time: "5 minutes ago" },
  { id: 9, block: "a43a4cb...", ops: 1, time: "5 minutes ago" },
  { id: 10, block: "26f0ce7...", ops: 1, time: "6 minutes ago" },
];

const blocksData = [
  { id: 16827228, transactions: "0 / 0", time: "30 minutes ago" },
  { id: 16827227, transactions: "0 / 0", time: "31 minutes ago" },
  { id: 16827226, transactions: "3 / 0", time: "31 minutes ago" },
  { id: 16827225, transactions: "1 / 0", time: "31 minutes ago" },
  { id: 16827224, transactions: "3 / 0", time: "31 minutes ago" },
  { id: 16827223, transactions: "1 / 0", time: "31 minutes ago" },
  { id: 16827222, transactions: "0 / 0", time: "31 minutes ago" },
  { id: 16827221, transactions: "2 / 0", time: "31 minutes ago" },
  { id: 16827220, transactions: "2 / 0", time: "32 minutes ago" },
  { id: 16827219, transactions: "2 / 0", time: "32 minutes ago" },
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
              <div className="bg-white h-10 rounded-3xl flex p-3 w-[600px] mt-10">
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
                <div className="bg-white w-[380px] h-[200px] rounded-md mt-5">
                  <div className="flex items-center justify-between p-3">
                    <h1 className="text-md font-semibold">MAINNET METRICS</h1>
                  </div>
                  <div className="mt-2">
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
                <div className="bg-white w-[380px] h-[450px] rounded-md mt-5 m-auto">
                  <div className="w[-[90%] flex items-center justify-between p-3">
                    <h1 className="text-lg font-semibold">
                      Latest Transactions
                    </h1>
                    <h1 className="text-red-700 text-lg">View All</h1>
                  </div>
                  <div className="grid grid-cols-4">
                    <h1 className="text-gray-500 font-semibold text-md pl-4">
                      #
                    </h1>

                    <h1 className="text-gray-500 font-semibold text-md">
                      Block
                    </h1>

                    <h1 className="text-gray-500 font-semibold text-md">Ops</h1>
                    <h1 className="text-gray-500 font-semibold text-md ">
                      Time
                    </h1>
                  </div>

                  <hr className="w-[90%] m-auto" />

                  {transactionsData.map((transaction, index) => (
                    <div key={index} className="w-[90%] m-auto">
                      <div className="grid grid-cols-4 mt-3">
                        <h1 className="text-gray-500 font-semibold text-[12px] pb-1">
                          {transaction.id}
                        </h1>
                        <h1 className="text-gray-500 font-semibold text-[12px]">
                          {transaction.block}
                        </h1>

                        <h1 className="text-gray-500 font-semibold text-[12px]  hover:text-[#fbb44a]">
                          {transaction.ops}
                        </h1>
                        <h1 className="text-gray-500 font-semibold text-[12px] hover:text-[#fbb44a]">
                          {transaction.time}
                        </h1>
                      </div>
                      <hr className="w-[90%] m-auto" />
                    </div>
                  ))}
                </div>
{/* 
                <div className=" w-full flex">
                  <div className="bg-white w-[90%] h-[970px] rounded-md mt-5">
                    <div className="flex items-center justify-between p-3">
                      <h1 className="text-lg font-semibold">Latest Blocks</h1>
                      <h1 className="text-red-700 text-lg">View All</h1>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="flex gap-20">
                        <h1 className="text-gray-500 font-semibold text-md">
                          #
                        </h1>
                        <h1 className="text-gray-500 font-semibold text-md">
                          Transactions
                        </h1>
                      </div>
                      <h1 className="text-gray-500 font-semibold text-md pr-36">
                        Time
                      </h1>
                    </div>
                    <hr className="w-[90%] m-auto" />

                    {blocksData.map((block, index) => (
                      <div key={index}>
                        <div className="grid grid-cols-3">
                          <div className="flex gap-20">
                            <h1 className="text-gray-500 font-semibold text-md">
                              {block.id}
                            </h1>
                            <h1 className="text-gray-500 font-semibold text-md">
                              {block.transactions}
                            </h1>
                          </div>
                          <h1 className="text-gray-500 font-semibold text-md pr-20 hover:text-[#fbb44a]">
                            {block.time}
                          </h1>
                        </div>
                        <hr className="w-[90%] m-auto" />
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
