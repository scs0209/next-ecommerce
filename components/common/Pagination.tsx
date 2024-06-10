"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNum: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between w-full mt-12">
      <button
        className="w-24 p-2 text-sm text-white rounded-md cursor-pointer bg-counter disabled:cursor-not-allowed disabled:bg-green-200"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>

      <button
        className="w-24 p-2 text-sm text-white rounded-md cursor-pointer bg-counter disabled:cursor-not-allowed disabled:bg-green-200"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
