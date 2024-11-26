'use client'
import React from 'react'
import Image from 'next/image'
import Favicon from './FavIcon'
import Link from 'next/link'
import TagButton from './TagButton'
import ToggleButton from './ToggleButton'
import { useState, useEffect } from 'react'
import { li } from 'framer-motion/client'
function NavBar() {
  const navList: Array<string> = ['NEWS', 'PRODUCTS', 'TOOLS']
  const [togglNav, setTogglNav] = useState(false)
  useEffect(() => {
    if (togglNav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [togglNav])
  // const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div className="bg-gray-100 hidden sm:flex h-[75px] w-full min-h-[70px] justify-center items-center sticky top-0 z-10">
        <Link href="/">
          <div className="no-select absolute top-0 left-6 w-10 h-[75px] flex items-center justify-center">
            <Image
              src="/favicon.png"
              alt="icon"
              width="30"
              height="30"
              className="w-auto h-auto"
            />
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
            )
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
          setTogglNav(!togglNav)
        }}
      ></ToggleButton>
      <div
        className={`z-10 flex sm:hidden bg-gray-100 w-full h-[75px] transition-opacity duration-300`}
      >
        <Favicon></Favicon>
      </div>

      <div
        className={`z-10 h-screen fixed w-full sm:hidden flex items-center justify-end bg-gray-50 top-0 left-0 transition-all duration-700 transform ${
          togglNav ? '' : 'translate-x-full'
        }`}
      >
        <ul className="w-80 flex flex-col items-end justify-center h-[480px]">
          <li
            className={`w-2/5 h-16 flex items-center border-b-2 border-gray-200 transition-all duration-500 delay-100 ${
              togglNav ? '' : 'translate-x-32'
            }`}
            onClick={() => {
              setTogglNav(false)
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
                className={`w-2/5 h-16 flex items-center border-b-2 border-gray-200 transition-all duration-500 ${
                  togglNav ? '' : 'translate-x-32'
                }`}
                style={{
                  transitionDelay: `${((index + 1) * 0.05 + 0.1).toFixed(2)}s`
                }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => {
                    setTogglNav(false)
                  }}
                >
                  <span className="font-inknut text-lg">{item}</span>
                </Link>
              </li>
            )
          })}
          <li
            className={`w-2/5 h-16 flex items-center border-b-2 border-gray-200 transition-all duration-500 delay-300 ${
              togglNav ? '' : 'translate-x-32'
            }`}
          >
            <Link
              href="/about"
              onClick={() => {
                setTogglNav(false)
              }}
            >
              <span className="font-inknut text-lg">ABOUT</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
