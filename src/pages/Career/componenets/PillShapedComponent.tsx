


interface Props {
    className?: string;
    img?:string;
    containerWidth?:string;
    objectPosition?:string;
}

const PillShapedComponent = ({className,img,containerWidth,objectPosition}:Props) => {
  return (

    
    <div 
    className={`${className} overflow-hidden  relative flex items-center justify-center h-[570px] w-[298px] rounded-[412px] bg-white `}
  
    >
      <div className={`-rotate-[27.3deg] h-[250%] w-[170%] absolute ${containerWidth}`}>
        <img src={img} className={`h-full w-full object-contain  object-center ${objectPosition}`} loading="lazy"/>
      </div>
      <img src='/career/careervector.svg' className='-rotate-[27.3deg] absolute' loading="lazy"></img>
    </div>
    
  )
}

export default PillShapedComponent
