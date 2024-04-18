import React from "react"
import { Button } from "primereact/button"
import { useHistory } from "react-router-dom"
function Header(props) {
  const history = useHistory()

  return (
    <div className="h-14 ml-[0px]  flex flex-wrap justify-between bg-blue-950 ">
      <div className="md:hidden">
        <button
          onClick={() => {
            props.handleSidebarToggle()
          }}
          className=" text-white h-full pi pi-bars  px-5"
        />
      </div>
      <div id="blank" className="hidden md:block "></div>
      <div className="flex items-center"></div>
      <div className="flex items-center ">
        <div className="flex flex-col mr-2  pr-4"></div>
      </div>
    </div>
  )
}
export default Header
