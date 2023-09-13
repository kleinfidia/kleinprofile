import React from "react";
import{FaArrowRightLong} from 'react-icons/fa6'

function Carding() {
  return (
    <div className=" p-2 m-2  rounded-md bg-slate-100 h-[50%] w-[60%] ">
      <br />
      <p className=" text-5xl ">
        {" "}
        Hi! I'm klein fidia & I'm a frontend developer.
      </p>
      <br />
      <p className=" text-2xl ">
        I'm passionate on my projects and improving my craft
      </p>

      <p className=" text-xl">Checkout my work and contact me </p>
      <br />
      <p className=" text-lg">
        See my projects
        <FaArrowRightLong />
      </p>
      <br />
    </div>
  );
}

export default Carding;
