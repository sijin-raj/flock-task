import React from "react";
import "../../App.css";
import Navbar from "./Navbar/navbar";
import Header from "../Header/header";
import Shop from "./shop";
import TheLine from "./theLine";
import HappySkin from "./happyskin";
import Footer from "./Footer/footer";
import AnimatedCursor from "react-animated-cursor"

const colors = ["#F5D7F5", "#FAF2DF", "#DAEAF9"];
const delay = 6000;

function Home() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <>
      <Navbar />
      <AnimatedCursor
         innerSize={30}
         outerSize={15}
         color='245, 63, 245'
         outerAlpha={0.2}
         innerScale={0.7}
         outerScale={8}

      />
      <div className="slideshow items-center justify-center">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))}
          ENJOY FREE GROUND SHIPPING ON ALL ORDERS! PLUS, ORDERS $75+ GET 2-DAY SHIPPING - ON US!
        </div>
        <div className="w-9/12 absolute flex  flex-row space-x-72 -mt-20  items-center justify-center">
          <div className="absolute animate-pulse items-center justify-center pl-44 w-auto">
            <img
              className="px-8 py-14 w-5/6"
              src="https://cdn.shopify.com/s/files/1/0209/8446/files/A-Gloei_HPH-3_1400x950px_1296x.jpg?v=1641276153"
              alt="image"
            />
          </div>
          <div className="absolute  items-center justify-center">
            <img
              className="px-6 py-20 w-3/6 ml-96"
              src="https://cdn.shopify.com/s/files/1/0209/8446/files/A-Gloei_HPH-4_500px_540x.jpg?v=1641276192"
              alt="image"
            />
          </div>
        </div>
      </div>
      <Header />

      <Shop />

      <TheLine />

      <HappySkin />

      <Footer />
    </>
  );
}

export default Home;
