

interface Props {
    text:string,
    subtext:string,
    img: string,
    className?: string
}

const DownloadBtn = ({text,subtext,img,className}:Props) => {
  return (
    <div className={`text-black bg-white p-2 xl:p-3 flex space-x-1 md:space-x-3 items-center rounded-lg ${className}`}>
      <img src={img} className="object-contain"></img>
      <div className='space-y-[1px] hidden md:block'>
        <h1 className="text-sm">{subtext}</h1>
        <h1 className="lg:text-xl xl:text-2xl">{text}</h1>
      </div>
      
    </div>
  )
}

export default DownloadBtn
