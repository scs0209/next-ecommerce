import { Suspense } from "react";

import { wixClientServer } from "@/lib/wixClientServer";

import CategoryList from "@/components/common/CategoryList";
import ProductList from "@/components/common/ProductList";
import Skeleton from "@/components/common/Skeleton";
import Slider from "@/components/common/Slider";

const HomePage = async () => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products.queryProducts().find();

  console.log(res);

  return (
    <main className="">
      <Slider />
      <div className="px-4 mt-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.BEAUTY_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="px-4 mb-12 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="px-4 mt-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        {/* <ProductList /> */}
      </div>
    </main>
  );
};

export default HomePage;
