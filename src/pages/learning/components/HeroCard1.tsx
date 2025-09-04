


const pictures = ["","left-[20px]","left-[40px]","left-[60px]","left-[80px]","left-[100px]",]
const HeroCard1 = () => {


  return (
    <div className="rounded-[10px] p-2 lg:p-3 space-y-3 bg-white w-fit absolute top-12 lg:top-28 lg:left-24 ">
      <p className="text-xs md:text-lg">220+ Satisfied people</p>
        <div className="relative h-10">
            {
                pictures.map((pic,index)=>(
                    <div className={`absolute h-8 w-8 lg:h-11 lg:w-11 bg-black rounded-full border-[1px] border-[#5EBD75]  ${pic}`}>
                    <img loading="lazy" src={index < 3 ?`/learning/li${index+1}.jpg` : `/learning/li${index+1}.png`} className={` h-8 w-8 lg:h-11 lg:w-11 bg-black rounded-full  grayscale`}>

                    </img>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HeroCard1
