/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Img1 from "./images/roof.jpg";
import Img2 from "./images/vlg.jpg";
function App() {
  return (
    <div className="App ">
      <Parallax pages={3} className="bg-indigo-200">
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="flex w-full h-full justify-center items-center bg-red-300">
            {" "}
            <span className="text-8xl font-black">Hello World !!!!</span>
          </div>
          <img src={Img1} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className="flex w-full justify-center items-center bg-red-300">
            {" "}
            <span className="text-8xl font-black">
              Did you notice some changes while scrolling?
            </span>
          </div>
          <img src={Img2} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2.5}>
          <div className="flex w-full h-full justify-center items-center bg-red-300">
            {" "}
            <span className="text-8xl font-black">Thanks For Visiting 😎</span>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
