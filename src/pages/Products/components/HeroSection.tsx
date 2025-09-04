import { Header } from "../../../components/Header"




type buttons = {
    title : string,
    onClick : ()=>void
}

interface Props {
    header: string
    subheader: string
    buttons: buttons[]
    img: string
    background: string
    backgroundColor: string
}
const HeroSection = ({header, subheader,buttons, img, background,backgroundColor}:Props) => {
  return (
    <div className={`w-full    ${background}  bg-cover bg-center bg-no-repeat `}>
        <div className={`w-full px-5 sm:px-10  md:px-20 pt-10  lg:flex justify-between items-center  pb-24  md:pb-48 text-white   bg-cover bg-center bg-no-repeat ${backgroundColor} `}>
      <div className="space-y-5  lg:w-1/2">
        <Header className="text-white">{header}</Header>
        <Header className="text-white" variant="subsection">{subheader}</Header>
        <div className="space-x-3.5 space-y-3.5">
        {
            buttons?.map(button=>(
                <button className="px-3 py-2  rounded-lg border-[1px]" onClick={button.onClick}>{button.title}</button>
            ))
        }
        </div>
      </div>
      <img  loading='lazy' className="lg:max-w-1/2 "  src={img} />
    </div>
    </div>
    
  )
}

export default HeroSection
