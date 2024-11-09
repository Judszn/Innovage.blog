import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

function About() {
  return (
    <div className="bg-black ">
      <div className="py-40 bg-black text-center text-white px-4 ">
        <h2 className="text-5xl lg:text-7xl loading-snug font-bold mb-5">
          Know more about us.
        </h2>
      </div>
      <div className="max-w-5xl mx-auto pl-20  pb-40">
        <div className="grid m-4 lg:grid-cols-2 items-center justify-center mb-20  border-l border-orange-500 pl-20 ">
          <div className="">
            <img
              src={image1}
              alt=""
              className=" rounded-full w-[350px] h-[350px]"
            />
          </div>
          <div className="text-gray-400 mb-20 p-5 my-auto">
            <h1 className="text-3xl font-semibold">Head Editor</h1>
            <h2 className="text-2xl text-orange-500">John Carter</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo at, laboriosam pariatur officiis minus nobis inventore
              reiciendis amet vero quod ab animi? Perferendis quis facere ipsum
              ratione? Aspernatur, quas consequatur.
            </p>
          </div>
        </div>
        <div className=" m-4 grid lg:grid-cols-2 items-center justify-center mb-20  pl-20 border-l border-orange-500">
          <div className="">
            <img
              src={image3}
              alt=""
              className=" rounded-full w-[350px] h-[350px]"
            />
          </div>
          <div className="text-gray-400 mb-20 p-5 my-auto">
            <h1 className="text-3xl font-semibold">Copy writer</h1>
            <h2 className="text-2xl text-orange-500">Jess Ann</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo at, laboriosam pariatur officiis minus nobis inventore
              reiciendis amet vero quod ab animi? Perferendis quis facere ipsum
              ratione? Aspernatur, quas consequatur.
            </p>
          </div>
        </div>
        <div className="m-4 grid lg:grid-cols-2 items-center justify-center border-l border-orange-500  pl-20 pb-3">
          <div className="">
            <img
              src={image2}
              alt=""
              className=" rounded-full w-[350px] h-[350px]"
            />
          </div>
          <div className="text-gray-400 mb-20 p-5 my-auto">
            <h1 className="text-3xl font-semibold">Associate</h1>
            <h2 className="text-2xl text-orange-500">Speed Alure</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo at, laboriosam pariatur officiis minus nobis inventore
              reiciendis amet vero quod ab animi? Perferendis quis facere ipsum
              ratione? Aspernatur, quas consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
