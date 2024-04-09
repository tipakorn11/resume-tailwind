import React from "react"
import { Button } from "primereact/button"
import { useHistory } from "react-router-dom"
function Header(props) {
  const history = useHistory()

  return (
    <div className="h-14 ml-[0px] md:ml-[120px] flex flex-wrap justify-between bg-slate-200 z-[800]">
      <div className="md:hidden">
        <button
          onClick={() => {
            props.handleSidebarToggle()
          }}
          className=" text-white h-full pi pi-bars bg-slate-900 px-5"
        />
      </div>
      <div id="blank" className="hidden md:block "></div>
      <div className="flex items-center">
        <Button
          label="Search ..."
          severity="secondary"
          raised
          className="hidden md:block rounded-full w-[20rem] h-10 p-0  bg-white text-slate-400"
          icon="pi pi-search"
          pt={{ root: { className: "text-left pl-7 pt-0.5 " }, label: { className: "text-center" } }}
        />
      </div>
      <div className="flex items-center ">
        <div className="flex flex-col mr-2  pr-4"></div>
      </div>
    </div>
  )
}
export default Header
