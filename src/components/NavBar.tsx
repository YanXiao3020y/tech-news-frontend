"use client";
import React from "react";
import Image from "next/image";
import Favicon from "./FavIcon";
import Link from "next/link";
import TagButton from "./TagButton";
import ToggleButton from "./ToggleButton";
import { useState, useEffect } from "react";
function NavBar() {
  const navList: Array<string> = ["NEWS", "PRODUCTS", "TOOLS"];
  const [togglNav, setTogglNav] = useState(false);
  useEffect(() => {
    if (togglNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [togglNav]);
  // const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div className="sticky top-0 z-10 hidden h-[75px] min-h-[70px] w-full items-center justify-center bg-gray-100 sm:flex">
        <Link href="/">
          <div className="no-select absolute left-6 top-0 flex h-[75px] w-10 items-center justify-center">
            <Image
              src="/favicon.png"
              alt="icon"
              width="30"
              height="30"
              className="h-auto w-auto"
            />
          </div>
        </Link>
        <div className="no-select relative flex h-full w-80 items-center justify-around sm:w-[400px]">
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
                className="relative inline-block h-full font-inknut text-[0.8rem] leading-[75px] sm:text-[1rem]"
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
      <ToggleButton
        togglNav={togglNav}
        toggle={() => {
          setTogglNav(!togglNav);
        }}
      ></ToggleButton>
      <div
        className={`z-10 flex h-[75px] w-full bg-gray-100 transition-opacity duration-300 sm:hidden`}
      >
        <Favicon></Favicon>
      </div>

      <div
        className={`fixed left-0 top-0 z-10 flex h-screen w-full transform items-center justify-end bg-gray-50 transition-all duration-700 sm:hidden ${
          togglNav ? "" : "translate-x-full"
        }`}
      >
        <ul className="flex h-[480px] w-80 flex-col items-end justify-center">
          <li
            className={`flex h-16 w-2/5 items-center border-b-2 border-gray-200 transition-all delay-100 duration-500 ${
              togglNav ? "" : "translate-x-32"
            }`}
            onClick={() => {
              setTogglNav(false);
            }}
          >
            <Link href="/">
              <span className="font-inknut text-lg">HOME</span>
            </Link>
          </li>
          {navList.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex h-16 w-2/5 items-center border-b-2 border-gray-200 transition-all duration-500 ${
                  togglNav ? "" : "translate-x-32"
                }`}
                style={{
                  transitionDelay: `${((index + 1) * 0.05 + 0.1).toFixed(2)}s`,
                }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => {
                    setTogglNav(false);
                  }}
                >
                  <span className="font-inknut text-lg">{item}</span>
                </Link>
              </li>
            );
          })}
          <li
            className={`flex h-16 w-2/5 items-center border-b-2 border-gray-200 transition-all delay-300 duration-500 ${
              togglNav ? "" : "translate-x-32"
            }`}
          >
            <Link
              href="/about"
              onClick={() => {
                setTogglNav(false);
              }}
            >
              <span className="font-inknut text-lg">ABOUT</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
