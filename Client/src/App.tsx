import { Outlet } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <main style={{minHeight:"62.75vh"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
