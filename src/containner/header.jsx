import { Menu, Button } from "primereact"
import React, { useRef } from "react"
const Header = ({ navSet }) => {
  return (
    <div className="ml-[0px] md:ml-[140px] flex bg-white justify-between h-12 z-0">
      <div className="flex items-center">
        <Button className="block md:hidden " text icon="pi pi-bars" severity="secondary" onClick={() => navSet()} />
      </div>
      {/* <div className="hidden md:block flex items-center" ref={menu}>search</div> */}
      <div className=" flex items-center">avatar</div>
    </div>
  )
}

export default Header
