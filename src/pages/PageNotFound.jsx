import React from "react";
import errorPage from "../assets/error-404.png";
import { Link } from "react-router";
const PageNotFound = () => {
  return (
    <div className="col-span-4 flex flex-col items-center py-20 mx-auto">
      <div className="md:h-[300px] px-6 md:px-0">
        <img className="h-full" src={errorPage} alt="" />
      </div>
      <h2 className="md:text-5xl text-2xl font-semibold text-[#001931] my-7 ">
        Oops, page not found!
      </h2>
      <Link to="/apps">
        <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] font-semibold py-2 px-7 rounded-md cursor-pointer">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
