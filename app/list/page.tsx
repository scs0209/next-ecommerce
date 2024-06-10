import Filter from "@/components/common/Filter";
import ProductList from "@/components/common/ProductList";
import Skeleton from "@/components/common/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

const ListPage = async ({
  searchParams,
}: {
  searchParams: { cat: string };
}) => {
  const wixClient = await wixClientServer();
  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <main className="relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* CAMPAIGN */}
      <div className="flex justify-between h-64 p-4 bg-green-50">
        <div className="flex flex-col items-center justify-center w-2/3 gap-8">
          <h1 className="text-4xl font-semibold leading-[48px]">
            Grab up to 50% off on Selected Products
          </h1>
          <button className="px-5 py-3 text-sm text-white rounded-3xl bg-counter w-max">
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
      <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name}</h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </main>
  );
};

export default ListPage;
