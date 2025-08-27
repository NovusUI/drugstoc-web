



interface Props {
    subHeader: string;
    header: string;
    para?: string[]
}

const Card2 = ({subHeader,header,para}:Props) => {
  return (
    <div className="space-y-5">
            <h1 className="text-lg xl:text-xl text-[#5EBD75] uppercase">{subHeader}</h1>
            <h1 className="text-xl lg:text-3xl xl:text-4xl text-[#514F6D]">{header}</h1>
            {
                para?.map(p=><p className="ld:text-lg xl:text-xl text-[#514F6D80]">{p}</p>)
            }

        </div>
  )
}

export default Card2
