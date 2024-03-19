import React, { useState } from "react"
import { Footer, Header, Sidebar } from "./"
const Layout = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
      <Sidebar isOpen={navOpen} />
      <Header navSet={() => setNavOpen(!navOpen)} />

      <Footer />
    </div>
  )
}

export default Layout
