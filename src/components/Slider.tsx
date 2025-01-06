"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaSliders } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CartSlider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);

    // Prevent body scroll when the slider is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {/* Cart Trigger */}
      <Button
        onClick={toggleCart}
        className="fixed top-28 right-4 text-black bg-white p-3 rounded-full shadow-lg z-50"
      >
        <FaSliders />
      </Button>

      {/* Cart Slider */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 z-40`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <Button onClick={toggleCart}>
            <FiX size={24} />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex flex-col gap-4">
          {/* Example Item 1 */}
          <div className="flex items-center gap-4 border-b pb-4">
            <Image
              src="/assest/img-18.jpg"
              alt="Asgaard sofa"
              width={64}
              height={64}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <h3 className="text-sm font-bold">Asgaard Sofa</h3>
              <p className="text-sm">Rs. 250,000.00 × 1</p>
            </div>
            <span className="text-sm font-bold ml-auto">Rs. 250,000.00</span>
          </div>

          {/* Example Item 2 */}
          <div className="flex items-center gap-4 border-b pb-4">
            <Image
              src="/assest/img-19.jpg"
              alt="Cookding Wood"
              width={64}
              height={64}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <h3 className="text-sm font-bold">Cookding Wood</h3>
              <p className="text-sm">Rs. 270,000.00 × 1</p>
            </div>
            <span className="text-sm font-bold ml-auto">Rs. 270,000.00</span>
          </div>
        </div>

        {/* Subtotal and Actions */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold">Subtotal</span>
            <span className="text-lg font-bold text-yellow-600">
              Rs. 520,000.00
            </span>
          </div>
          <div className="flex gap-4">
            <Link href={"/shop/product/cart"}>
              <Button className="flex-1 bg-yellow-500 hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400 text-black py-2 rounded-md">
                Cart
              </Button>
            </Link>
            <Link href={"/shop/product/cart/checkout"}>
              <Button className="flex-1 bg-yellow-500 text-white py-2 hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400 rounded-md">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </>
  );
};

export default CartSlider;
