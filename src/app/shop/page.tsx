import NavBar from "@/components/navBar";
import React from "react";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { CiSliderHorizontal } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Info from "@/components/Info";

const Shop = () => {
  const product = [
    // Product
    {
      img: "img.1.png",
      sale: "-30%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 4.500.000",
    },
    {
      img: "img-2.png",
      sale: "-50%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 5.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-3.jpg",
      sale: "-76%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 3.000.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img.1.png",
      sale: "-30%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 4.500.000",
    },
    {
      img: "img-2.png",
      sale: "-50%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 5.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-3.jpg",
      sale: "-76%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 3.000.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img.1.png",
      sale: "-30%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 4.500.000",
    },
    {
      img: "img-2.png",
      sale: "-50%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 5.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-3.jpg",
      sale: "-76%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 3.000.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img.1.png",
      sale: "-30%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 4.500.000",
    },
    {
      img: "img-2.png",
      sale: "-50%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 5.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-3.jpg",
      sale: "-76%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 3.000.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
  ];
  return (
    <div className="h-screen w-full bg-slate-30">
      <NavBar />
      {/* Background Image */}
      <div className="relative w-full h-80">
        <Image
          src="/assest/img-18.jpg"
          alt="shop"
          layout="fill" // Ensures the image covers the parent div
          objectFit="cover" // Makes the image cover the container
          className="rounded-md"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black bg-pink-50 bg-opacity-50">
          <h1 className="text-4xl font-bold">Shop</h1>
          <p className="flex gap-4 mt-5">
            <span className="text-black font-bold text-2xl">Home</span>
            <span className="mt-2">
              <SlArrowRight />
            </span>
            <span className="text-black text-xl mt-1">Shop</span>
          </p>
        </div>
      </div>
      {/* Filter and sort bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-pink-100 shadow-md rounded-md py-4 px-6 mb-8">
        <div className="flex items-center gap-8">
          <span>
            <CiSliderHorizontal className="h-6 w-6" />
          </span>
          <span className="font-semibold text-gray-700">Filter:</span>
          <span>
            <HiViewGrid className="h-6 w-6" />
          </span>
          <span>
            <TbLayoutDistributeHorizontal className="h-6 w-6" />
          </span>
          <span className="text-black">|</span>
          <span>Showing 1-16 of result 32</span>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="font-semibold text-gray-700">Show</span>
          <div className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm focus:outline-none">
            <p>16</p>
          </div>
          <span className="font-semibold text-gray-700">Sort by</span>
          <div className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm focus:outline-none">
            <p>Default</p>
          </div>
        </div>
      </div>
      {/* Product Grid */}
      <div className="py-10 px-4 md:px-16 lg:px-20">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {product.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={`/assest/${item.img}`} // Replace with your image path
                  alt={item.pName}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                {/* Discount Badge */}
                {item.sale && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 shadow-sm">
                    {item.sale}
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.pName}
                </h2>
                <p className="text-gray-600 text-sm mb-2">{item.content}</p>
                {/* Price Section */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    {item.price}
                  </span>
                  {item.disc && (
                    <span className="text-gray-400 line-through text-sm">
                      {item.disc}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-8">
        <Button className="h-10 w-10 rounded-md bg-yellow-500 text-white hover:bg-yellow-600">
          1
        </Button>
        <Button className="h-10 w-10 rounded-md bg-pink-200 text-gray-600 mx-2 hover:bg-pink-400">
          2
        </Button>
        <Button className="h-10 w-10 rounded-md bg-pink-200 text-gray-600 mx-2 hover:bg-pink-400">
          3
        </Button>
        <Button className="h-10 w-10 rounded-md bg-pink-200 text-gray-600 hover:bg-pink-400">
          Next
        </Button>
      </div>
      {/* Footer Info Section */}
      <Info/>
      <Footer />
    </div>
  );
};

export default Shop;
