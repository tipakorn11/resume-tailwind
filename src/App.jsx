import React from "react"
import "./App.css"
import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Layout = React.lazy(() => import("./containner/layout"))
function App() {
  return (
    <>
      <BrowserRouter>
        <React.Suspense>
          <Switch>
            {/* <Route exact path="/401" name="Page 401" render={(props) => <Page401 {...props} />} /> */}
            <Route path="/" name="หน้าแรก" render={(props) => <Layout {...props} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
