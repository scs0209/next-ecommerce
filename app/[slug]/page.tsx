import React from "react";
import { notFound } from "next/navigation";
import { products } from "@wix/stores";

import Add from "@/components/common/Add";
import CustomizeProducts from "@/components/common/CustomizeProducts";
import ProductImages from "@/components/common/ProductImages";

import { wixClientServer } from "@/lib/wixClientServer";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();

  const decodedSlug = decodeURIComponent(params.slug);

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", decodedSlug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <main className="relative flex flex-col gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 lg:flex-row">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXT */}
      <div className="flex flex-col w-full gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <hr className="h-[2px] bg-gray-100" />
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="text-xl text-gray-500 line-through">
            ${product.price?.price}
          </h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="text-2xl font-medium">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}
        <hr className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions && (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}
        <Add
          productId={product._id!}
          variantId="00000000-0000-0000-0000-000000000000"
          stockNumber={product.stock?.quantity || 0}
        />
        <hr className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map(
          (section: products.AdditionalInfoSection) => (
            <div className="text-sm" key={section.title}>
              <h4 className="mb-4 font-medium">{section.title}</h4>
              <p>{section.description}</p>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default ProductPage;
