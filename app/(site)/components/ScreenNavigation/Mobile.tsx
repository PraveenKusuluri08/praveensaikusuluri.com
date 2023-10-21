import React from "react"
import { motion } from "framer-motion"
import { menuVariant, navItem } from "../../variants/menuVariant"
import Image from "next/image"
import LinkWrapper from "./LinkWrapper"
import { Download } from "../Main/icons"
import Link from "next/link"
type Props = {
  handleClick: () => void
}
const Mobile = ({ handleClick }: Props) => {
  const hamburgerItems = ["home", "about", "projects", "contact me"]
  return (
    <motion.div
      className="absolute top-0 right-0 z-50 w-3/4 h-screen overflow-hidden md:hidden bg-veryDark"
      initial={{ opacity: 0 }}
      variants={menuVariant}
      whileInView={"show"}
      exit={"exit"}
    >
      <div className="w-full px-6 md:px-10">
        <div className="absolute right-6 top-6 ">
          {/* hamburger */}
          <div className="lg:hidden" onClick={handleClick}>
            <Image
              src={"/close.svg"}
              alt="Open Menu Icon"
              aria-label="open mobile menu"
              width={20}
              height={25}
            />
          </div>
        </div>
        <motion.div className="flex flex-col items-center justify-center h-screen space-y-7" initial={{opacity:0}} whileInView={navItem.show} exit={navItem.exit}>
            {hamburgerItems.map((item,index)=>(
                <LinkWrapper key={index} name={item} isToolgeButton={true} handleClick={handleClick}/>
            ))}
            <div className="flex justify-center mt-10">
            <button
              className={`flex items-center justify-center rounded-md px-5 h-11 bg-buttonBg  hover:bg-cyan duration-300 group cursor-pointer`}
            >
                {/* TODO: Check resume name if resume is updated */}
              <Link href={`/docs/praveen.pdf`} target="_blank" rel="noreferrer">
                <span className="mr-3 text-base font-semibold text-white capitalize group:hover:mr-1">
                  resume
                </span>
              </Link>
              <Download height="4" width="4" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Mobile
