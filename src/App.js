import React from "react";
import { Cards, Footer, Nav } from "./components";

function App() {
  return (
    <div className="  h-full w-full bg-gradient-to-r from-green-900 via-green-900 to-black ">
      <Nav />
      <div className=" ">
        <div className="flex bg-slate-100 opacity-50 items-center justify-center">
          <Cards />
        </div>
        <div className=" flex bg-slate-100 opacity-60 justify-center text-3xl">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
