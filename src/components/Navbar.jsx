"use client";

import Image from "next/image";
// import Link from "next/link";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  // const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="h-24"></div>
      <div className="fixed inset-x-0 top-0 z-50 h-24 flex justify-around items-center shadow-md py-2 bg-indigo-100 dark:bg-indigo-900 transition-all duration-300">
        {/* <Link href="/"> */}
        <button onClick={() => router.push("/")}>
          <Image
            className="w-40 sm:w-52 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            width={220}
            height={100}
            priority
            alt="pokemon"
          />
        </button>
        {/* </Link> */}

        <div
          className="hover:bg-slate-300 p-2 rounded-full cursor-pointer transition-all duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon className="w-8 text-yellow-600" />
          ) : (
            <MoonIcon className="w-8 text-gray-500" />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
