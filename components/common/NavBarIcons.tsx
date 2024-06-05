"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CartModal from "./CartModal";

const NavBarIcons = () => {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute flex items-center justify-center w-6 h-6 text-sm text-white rounded-full -top-4 -right-4 bg-counter">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavBarIcons;
