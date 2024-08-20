import React, { useState } from "react"
import { Footer, Header, Sidebar,Content } from "./"
const Layout = () => {
  const [navOpen, setNavOpen] = useState(false)
  const handleSidebarToggle = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div className="min-h-screen h-full bg-black">
      <Sidebar isOpen={navOpen} handleSidebarToggle={() => handleSidebarToggle()} />
      <Header handleSidebarToggle={() => handleSidebarToggle()} />
      <Content/>
      <Footer />
    </div>
  )
}

export default Layout
