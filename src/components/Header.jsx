import React from "react";
import "../styles/App.css";
import Switch from "./Switch";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="shadow-lg  fixed  mt-0 top-0  w-full z-20 bg-white flex flex-wrap items-center justify-between  ">
        <div className="container  px-4  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full   bg-white flex justify-between lg:w-auto lg:static lg:block ">
            <nav className="shadow-md  fixed  top-0 w-full z-10 bg-white "></nav>
            <Link
              to={"./"}
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <img
                alt="Fraporitmos"
                className="rounded-full ml-4  w-10 shadow-md  flex items-center justify-center"
                src="https://res.cloudinary.com/frapoteam/image/upload/v1620798492/logo_yrapli.png"
              />
            </Link>
            <button
              className="text-black  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="lg:flex hidden  justify-center items-center ">
            <ul className="flex flex-col justify-center  lg:flex-row list-none ">
              <li className="nav-item">
                <Link
                  to={"./about"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <span className="ml-2">About me</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"./projects"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <span className="ml-2">Projects</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"./works"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <span className="ml-2">Works</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"./valorations"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black   hover:opacity-75"
                >
                  <span className="ml-2">Valorations</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"./contact"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black  hover:opacity-75"
                >
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#Dark Mode" className="pl-8  flex items-center text-xs uppercase font-bold leading-snug text-black  hover:opacity-75">
                  <Switch />
                
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={
          "darkColor w-full h-screen transform translate-x-1/2  sm:hidden fixed  z-10 top-0" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <ul className=" list-none pt-20 ">
          <li className="nav-item">
            <Link
              to={"./about"}
              className="px-3 py-2 flex items-center text-white uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fas fa-coffee text-lg ml-4"></i>

              <span className="ml-5">About me</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"./projects"}
              className="px-3 py-2 flex items-center text-white uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fas fa-tasks text-lg ml-4"></i>

              <span className="ml-6">Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"./works"}
              className="px-3 py-2 flex items-center text-white uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fas fa-briefcase text-lg ml-4"></i>

              <span className="ml-6">Works</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"./valorations"}
              className="px-3 py-2 flex items-center text-white uppercase font-bold leading-snug text-white   hover:opacity-75"
            >
              <i className="fas fa-heart text-lg ml-4"></i>
              <span className="ml-6">Valorations</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"./contact"}
              className="px-3 py-2 flex items-center text-white uppercase font-bold leading-snug text-white  hover:opacity-75"
            >
              <i className="fas fa-id-card  text-lg ml-4"></i>
              <span className="ml-6">Contact</span>
            </Link>
          </li>
     
        </ul>
      </div>
    </>
  );
}
