import { Header } from "../../../components/Header";
import { Paragraph } from "../../../components/Paragraph";

const SideKick = () => {
    return (
      <div className="pt-6 px-6 md:pt-20 md:px-20 rounded-t-[40px] md:rounded-t-[70px] bg-white relative -top-24 md:-top-48 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left section */}
        <div className="space-y-7 md:w-1/2 w-full text-center md:text-left">
          <Header className="max-w-2xl mx-auto md:mx-0">We are raising the standard of the pharmacy supply chain across Africa.</Header>
          <Paragraph className="max-w-md mx-auto md:mx-0">
             DrugStoc is the leading technology-driven pharmaceutical distribution company in Africa that is eradicating counterfeit drugs, providing seamless access to genuine medicines and innovating the pharmaceutical supply chain.
          </Paragraph>
          <div className="flex justify-center md:justify-start sm:space-x-10 px-10 sm:px-0">
            <img
              src="/license/license1.png"
              alt="licensed by PCN"
              loading="lazy"
              className="h-12 w-auto object-contain"
            />
            <img
              src="/license/license2.png"
              alt="iso"
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
  
        {/* Right section */}
        <div className="md:w-1/2 w-full flex justify-center ">
          <img
            src="/mapafrica.gif"
            className="w-full max-w-[600px] h-auto object-contain "
            alt="Map of Africa"
            loading="lazy"
          />
        </div>
      </div>
    );
  };
  
  export default SideKick;
  