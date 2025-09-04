import Card1 from "../../components/Card1"
import { Header } from "../../components/Header"
import { Paragraph } from "../../components/Paragraph"


const Services = () => {

    const cardData1 = [
        {
            header: "For Pharmaceutical Manufacturers",
            para: "Make confident, data-informed decisions with comprehensive insights tailored to your specific business goals. Our platform leverages over 300 unique data points to:",
            list: [
                "Reduce operational costs and increase revenue performance",
                "Evaluate the market readiness of new product launches",
                "Identify trends and variables influencing sales performance",
                "Understand real-time market sentiment and product perception",
                "Customize data views to address specific growth opportunities"
            ]
        },
        {
            header: "For Stakeholders & Decision Makers",
            para: "Whether you’re leading policy change, managing healthcare supply chains, or scaling a pharmacy network, our market intelligence tools are designed to guide your next strategic move. We support:",
            list: [
                "Consumer Health Brands",
                "Pharmaceutical Distributors and Wholesalers",
                "Government and Regulatory Agencies",
                "Non-Governmental Organizations (NGOs)",
                "Retail Pharmacies and Chain Stores",
                "Health Maintenance Organizations (HMOs) and Insurance Providers"
            ]
        }
    ]

    const cardData2 = {
        header:'Data Integrity You Can Trust',
        para:"We’ve collaborated with the data science team at Rippleworks to ensure the accuracy, transparency, and accountability of our datasets. All our insights comply with global F.A.I.R. (Findable, Accessible, Interoperable, Reusable) data standards."
    }

    const cardData3 = [
        {
            header: "Expand with Confidence",
            para: "Open up new frontiers in healthcare with a partner that values quality, transparency, and impact. Our platform is purpose-built to reduce waste, improve visibility, and accelerate product availability where it’s needed most.",
            list: [
                "Pharmacy & OTC Products",
                "Small Medical Devices",
                "Medical Consumables",
                "Rapid Diagnostic Tests",
                "Cold Chain Therapies",
                "Specialty Products for Tertiary Care"
            ]
        },
        {
            header: "For Stakeholders & Decision Makers",
            para:`We offer a full suite of e
            nd-to-end services tailored to ensure your successful 
            entry and sustainable growth across emerging markets:`,
            list: [
                "Regulatory Affairs & Registration Services",
                "Dynamic, Data-Driven Pricing & Demand Forecasting",
                "Live Product Tracking & Traceability",
                "Integrated Distribution & Warehousing Network",
                "Omnichannel Marketing & Merchandising Services",
             
            ]
        }
    ]

    const cardData4 = {
        header:'Powered by Insight. Delivered with Impact.',
        para: `Our hybrid distribution model is b
        uilt on deep market intelligence and robust 
        infrastructure. We ensure your medical products reach 
        the right audience efficiently, reliably, and transparently.`
    }


  return (
    <div className="flex flex-col space-y-20  md:space-y-40 md:px-10 lg:px-20 pb-10 pt-36">
      <div className="p-4 md:p-8 flex flex-col w-full bg-[#E8E7EE] space-y-10 sm:space-y-20 md:rounded-xl">
        <div className="w-full rounded-3xl">
            <img  loading='lazy' src="/servicepage/servicesimg1.jpg" className="rounded-xl w-full"></img>
        </div>
        <div className=" lg:w-2/3">
            <Header className="uppercase mb-5">market insight</Header>
            <Header variant="subtitle" className="text-lg sm:text-2xl lg:text-4xl ">Data-Driven Market Intelligence for the Global Pharmaceutical Ecosystem</Header>

            <Paragraph className="mt-5 text-sm sm:text-xl " color="!text-[#514F6D80]">
                We work with mission-aligned organizations ranging from
                 multinational pharmaceutical manufacturers to global 
                 health investors and development partners. Through these 
                 partnerships we fulfil our promise of ensuring access to 
                 quality healthcare across Africa.
            </Paragraph>
          
        </div>
        <div className="flex  flex-col md:flex-row space-x-5 lg:w-4/5 space-y-10 md:space-y-0">
            {
                cardData1.map(data=><Card1 header={data.header} para={data.para} list={data.list} className="w-full md:w-1/2 bg-white py-10"/>)
            }
            

           
        </div>
        <div className="flex md:flex-row flex-col items-center md:space-x-5 gap-10 lg:w-4/5">
            <Card1 header={cardData2.header} para={cardData2.para} className="w-full md:w-1/2 bg-white py-10"/>
            <p className="text-[#5EBD75] text-xl sm:text-2xl md:w-1/2">Ready to elevate your decision-making? Email us at insights@drugstoc.com to request access.</p>
        </div>
        
      </div>
     
     
     {/* section2 */}
      <div className="p-4 md:p-8 flex flex-col w-full bg-[#E8E7EE] space-y-10 sm:space-y-20 md:rounded-xl">
        <div className="w-full rounded-3xl">
            <img  loading='lazy' src="/servicepage/servicesimg2.jpg" className="rounded-xl w-full"></img>
        </div>
        <div className=" lg:w-2/3">
            <Header  className="uppercase text-lg sm:text-3xl lg:text-5xl mb-5"> 
               market access solution:
            </Header>
            <Header variant="subtitle" className="text-lg sm:text-2xl lg:text-4xl ">
                Seamlessly Connecting Healthcare Products to High-Potential Markets
            </Header>
            <Paragraph className="mt-5 text-sm sm:text-xl text-[#514F6D80]">
                Navigating entry into Africa’s fast-growing healthcare 
                landscape? Or expanding into other emerging markets worldwide?
                 At DrugStoc, we bridge the gap between global pharmaceutical 
                 manufacturers and underserved healthcare systems through 
                 a next-generation market access strategy that prioritizes precision, 
                 compliance, and performance.
            </Paragraph>
        </div>
        <div className="flex  flex-col md:flex-row space-x-5 lg:w-4/5 space-y-10 md:space-y-0">
            {
                cardData3.map(data=><Card1 header={data.header} para={data.para} list={data.list} className="w-full md:w-1/2 bg-white py-10"/>)
            }
            

           
        </div>
        <div className="flex md:flex-row flex-col items-center md:space-x-5 gap-10 lg:w-4/5">
            <Card1 header={cardData4.header} para={cardData4.para} className="w-full md:w-1/2 bg-white py-10"/>
            <Paragraph className="text-xl sm:text-2xl md:w-1/2" color="!text-[#5EBD75]">Ready to enter or scale in high-growth markets? Reach out to us at insights@drugstoc.com to begin your journey.</Paragraph>
        </div>
        
      </div>
    </div>
  )
}

export default Services
