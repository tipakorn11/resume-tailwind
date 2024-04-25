import React from "react"
import { Divider } from "primereact"

const Content = () => {
  return (
    <div>
      <div className="flex justify-center bg-gradient-to-r from-indigo-800 to-indigo-950">
        <div className="flex text-slate-200 min-h-[45vh] items-center">
          <div className="grid grid-cols-2 md:px-[20rem]  ">
            <div className="flex flex-col text-wrap  border-r-2 border-white mb-5">
              <label className="text-2xl font-serif pr-4">ABOUT</label>
              <label className="text-xs pr-4">
                working around ERP DBMS Student Bigdata and co-worker with Provincial Administrative Organization of nakhon ratchasima
              </label>
            </div>
            <div className="flex flex-col pl-4 text-wrap">
              <label className="  text-lg font-serif">Work experience</label>
              <li className="  text-sm font-serif">4th month intern fullstack at Revelsoft</li>
              <li className="  text-sm font-serif">1 year fullstack at thai akitech </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
