import Filter from "@/components/common/Filter";
import Image from "next/image";
import React from "react";

const ListPage = () => {
  return (
    <main className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="bg-green-50 p-4 flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px]">
            Grab up to 50% off on Selected Products
          </h1>
          <button className="rounded-3xl bg-counter text-white w-max px-5 py-3 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="image" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>
    </main>
  );
};

export default ListPage;
