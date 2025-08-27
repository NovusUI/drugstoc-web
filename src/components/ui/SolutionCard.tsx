import { Header } from "../Header";

interface Props {
    wrapperClass: string; // card container styles
    btnClass: string; // button styles
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  const SolutionCard = ({
    wrapperClass,
    btnClass,
    title,
    description,
    image,
    link,
  }: Props) => {
    return (
      <div className={`${wrapperClass} md:rounded-xl p-10  flex flex-col md:flex-row justify-between items-center w-full text-white space-y-10 `}>
        {/* Text */}
        <div className="max-w-sm">
          <Header variant="title" className="mb-5">{title}</Header>
          {/* <h3 className="text-2xl font-semibold  mb-4"></h3> */}
          <p className="mb-20">{description}</p>
          <a href={link} className={`px-10 py-5 text-lg rounded ${btnClass}`}>
            Learn More →
          </a>
        </div>
  
        {/* Image */}
        <div className="mt-6 md:mt-0 md:ml-6 text-">
          <img
            src={image}
            alt={title}
            className="max-h-80 object-contain "
          />
        </div>
      </div>
    );
  };
  
  export default SolutionCard;
  