"use client";

import React, { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  // TEMPORARY
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-between w-32 px-4 py-2 bg-gray-100 rounded-3xl">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">Products out of stock</div>
          ) : (
            <div>
              Only <span className="text-red-600">4 items</span> left!
              <br />
              {"Don't"} miss it!
            </div>
          )}
        </div>
        <button className="px-4 py-2 text-sm w-36 rounded-3xl ring-1 ring-counter text-counter hover:bg-counter hover:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default Add;
