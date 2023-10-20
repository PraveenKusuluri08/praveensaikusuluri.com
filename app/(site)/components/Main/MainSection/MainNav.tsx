import Link from 'next/link';
import React from 'react'

type Props = {
    name:string;
    children : React.ReactNode
}

const MainNav = ({name,children}:Props) => {
  return (
    <button className={`flex items-center justify-center rounded-md px-3 md:px-5 w-fit h-11 border-2 border-buttonBg hover:border-text duration-300 group cursor-pointer`}>
        {/* TODO: Add about page link */}
        <Link href={"#about"}>
            <div className="flex w-full h-full items-center">
                <span className="text-text_Light group-hover:text-text text-sm mr-3 font-semibold capitalize">
                    {name}
                </span>
                <div className="h-4 w-4">{children}</div>
            </div>
        </Link>
    </button>
  )
}

export default MainNav