import React from 'react'

function Transaction() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-blue-950 w-full h-20 flex justify-end items-center gap-2 p-2">
            <button className=' bg-orange-400 h-6 text-center px-3 rounded-xl '>TESTNET</button>
            <button className=' bg-orange-400 h-6 text-center px-3 rounded-xl '>TESTNET</button>
        </div>

        <div className=" bg-[#eeeeec] w-full flex justify-center ">
            <div className="w-[70%] h-screen p-2 space-y-8 ">
                <div className='w-full flex justify-end'>
                    <input
                    className='w-1/2 rounded-xl outline-none border p-2'
                    type="search" 
                    placeholder='seach by Account / transitions'/>
                </div>

                <div className='w-full flex p-4 bg-white'>
                    <h1> tansaction <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></h1>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Transaction
