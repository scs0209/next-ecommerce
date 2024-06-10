"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent } from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="flex justify-between mt-12">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="px-4 py-2 text-xs font-medium rounded-2xl bg-select"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="w-24 pl-2 text-xs rounded-2xl ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="w-24 pl-2 text-xs rounded-2xl ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />

        <select
          name="cat"
          id=""
          className="px-4 py-2 text-xs font-medium rounded-2xl bg-select"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>

        <select
          name=""
          id=""
          className="px-4 py-2 text-xs font-medium rounded-2xl bg-select"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="px-4 py-2 text-xs font-medium bg-white rounded-2xl ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc latsUpdated">Oldest</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
