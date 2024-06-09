import CategoryList from "@/components/common/CategoryList";
import ProductList from "@/components/common/ProductList";
import Slider from "@/components/common/Slider";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products.queryProducts().find();

  console.log(res);

  return (
    <main className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
    </main>
  );
};

export default HomePage;
