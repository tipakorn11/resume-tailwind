// routes.jsx
import React from "react"
const routes = [
  // { key: "ผู้สมัคร", name: "ผู้สมัคร", path: "/candidate", component: React.lazy(() => import("./view/candidate")) },
  { path: "/", key: "หน้าหลัก", name: "หน้าหลัก", exact: true, component: React.lazy(() => import("./view/homepage")) },
]
export default routes
