/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [menu, setMenu] = useState("");

  const menuOpen = () => {
    setMenu(true);
  };

  const menuClose = () => {
    setMenu(false);
  };

  return (
    <div className="fixed top-0 z-50 max-w-2xl w-full bg-white">
      {menu && (
        <div className=" fixed top-[-8px] z-50 w-full h-full bg-white">
          <div className="h-screen">
            <motion.div className="flex items-center justify-between mx-3 pt-2 my-3 sm:mx-6 sm:my-3">
              <Link href="/" className="">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="h-8 sm:h-12"
                ></img>
              </Link>
              <button onClick={menuClose}>
                <XMarkIcon className="w-8 h-8 bg-transparent" />
              </button>
            </motion.div>
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: -3, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="flex flex-col mt-10"
            >
              <div className="flex mx-auto space-x-5">
                <Link href="/about" onClick={menuClose}>
                  <p className="flex justify-center">ABOUT</p>
                </Link>
                <Link href="/contact" onClick={menuClose}>
                  <p className="flex justify-center">CONTACT</p>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="">
        <div className="flex items-center justify-between mx-3 my-3 sm:mx-6 sm:my-3">
          <Link href="/" className="">
            <img
              src="/logo.png"
              alt="logo"
              className="h-8 sm:h-12"
            ></img>
          </Link>
          <div className=" flex space-x-2 items-center">
            <button className=" sm:hidden" onClick={menuOpen}>
              <Bars2Icon className="w-8 h-8 bg-transparent ml-1" />
            </button>
            <div className="hidden sm:flex space-x-5 font-mono text-lg mt-1 mb-1 bg-transparent">
              <Link href="/about" className="bg-transparent">
                <p className="bg-transparent ml-3">ABOUT</p>
              </Link>
              <Link href="/contact" className=" bg-transparent">
                <p className="bg-transparent">CONTACT</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
