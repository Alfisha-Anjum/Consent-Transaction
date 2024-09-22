import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

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
  {
    id: 1,
    "#": "c997734...",
    block: "c997734",
    ops: 1,
    time: "35 seconds ago",
  },
  {
    id: 2,
    "#": "7dad8a7...",
    block: "7dad8a7",
    ops: 1,
    time: "35 seconds ago",
  },
  {
    id: 3,
    "#": "337f96f...",
    block: "337f96f",
    ops: 1,
    time: "45 seconds ago",
  },
  {
    id: 4,
    "#": "c9cd930...",
    block: "c9cd930",
    ops: 1,
    time: "55 seconds ago",
  },
  { id: 5, "#": "83b68b1...", block: "83b68b1", ops: 1, time: "1 minute ago" },
  { id: 6, "#": "089e5e8...", block: "089e5e8", ops: 1, time: "1 minute ago" },
  { id: 7, "#": "4cb6d10...", block: "4cb6d10", ops: 1, time: "1 minute ago" },
  { id: 8, "#": "27238d0...", block: "27238d0", ops: 1, time: "1 minute ago" },
  { id: 9, "#": "dfd046b...", block: "dfd046b", ops: 1, time: "1 minute ago" },
  { id: 10, "#": "2c1b73b...", block: "2c1b73b", ops: 1, time: "1 minute ago" },
  {
    id: 11,
    "#": "16832137...",
    block: "16832137",
    ops: "0",
    time: "1 minute ago",
  },
  {
    id: 12,
    "#": "16832136...",
    block: "16832136",
    ops: 1,
    time: "1 minute ago",
  },
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
        <div className="bg-blue-950 w-full h-20"></div>

        <div className=" bg-[#eeeeec]">
          <div className="w-[80%] bg-[#eeeeec] h-[1200px] m-auto">
            <div className="flex  items-center justify-end pr-28 gap-2 pt-3">
              <div className="bg-white  rounded-full flex  px-4 py-[3px]  w-[65%]">
                <input
                  type="text"
                  placeholder="Search by Account / Transaction /..."
                  className="w-full font-semibold outline-none text-[12px]"
                />
                <FaSearch className="text-gray-700 mt-[2px] text-sm" />
              </div>
              <FaInfoCircle className="text-lg" />
            </div>
            <div className="flex gap-5 w-full">
              <div className="bg-white w-[58%] h-[700px] rounded-md mt-5">
                <div className="flex items-center justify-between px-5 py-3">
                  <h1 className="text-md font-semibold">Latest Operations</h1>
                  <h1 className="text-red-400 font-semibold text-md">
                    View All
                  </h1>
                </div>
                <div className="flex w-full justify-between px-7 py-1 my-1">
                  <div className="flex gap-20">
                    <h1 className="text-gray-400 font-semibold text-sm">
                      Accounts
                    </h1>
                    <h1 className="text-gray-400 font-semibold text-sm">
                      Operation
                    </h1>
                  </div>
                  <h1 className="text-gray-400 font-semibold text-sm pr-36">
                    Time
                  </h1>
                </div>
                <hr className="w-[90%] m-auto" />

                {operationsData.map((operation, index) => (
                  <div key={index}>
                    <div className="flex w-full justify-between px-7 py-1 ">
                      <div className="flex gap-20">
                        <div className="bg-[#a34ea7]  text-white rounded-full px-2">
                          {operation.account}
                        </div>
                        <h1 className="text-gray-500  text-[13px] ">
                          {operation.operation}
                        </h1>
                      </div>
                      <h1 className="text-blue-700  text-sm pr-20 hover:text-[#fbb44a]">
                        {operation.time}
                      </h1>
                    </div>
                    <hr className="w-[90%] m-auto" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="bg-white w-full h-[170px] rounded-md mt-5">
                  <div className="flex items-center justify-between px-5 py-3">
                    <h1 className="text-md font-semibold">MAINNET METRICS</h1>
                  </div>
                  <div className="mt-2">
                    <hr className="w-[90%] m-auto" />
                    <div className="flex w-[90%] justify-between my-3 m-auto">
                      <h1 className="text-gray-800  text-[14px]">
                        Total Migrated Mining Rewards:
                      </h1>
                      <h1 className="text-gray-800  text-sm">
                        4036138806.1613917
                      </h1>
                    </div>
                    <hr className="w-[90%] m-auto" />
                    <div className="flex w-[90%] justify-between my-3 m-auto">
                      <h1 className="text-gray-800  text-[14px]">
                        Total Migrated Mining Rewards:
                      </h1>
                      <h1 className="text-gray-800  text-sm">
                        4036138806.1613917
                      </h1>
                    </div>
                    <hr className="w-[90%] m-auto" />
                  </div>
                </div>
                <div className="bg-white w-[380px] h-[450px] rounded-md mt-5 m-auto">
                  <div className="w[-[90%] flex items-center justify-between px-5 py-3">
                    <h1 className="text-md font-semibold">
                      Latest Transactions
                    </h1>
                    <h1 className="text-red-400 font-semibold text-md">
                      View All
                    </h1>
                  </div>

                  <div className="flex gap-4 py-1">
                    <h1 className="text-gray-500 font-semibold text-sm w-[100px] pl-4">
                      #
                    </h1>
                    <h1 className="text-gray-500 font-semibold text-sm w-[100px]">
                      Block
                    </h1>
                    <h1 className="text-gray-500 font-semibold text-sm w-[50px]">
                      Ops
                    </h1>
                    <h1 className="text-gray-500 font-semibold text-sm w-[120px]">
                      Time
                    </h1>
                  </div>

                  <hr className="w-[90%] m-auto" />

                  {transactionsData.map((transaction, index) => (
                    <div key={index} className="w-[100%] m-auto">
                      <div className="flex  pl-4 py-1">
                        <h1 className="text-blue-700 text-sm w-[100px]">
                          {transaction["#"]}
                        </h1>
                        <h1 className="text-blue-700 text-sm w-[100px]">
                          {transaction.block}
                        </h1>
                        <h1 className="text-blue-700 text-sm w-[50px]">
                          {transaction.ops}
                        </h1>
                        <h1 className="text-blue-700 text-sm w-[120px] hover:text-[#fbb44a]">
                          {transaction.time}
                        </h1>
                      </div>
                      <hr className="w-[90%] m-auto" />
                    </div>
                  ))}
                </div>

                <div className=" w-full">
                  <div className="bg-white w-[380px] h-[430px] rounded-md mt-5">
                    <div className="flex items-center justify-between px-5 py-3">
                      <h1 className="text-md font-semibold">Latest Blocks</h1>
                      <h1 className="text-red-400 font-semibold text-md">
                        View All
                      </h1>
                    </div>
                    <div className="grid grid-cols-3">
                      <h1 className="text-gray-500 font-semibold text-md pl-4">
                        #
                      </h1>
                      <h1 className="text-gray-500 font-semibold text-md">
                        Transactions
                      </h1>

                      <h1 className="text-gray-500 font-semibold text-md pr-36">
                        Time
                      </h1>
                    </div>
                    <hr className="w-[90%] m-auto" />

                    {blocksData.map((block, index) => (
                      <div key={index}>
                        <div className="grid grid-cols-3 mt-3">
                          <h1 className="text-blue-700  text-sm pl-4">
                            {block.id}
                          </h1>
                          <h1 className="text-gray-500  text-sm">
                            {block.transactions}
                          </h1>

                          <h1 className="text-gray-500  text-sm hover:text-[#fbb44a]">
                            {block.time}
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
      </div>
    </>
  );
};

export default Main;
