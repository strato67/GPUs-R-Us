import { useEffect, useState } from "react";

export default function Modal() {

  const [mouseOver, setMouseOver] = useState(false);

  useEffect(()=>{

    if(mouseOver){
      console.log("in div");
    }

  },[mouseOver]);

  return (
    <>
    <div className="flex justify-center bg-black">
    <div className="carousel lg:w-2/3 w-full" onMouseOver={()=>setMouseOver(true)} onMouseOut={()=>setMouseOver(false)}>
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5f7ca28d6b179d3ea9be6f5c/0x0.jpg?format=jpg&width=1200"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5f7ca28d6b179d3ea9be6f5c/0x0.jpg?format=jpg&width=1200"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5f7ca28d6b179d3ea9be6f5c/0x0.jpg?format=jpg&width=1200"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5f7ca28d6b179d3ea9be6f5c/0x0.jpg?format=jpg&width=1200"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}
