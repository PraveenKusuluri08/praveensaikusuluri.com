import Link from "next/link"

type Props = {
  name: string
  handleClick?:() =>void
  isToolgeButton:boolean
}

const LinkWrapper = ({ name,handleClick,isToolgeButton }: Props) => {
  return (
    <Link
      href={`${name == "home" ? "/" : name.toLowerCase().replace(" ", "")}`}
      className="text-base hover:text-blue_drak  text-text capitalize w-fit duration-300 font-normal tracking-wide"
      onClick ={isToolgeButton ?handleClick:()=>{}} 
    >
      {name}
    </Link>
  )
}

export default LinkWrapper
