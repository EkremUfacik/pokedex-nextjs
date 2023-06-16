import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-24"></div>
      <div className="fixed inset-x-0 top-0 z-50 h-24 flex justify-around items-center shadow-md py-2 ">
        <Link href="/">
          <Image
            className="w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            width={220}
            height={100}
            priority
            alt="pokemon"
          />
        </Link>

        <div>dark mode</div>
      </div>
    </>
  );
};

export default Navbar;
