import Card1 from "../../../components/Card1"
import { Header } from "../../../components/Header"
import { Paragraph } from "../../../components/Paragraph"
import CustomButton1 from "../../../components/button/CustomButton1"
import HeroSection from "../components/HeroSection"



const buttons = [
    {
        title: "SAAS",
        onClick: ()=>{}
    },
    {
        title: "Point of Sale",
        onClick: ()=>{}
    },
    {
        title: "Hardware",
        onClick: ()=>{}
    },
    {
        title: "Web App",
        onClick: ()=>{}
    },
    {
        title: "Mobile App",
        onClick: ()=>{}
    }
]

const Pillometer = () => {


  return (
    <>
    <div className="mt-24">
        <HeroSection 
        header="Pillometer" 
        subheader="Pillometer is a cloud-based Pharmacy 
        Operating System that simplifies operations, drives 
        growth and enhances patient care."
        background="bg-[url('/products/pillometersvg.svg')]"
        img="/products/pillometer0.png"
        backgroundColor="bg-[#2277BA]/70 !pb-24  "
        buttons={buttons}
        
        />
       <div className="flex flex-col lg:flex-row lg:items-start  justify-between px-5 pt-5 sm:px-10 sm:pt-10  lg:px-28 lg:pt-28   rounded-t-[40px] md:rounded-t-[70px] bg-white relative -top-24 md:-top-48 gap-10">
            <Card1 
                header="Efficient Pharmacy Operations in One Solution:"
                list={[
                    "Manage Patients Smarter: Record patient history, purchases, and test results for tailored care.",
                    "Get Inventory Alerts: Avoid losses due to expiries and stockouts with automated notifications.",
                    "Save Money: Replace multiple devices (laptop, printer, scanner) with one device.",
                    "Boost Efficiency: Complete tasks faster with integrated features.",
                    "Stay Secure: Enjoy reliable cloud storage and 24/7 technical support.",
                    "Access Anytime: Stay operational with our built-in power backup."
                ]}
                listClass="space-y-5"
                className=" lg:w-1/2"
                />
                <img  loading='lazy' className=" lg:w-1/2" src="/products/pillometer1.png"/>
       </div>
       <div className="p-5 sm:p-10  lg:p-28 bg-[#F9F9FB] lg:flex justify-between items-center space-y-10">
              <div className="space-y-5">
                <Card1 
                    header="Hardware Features"
                    list={[
                        "Touchscreen Tablet: Conveniently record customer purchases in real time",
                        "Inbuilt Thermal Printer: Print labels and receipts without external devices.",
                        "Point of Sale: Integrated barcode scanner, inbuilt thermal printer, and touchscreen tablet.",
                        "Plug-and-Play Setup: Get started in just 10 minutes!",
                        "Mini UPS Battery: Uninterrupted business operations with backup power for up to 12 hours"
                    ]}
                    listClass="space-y-5"
                />
                <CustomButton1 title="Order Pillometer Now" className="bg-[#5EA3D6]"/>
                </div>
                <div className="md:flex space-x-10 w-full justify-center ">
                    <div className=" space-y-10 flex flex-col items-center justify-center w-full md:w-fit">
                        <div className="bg-white rounded-2xl w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] p-10">
                            <img  loading='lazy' src="/products/pillometer2.png"></img>
                        </div>
                        <div className="bg-white rounded-2xl w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] p-10">
                            <img  loading='lazy' src="/products/pillometer3.png"></img>
                        </div>
                    </div>
                    <div className=" space-y-10 mt-10 md:mt-20 flex flex-col items-center justify-center w-full md:w-fit">
                        <div className="bg-white rounded-2xl w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] p-10">
                        <img  loading='lazy' src="/products/pillometer4.png"></img>
                        </div>
                        <div className="bg-white rounded-2xl w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] p-10">
                            <img  loading='lazy' src="/products/pillometer5.png"></img>
                        </div>
                    </div>
                </div>
                
       </div>
       <div 
        style={{
            background: "linear-gradient(to right, #5EA3D6, #4B70D6)",
          }}
       className="w-full  p-5 sm:p-10 lg:px-28 lg:pt-10 md:flex items-center justify-between">
            <div className="md:w-1/2 space-y-5">
                <Card1 header="Meet D.O.R.A AI" 
                    para="Your smart pharmacy assistant that enhances:"
                    list={[
                        "Medication Safety: Alerts for drug interactions, contraindications, and allergens.",
                        "Inventory Insights: Predict demand and optimize your stock.",
                        "Sales Intelligence: Analyze business data to grow revenue.",
                        "Personalized Care: Track and improve patient outcomes with ease."
                    ]}
                    listClass="space-y-5"
                    textColor="text-white"
                />
                <div className="space-x-2 sm:space-x-5">
                    <CustomButton1 title="Download App" className="bg-white !text-black"/>
                    <CustomButton1 title="Get Hardware" className="bg-black"/>
                </div>

            </div>
            <img   loading='lazy'className="sm:w-1/2 relative -bottom-5 sm:-bottom-10" src="/dora.png"/>
        </div>
        <div className="px-5 sm:px-10 lg:px-20 xl:px-36 py-20">
            <div className="sm:flex justify-between items-center p-5 rounded-lg bg-[#F9F9FB]">
                <img   loading='lazy' src="/products/pillometer6.png" className="sm:w-1/2 rounded-lg"/>
                <div className="space-y-5 sm:w-1/2 p-5 sm:p-10 xl:p-20">
                    <Header>Ready to Transform Your Pharmacy?</Header>
                    <Paragraph>Get pillometer today</Paragraph>
                    <div className="space-x-2 sm:space-x-5 space-y-5">
                        <CustomButton1 title="Order Now" className="bg-[#5EA3D6]  sm:!w-36"/>
                        <CustomButton1 title="Request a Demo" className="bg-black sm:!w-40"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pillometer
