import SolutionCard from "../../../components/ui/SolutionCard";




export default function OurSolutions() {
  return (
    <section className="bg-[#F7F8FD] py-16">
      <div className="text-center md:text-left mx-auto md:px-10 lg:px-20">
        {/* Section Header */}
        
        <h2 className="text-3xl font-semibold text-gray-900 text mb-4">
          Our Solutions
        </h2>
        <p className=" text-gray-600  mb-12 md:max-w-1/2 mx-10 md:mx-0">
          Dive into our diverse range of products designed to enhance your
          business operations. From cutting-edge e-commerce solutions to
          comprehensive inventory management systems, we have everything you
          need. Our innovative credit payment options ensure smooth transactions
          for your customers.
        </p>

        {/* Cards */}
        <div className=" md:space-y-10">
         <SolutionCard 
           wrapperClass="bg-gradient-to-r from-[#69C77F] to-[#53B069] pb-0 px-20 items-center"
           btnClass="bg-white text-[#5EBD75]"
           image="/oursolutions/oursolutions-medina.svg"
           link=""
         title="Medina" 
         description="The cutting-edge e-commerce mobile application designed to revolutionize how healthcare providers procure pharmaceutical and healthcare products. "/>
         <div className="flex flex-col md:flex-row justify-between space-x-10">
            <SolutionCard 
            title="Pillometer" 
            btnClass="bg-black text-white"
            description="The cutting-edge e-commerce mobile application designed to revolutionize how healthcare providers procure pharmaceutical and healthcare products."
            wrapperClass="bg-gradient-to-r from-[#5EA3D6] to-[#5394C4] !flex-col py-10  !pb-0 "
             image="/oursolutions/oursolutions-pillometer.png"
             link=""
            />
            <SolutionCard
            btnClass="bg-[#353347] text-white"
             title="Drugstoc Pay"
             description="Get the medications and health products your business needs right when you need them."
             wrapperClass="bg-gradient-to-r from-[#514F6D] to-[#464461] !flex-col  py-10 !pb-0"
             image="/oursolutions/oursolutions-dspay.png"
             link=""
            />
         </div>
         <SolutionCard 
           wrapperClass="bg-gradient-to-r from-[#F9DEA9] to-[#E9C47B] !text-[#1F1E2A] px-20 items-center"
           btnClass="bg-black text-white"
           image="/oursolutions/oursolutions-thegoodpill.png"
           link=""
         title="TheGoodPill" 
         description="GoodPill is a nationwide digital 
         medicine access platform where pharmacies interact with over 100,000 
         customers searching for quality medicines daily, at the best prices."/>
        </div>
      </div>
    </section>
  );
}
