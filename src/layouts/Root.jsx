// import { ToastContainer } from "react-toastify";

import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";
const Root = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <ToastContainer />
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
