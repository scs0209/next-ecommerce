import React from "react";
import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavBarIcons from "./NavBarIcons";
import { menuLinks } from "@/constants";

const NavBar = () => {
  return (
    <header className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="flex items-center justify-between h-full md:hidden">
        {/* Mobile */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="mobile logo" width={24} height={24} />
          <div className="text-2xl tracking-wide">ModuBuy</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER */}
      <div className="items-center justify-between hidden h-full gap-8 md:flex">
        {/* LEFT */}
        <nav className="flex items-center w-1/3 gap-12 xl:w-1/2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">ModuBuy</div>
          </Link>
          <div className="hidden gap-4 xl:flex">
            {menuLinks.slice(0, 5).map((menu, i) => (
              <Link key={menu.name} href={menu.href}>
                {menu.name}
              </Link>
            ))}
          </div>
        </nav>
        {/* RIGHT */}
        <div className="flex items-center justify-between w-2/3 gap-8">
          <SearchBar />
          <NavBarIcons />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
