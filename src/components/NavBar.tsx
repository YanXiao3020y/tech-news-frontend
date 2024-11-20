'use client'
import React from 'react'
import Image from 'next/image'
import Favicon from "./FavIcon";
import Link from 'next/link'
import TagButton from './TagButton'
import ToggleButton from './ToggleButton'
import { useState, useEffect } from "react";
function NavBar() {
  const navList: Array<string> = ["NEWS", "PRODUCTS", "TOOLS"];
  const [togglNav, setTogglNav] = useState(false);
  useEffect(() => {
    if (togglNav) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [togglNav])
  // const [isActive, setIsActive] = useState(false)
  return (
    <>
    <div className="bg-gray-100 h-[75px] w-full min-h-[70px] flex justify-center items-center sticky top-0 z-10">
      <Link href="/">
        <div className="no-select absolute top-0 left-6 w-10 h-[75px] flex items-center justify-center">
          <Image src="/favicon.png" alt="icon" width="30" height="30" className="w-auto h-auto" />
        </div>
      </Link>
      <div className="relative no-select w-80 sm:w-[400px] h-full flex justify-around items-center">
        {/* <div
          className="cursor-pointer font-inknut text-center text-[0.8rem] sm:text-[1rem] h-full relative inline-block leading-[75px]"
          onMouseOver={() => {
            setIsActive(true)
          }}
          onMouseLeave={() => {
            setIsActive(false)
          }}
        >
          NEWS
          <FontAwesomeIcon className="h-5 w-5 ml-2.5" icon={faChevronDown} />
          <ExpandMenu status={isActive} />
        </div> */}
          {navList.map((item, index) => {
            return (
              <Link
                className="font-inknut text-[0.8rem] sm:text-[1rem] h-full relative inline-block leading-[75px]"
                href={`/${item.toLowerCase()}`}
                key={index}
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="absolute right-4">
          <Link href="/about">
            <TagButton color="#3389FF">
              <span className="font-inknut text-xs">ABOUT</span>
            </TagButton>
          </Link>
        </div>
      </div>
      <ToggleButton togglNav={togglNav} toggle={() => {setTogglNav(!togglNav)}}></ToggleButton>
      <div
        className={`flex haha sm:hidden bg-gray-100 w-full h-[75px] justify-end transition-opacity duration-300 ${
          togglNav ? "opacity-0" : "opacity-1"
        }`}
      >
        <Favicon></Favicon>
      </div>

      <div
        className={`z-10 h-screen w-full bg-gray-50 absolute top-0 left-0 transition-all duration-500 transform ${
          togglNav ? "-tranlate-x-full opacity-80" : "translate-x-full opacity-0"
        }`}
      >
     </div>
     </>
  );
}

export default NavBar;
