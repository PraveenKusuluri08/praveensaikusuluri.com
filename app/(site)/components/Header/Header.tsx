import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { Desktop, Mobile } from "../ScreenNavigation"
import { Download } from "../Main/icons"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    isOpen == true ? setIsOpen(!isOpen) : setIsOpen(!isOpen)
  }
  useEffect(() => {
    const body = document.querySelector("body")
    isOpen === true
      ? body?.classList.add("no-scroll")
      : body?.classList.remove("no-scroll")
  }, [isOpen])

  return (
    <header className="flex items-center justify-center w-full h-16 md:h-20 lg:h-[5rem] bg-body/80 -mb-[1px] fixed top-0 left-0 z-50 shadow-lg px-6 md:px-10 lg:px-14 backdrop-blur-md">
      <nav className="flex items-center justify-between w-full">
        <Link href={"/"}>
          <motion.div
            className="relative w-14 h-14 cursor-pointer"
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 0.3 } }}
          >
            <Image
              className="rounded-full"
              src={"/logo.png"}
              layout="fill"
              alt="logo"
              priority={true}
            />
          </motion.div>
        </Link>
        <div className="items-center hidden space-x-8 md:flex">
          <Desktop />
          <div className="hidden cta md:flex">
            <motion.button
              className={`flex items-center justify-center rounded-md px-5 h-11 bg-buttonBg hover:bg-blue_drak duration-300 group cursor-pointer`}
              initial={{ y: -100 }}
              animate={{ y: 0, transition: { duration: 0.3, delay: 0.1 } }}
            >
              <Link href={`docs/praveen.pdf`} target="_blank" rel="noopener">
                <span className="mr-3 text-base font-normal tracking-wide text-white capitalize group:hover:mr-1">
                  resume
                </span>
              </Link>
              <Download height="4" width="4" />
            </motion.button>
          </div>
        </div>
        <motion.div
          className="relative w-10 h-5 md:hidden"
          onClick={handleClick}
          initial={{ x: 100 }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
        >
          <Image
            src={"/icons/hamburger.svg"}
            layout="fill"
            alt="Open Menu Icon"
            aria-label="open mobile menu"
          />
        </motion.div>
        <AnimatePresence initial={false} mode={"wait"} onExitComplete={() => null}>
          {isOpen && <Mobile handleClick={handleClick}/>}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
