"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import React, { useEffect } from "react";

/* 
  <dialog>: 모달 대화 상자를 나타내는 태그.
  <header>: 모달의 헤더 부분을 감싸는 태그.
  <section>: 모달의 주요 내용을 감싸는 태그.
  <article>: 각 제품 항목을 감싸는 태그.
  <footer>: 모달의 하단 부분을 감싸는 태그.
 */

const CartModal = () => {
  const cartItems = true;

  const wixClient = useWixClient();

  useEffect(() => {
    const getCart = async () => {
      const response = await wixClient.currentCart.getCurrentCart();

      console.log(response);
    };

    getCart();
  }, [wixClient]);

  return (
    <dialog
      open
      className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20"
      aria-labelledby="cart-title"
      aria-modal="true"
    >
      {!cartItems ? (
        <div>Cart is Empty!</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <section className="flex flex-col gap-8">
            {/* ITEM */}
            <article className="flex gap-4">
              <Image
                src="/product.png"
                alt="product"
                width={72}
                height={100}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 rounded-sm bg-gray-50">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </article>

            {/* ITEM */}
            <article className="flex gap-4">
              <Image
                src="/product.png"
                alt="product"
                width={72}
                height={100}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 rounded-sm bg-gray-50">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </article>
          </section>

          {/* BOTTOM */}
          <footer>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="mt-2 mb-4 text-sm text-gray-500">
              Proceed to checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="px-4 py-3 rounded-md ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="px-4 py-3 text-white bg-black rounded-md">
                Checkout
              </button>
            </div>
          </footer>
        </>
      )}
    </dialog>
  );
};

export default CartModal;
