import Card2 from "./Card2";


interface Props {
    subHeader: string;
    header: string;
    imgSrc: string;
    para: string[]
}

const Card1 = ({subHeader, header, para, imgSrc}:Props) => {
  return (
    <div className="md:flex justify-evenly items-center space-x-10 lg:space-x-20">
        <img className=" md:w-1/2 object-cover mb-10 md:mb-0" src={imgSrc} loading="lazy" ></img>
        <Card2 subHeader={subHeader} header={header} para={para}/>
      
    </div>
  )
}

export default Card1
