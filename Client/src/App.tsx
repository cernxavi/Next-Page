import { Outlet } from "react-router-dom"

<<<<<<< HEAD
import Navigation from "./components/Nav"
=======
import Header from "./components/Header"
import Footer from "./components/Footer"
>>>>>>> feature/components

function App() {
  return (
    <>
<<<<<<< HEAD
      <Navigation/>
        <main>
          <Outlet />
        </main>
=======
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
>>>>>>> feature/components
    </>
  )
}

export default App
