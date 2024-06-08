import ProductList from "@/components/common/ProductList";
import Slider from "@/components/common/Slider";

const HomePage = () => {
  return (
    <main className="">
      <Slider />
      <div className="mt-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
    </main>
  );
};

export default HomePage;
