import Add from "@/components/common/Add";
import CustomizeProducts from "@/components/common/CustomizeProducts";
import ProductImages from "@/components/common/ProductImages";
import React from "react";

const ProductPage = () => {
  return (
    <main className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          sapien lorem. Donec vel nulla et lectus pharetra pretium. Aliquam erat
          volutpat. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Integer iaculis urna a iaculis interdum. Ut porta ex eros,
          vel auctor ex varius sit amet. Quisque iaculis leo ut euismod
          tincidunt. Etiam molestie ullamcorper enim id pharetra. Sed aliquam
          sed orci in ornare.
        </p>
        <hr className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h3 className="font-medium text-2xl">$49</h3>
        </div>
        <hr className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <hr className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt sapien lorem. Donec vel nulla et lectus pharetra pretium.
            Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Integer iaculis urna a iaculis interdum. Ut
            porta ex eros, vel auctor ex varius sit amet. Quisque iaculis leo ut
            euismod tincidunt. Etiam molestie ullamcorper enim id pharetra. Sed
            aliquam sed orci in ornare.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt sapien lorem. Donec vel nulla et lectus pharetra pretium.
            Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Integer iaculis urna a iaculis interdum. Ut
            porta ex eros, vel auctor ex varius sit amet. Quisque iaculis leo ut
            euismod tincidunt. Etiam molestie ullamcorper enim id pharetra. Sed
            aliquam sed orci in ornare.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt sapien lorem. Donec vel nulla et lectus pharetra pretium.
            Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Integer iaculis urna a iaculis interdum. Ut
            porta ex eros, vel auctor ex varius sit amet. Quisque iaculis leo ut
            euismod tincidunt. Etiam molestie ullamcorper enim id pharetra. Sed
            aliquam sed orci in ornare.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
