const SideKick = () => {
    return (
      <div className="p-6 md:p-20 pb-0 rounded-t-[40px] md:rounded-t-[70px] bg-white relative -top-24 md:-top-48 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left section */}
        <div className="space-y-7 md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-3xl md:text-5xl leading-tight max-w-md mx-auto md:mx-0">
            We are raising the standard of the pharmacy supply chain across Africa.
          </h1>
          <p className="max-w-md mx-auto md:mx-0">
            DrugStoc is the leading technology-driven pharmaceutical distribution company in Africa that is eradicating counterfeit drugs, providing seamless access to genuine medicines and innovating the pharmaceutical supply chain.
          </p>
          <div className="flex justify-center md:justify-start space-x-10">
            <img
              src="/license/license1.png"
              alt="licensed by PCN"
              className="h-12 w-auto object-contain"
            />
            <img
              src="/license/license2.png"
              alt="iso"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
  
        {/* Right section */}
        <div className="md:w-1/2 w-full flex justify-center ">
          <img
            src="/mapafrica.gif"
            className="w-full max-w-[600px] h-auto object-contain "
            alt="Map of Africa"
          />
        </div>
      </div>
    );
  };
  
  export default SideKick;
  