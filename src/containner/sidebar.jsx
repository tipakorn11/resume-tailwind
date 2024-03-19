import React from "react"
import { useEffect } from "react"
import { Button } from "primereact/button"

const Sidebar = (props) => {
  useEffect(() => {}, [props.isOpen])
  const classes = `fixed  h-screen  bg-slate-100 w-[140px]  ease-in-out duration-300 md:duration-50 md:-translate-x-0 ${
    props.isOpen ? "-translate-x-0" : " -translate-x-full"
  }`
  const loadingScreenClasses = `w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50 ${props.isOpen ? "block" : "hidden"}`
  return (
    <div className={classes}>
      <Button icon="pi pi-times" />
      <div class="fixed inset-0  ml-[140px] w-screen flex items-center justify-center bg-black bg-opacity-50" >
      </div>
      {/* Content of the sidebar */}
    </div>
  )
}
export default Sidebar
