import React from "react";
import "./App.css"
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
const Layout = React.lazy(()=> import('./containner/layout'))
function App() {
  return (
    <>
        <div className="flex flex-col bg-slate-300 h-screen">
         <Layout></Layout>
        </div>
    </>
  )
}

export default App
