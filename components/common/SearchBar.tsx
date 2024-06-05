"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    // TODO: 프로젝트가 완성되면 `/list?name=${name}` 이렇게 변경해보기
    if (name) {
      router.push("/list?name=" + encodeURIComponent(name));
    }
  };

  return (
    <form
      className="flex items-center justify-between flex-1 gap-4 p-2 bg-gray-100 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
