import React, { useState } from "react"
import { Footer, Header, Sidebar } from "./"
const Layout = () => {
  const [navOpen, setNavOpen] = useState(false)
  const handleSidebarToggle = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div>
      <Sidebar isOpen={navOpen} handleSidebarToggle={() => handleSidebarToggle()} />
      <Header handleSidebarToggle={() => handleSidebarToggle()} />

      <Footer />
    </div>
  )
}

export default Layout
