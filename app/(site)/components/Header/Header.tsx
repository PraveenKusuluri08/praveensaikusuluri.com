import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-16 md:h-20 lg:h-[5rem] bg-body/80 -mb-[1px] fixed top-0 left-0 z-50 shadow-lg px-6 md:px-10 lg:px-14 backdrop-blur-md">
      <nav className="flex items-center justify-between w-full">
        <Link href={"/"}>
          <motion.div
            className="relative w-14 h-14 cursor-pointer"
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 0.3 } }}
          >
            <Image className="rounded-full" src={"/logo.png"} layout="fill" alt="logo" priority={true} />
          </motion.div>
        </Link>
      </nav>
    </header>
  )
}

export default Header
