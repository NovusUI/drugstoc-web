import { Link } from "react-router-dom";
import { Header } from "../Header";
import { Paragraph } from "../Paragraph";

interface Props {
    wrapperClass: string; // card container styles
    btnClass: string; // button styles
    title: string;
    description: string;
    image: string;
    link: string;
    headerClass?: string;
  }
  
  const SolutionCard = ({
    wrapperClass,
    btnClass,
    title,
    description,
    image,
    link,
    headerClass,
  }: Props) => {
    return (
      <div className={`${wrapperClass} md:rounded-xl p-10  flex flex-col md:flex-row justify-between items-center w-full text-white space-y-10 `}>
        {/* Text */}
        <div className="max-w-sm ">
          <Header variant="title" color={headerClass} className={`mb-5 lg:!text-[2.2rem]`}>{title}</Header>
          {/* <h3 className="text-2xl font-semibold  mb-4"></h3> */}
          <Paragraph className="mb-20" color={headerClass}>{description}</Paragraph>

          <Link to={link} className={`px-10 py-5 text-lg rounded-lg ${btnClass} hover:shadow-2xl`}>
            Learn More →
          </Link>
        </div>
  
        {/* Image */}
        <div className="mt-6 md:mt-0 md:ml-6 text-">
          <img
            src={image}
            alt={title}
            className="max-h-80 object-contain "
            loading="lazy"
          />
        </div>
      </div>
    );
  };
  
  export default SolutionCard;
  