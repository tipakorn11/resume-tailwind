import React, { useState, useEffect } from "react"
import { Button } from "primereact/button"
import accessMenu from "./menu"
import { useHistory } from "react-router-dom"
function SideBar(props) {
  const [checked, setChecked] = React.useState("")
  const [menu, setMenu] = React.useState([])
  const history = useHistory()
  useEffect(() => {
    const fetchData = () => {
      setMenu(accessMenu({ PERMISSIONS: props.PERMISSIONS }))
    }
    const checkMenuSideBar = () => {
      if (history.location.pathname != "" && history.location.pathname != undefined) {
        setChecked(history.location.pathname.replace(/\//g, ""))
      }
    }
    fetchData()
    // checkMenuSideBar()
  }, [])
  useEffect(() => {}, [props.isOpen])
  const Sidebar = `fixed  h-screen  bg-slate-100 w-[120px]  ease-in-out duration-300 md:duration-50 md:-translate-x-0 ${
    props.isOpen ? "-translate-x-0" : " -translate-x-full"
  }`
  const drawer = (
    <div className="flex flex-col justify-center pt-4 ">
      {menu?.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col justify-center m-auto py-2 w-full hover:bg-slate-200 cursor-pointer hover:font-bold"
            onClick={() => {
              history.push(item.to)
            }}
          >
            <Button
              severity="secondary"
              text
              className={`m-auto h-12 w-12  rounded-lg shadow-sm ${checked == item.altEng ? "bg-[#F5735C]" : "bg-white"}`}
              icon={<img src={`${checked == item.altEng ? item.imgWhite : item.imgBlack}`} width={35} alt="" />}
            />
            <label className="text-sm pt-2 text-center cursor-pointer">{item.alt}</label>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className={Sidebar}>
      {props.isOpen ? (
        <div
          className="fixed inset-0  ml-[120px] w-screen flex items-center bg-black justify-center  bg-opacity-50"
          onClick={props.handleSidebarToggle}
        ></div>
      ) : (
        ""
      )}
      <div className="flex w-full h-14 rounded-none  justify-center p-2" style={{ backgroundColor: "#393D46" }}>
        <img src="/image/open-book-white.png" alt="" />
      </div>
      {drawer}
    </div>
  )
}

export default SideBar
