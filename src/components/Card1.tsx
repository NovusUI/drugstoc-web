

interface Props {
    header: string;
    para?: string;
    list?: string[];
    className?:string
    listClass?:string
    textColor?:string
}

const Card1 = ({header,para,list,className,listClass,textColor}:Props) => {
  return (
    <div className={`p-5  rounded-2xl space-y-3 ${className}`}>
      <h1 className={`text-xl sm:text-2xl text-[#514F6D] ${textColor}`}>{header}</h1>
      <p className={`text-sm sm:text-[16px] text-[#514F6D80] ${textColor}`}>{para}</p>
      <ul className={`list-disc ml-5 text-[#514F6D80] ${listClass} ${textColor}`}>
        {
            list?.map(item=><li className="text-sm sm:text-[16px]">{item}</li>)
        }
        
      </ul>
    </div>
  )
}

export default Card1
