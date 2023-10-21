"use client"
import React from "react"
import { motion } from "framer-motion"
import Text from "../../Text/Text"
import HireMeButton from "./HireMeButton"
import ResumeButton from "./ResumeButton"
import MainNav from "./MainNav"
import { AboutIcon } from "../icons"
const MainSection = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full mx-auto">
        <div className="w-full font-bold text-blue font-pop">
          <motion.p
            className="mb-4 text-lg font-pop md:text-xl md:mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.55 },
            }}
          >
            Hi there, 👋I&apos;m
          </motion.p>
          <motion.h1
            className="flex items-center space-x-5 pb-7 font-pop text-text text-3xl sm:text-4xl md:text-[5rem] md:leading-[1.3]"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.6 },
            }}
          >
            <span className="relative text-blue before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 md:before:h-2 md:before:-bottom-3 before:block before:bg-blue before:rounded-full">
              Praveen
            </span>
            <span className="w-fit">Kusuluri</span>
          </motion.h1>
        </div>

        <div className="w-full mb-6">
          <motion.p
            className="text-text_Light text-2xl sm:text-2xl md:text-2xl font-semibold md:leading-[1.3]"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.7 },
            }}
          >
            I create websites that work beautifully and deliver seamless user
            experiences.
          </motion.p>
        </div>

        <div className="max-w-[45.75rem]">
          <motion.p
            className="text-text_Light text-base md:text-xl md:leading-[1.3]"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.8 },
            }}
          >
            As a<span className="text-orange"> Full Stack Developer,</span> I
            specialize in crafting diverse and innovative web solutions,
            leveraging a wide array of frontend and backend technologies. My
            expertise lies in building dynamic user interfaces and experience
            that captivate clients and companies alike. I harness the power of
            efficient technologies and design systems to create interactive
            solutions that make a lasting impression. My primary goal is to
            deliver{" "}
            <Text text=" optimal, intuitive, and enduring solutions"></Text>{" "}
            that not only fulfill company requirements but also exceed client
            expectations. Committed to ensuring user satisfaction, I strive to
            create seamless and engaging experiences that seamlessly blend
            aesthetic appeal with practical functionality, utilizing my
            expertise in various web frontend and backend frameworks.
          </motion.p>
        </div>
        <motion.div
          className="flex items-center w-full mb-10 space-x-5 md:space-x-7 mt-11 md:mt-14"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.9 },
          }}
        >
          <HireMeButton />
          <ResumeButton />
        </motion.div>
        <motion.div
          className="flex itmes-center space-x-3"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.9 },
          }}
        >
          <MainNav name="About Me">
            <AboutIcon height="4" width="4"/>
          </MainNav>
        </motion.div>
      </div>
    </div>
  )
}

export default MainSection
