import { Header } from './Header'
import { Paragraph } from './Paragraph'


interface props {
    img: string
    title: string
    para:string
    className?: string
}

const Card2 = ({img,title,para,className}:props) => {
  return (
    <div className={`rounded-3xl w-[462px] border-[1px] border-[#E8E7EE] ${className} p-3`}>
        <div className='rounded-3xl '>
            <img className='object-contain w-full rounded-3xl' src={img}>

            </img>
        </div>
        <div className='p-5 md:p-10 space-y-5'>
            <Header variant='section'>{title}</Header>
            <Paragraph variant='lead' className='text-[#514F6D80]'>{para}</Paragraph>
        </div>
    </div>
  )
}

export default Card2
