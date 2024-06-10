"use client";

import React, { useState } from "react";
import { products } from "@wix/stores";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock.quantity > 0
      );
    });
  };

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  console.log(selectedOptions);

  return (
    <section className="flex flex-col gap-6">
      {productOptions?.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);

              return option.name === "색상" ? (
                <li
                  className="relative w-8 h-8 rounded-full ring-1 ring-gray-300"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 top-1/2 left-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="px-4 py-1 text-sm rounded-md cursor-pointer ring-1 ring-counter text-counter"
                  style={{
                    backgroundColor: selected
                      ? "#02BE61"
                      : disabled
                      ? "#BBF7D0"
                      : "white",
                    cursor: disabled ? "not-allowed" : "pointer",
                    color: selected || disabled ? "white" : "#02BE61",
                    boxShadow: disabled ? "none" : "",
                  }}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {/* COLOR */}
      {/* 
          <ul className="flex items-center gap-3">
            <li className="relative w-8 h-8 bg-red-500 rounded-full cursor-pointer ring-1 ring-gray-300">
              <div className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 top-1/2 left-1/2" />
            </li>
            <li className="relative w-8 h-8 bg-blue-500 rounded-full cursor-pointer ring-1 ring-gray-300"></li>
            <li className="relative w-8 h-8 bg-green-500 rounded-full cursor-not-allowed ring-1 ring-gray-300">
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
          </ul> */}

      {/* OTHERS */}
      {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="px-4 py-1 text-sm rounded-md cursor-pointer ring-1 ring-counter text-counter">
          Small
        </li>
        <li className="px-4 py-1 text-sm text-white rounded-md cursor-pointer ring-1 ring-counter bg-counter">
          Medium
        </li>
        <li className="px-4 py-1 text-sm text-white bg-green-200 rounded-md cursor-not-allowed ring-1 ring-green-200">
          Large
        </li>
      </ul> */}
    </section>
  );
};

export default CustomizeProducts;
