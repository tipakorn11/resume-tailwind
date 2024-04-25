import React from "react"

const Footer = () => {
  return (
    <div className="flex text-white  bg-blue-900 w-full">
      <div className="flex flex-col grid-cols-2 w-full *:p-5 md:px-80">
        <label className="flex">
          <i className="pi pi-inbox mr-6"></i> tipakornjomko@gmail.com
        </label>
        <label className="flex">
          <i className="pi pi-map-marker mr-6"></i> P. nakhonratchasima D. nai muang
        </label>
        <label className="flex">
          <i className="pi pi-phone mr-6"></i>0635873027
        </label>
      </div>
    </div>
  )
}

export default Footer
