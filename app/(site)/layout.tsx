"use client"

import { Poppins } from "next/font/google"
import { useMediaQuery } from "./hooks/useMediaQuery"
import { useEffect, useState } from "react"
import { LazyMotion, domAnimation } from "framer-motion"
import Header from "./components/Header/Header"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

function SiteLayout({ children }: any) {
  const matches = useMediaQuery("(max-width: 768px)")
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <LazyMotion features={domAnimation}>
        <Header/>
      {children}
      </LazyMotion>
    </>
  )
}
export default SiteLayout
