"use client";

import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <ArrowUpCircleIcon
      className="w-16 text-slate-300 fixed bottom-10 right-16 hover:text-slate-500 transition-all duration-400 cursor-pointer"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};

export default BackToTop;
