


interface Props {
    className?: string
    title: string
    onClick?:()=>void
}

const CustomButton1 = ({className,title,onClick}:Props) => {
  return (
    <button className={`w-40 lg:w-56 p-3 lg:p-5 text-white rounded-lg ${className}`} onClick={onClick}>
        {title}
    </button>
  )
}

export default CustomButton1
