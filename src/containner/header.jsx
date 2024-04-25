import React from "react"
import { Button } from "primereact/button"
import { useHistory } from "react-router-dom"
function Header(props) {
  const history = useHistory()

  return (
    <div className="h-14 ml-[0px]  flex justify-between md:justify-center align-middle bg-slate-950 ">
      <div className="md:hidden">
        <button
          onClick={() => {
            props.handleSidebarToggle()
          }}
          className=" text-white h-full pi pi-bars  px-5"
        />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => {
            props.handleSidebarToggle()
          }}
          className=" text-white h-full pi pi-bars  px-5"
        />
      </div>
      <div className="m-auto  *:cursor-pointer *:pl-4  hidden md:block text-slate-200 font-light ">
        <label className="mx-auto">Home</label>
        <label>About</label>
        <label>Portfolio</label>
        <label>Contact</label>
      </div>
    </div>
  )
}
export default Header
