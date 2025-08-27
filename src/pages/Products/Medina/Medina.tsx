import Card1 from "../../../components/Card1"
import Card2 from "../../../components/Card2"
import { Header } from "../../../components/Header"
import ExperienceDSApp from "../../../components/ui/ExperienceDSApp"
import HeroSection from "../components/HeroSection"



const buttons = [
    {
        title: "E-Commerce",
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
const Medina = () => {
  return (
    <>
        <div className="mt-24">
        <HeroSection 
        header="Medina" 
        subheader="Procurement Solutions Designed Specifically 
        for Those Who Dedicate Their Lives to Saving Others"
        background="bg-[url('/products/medina.svg')]"
        img="/products/medina.png"
        backgroundColor="bg-[#63BD78]/70"
        buttons={buttons}
        />
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 p-5 sm:p-10 lg:px-28 lg:pt-28 rounded-t-[40px] md:rounded-t-[70px] bg-white relative -top-24 md:-top-48">
  <Card1
    header="Seamless Ordering, Unlimited Medicine Access"
    para="Medicine sourcing in Africa can be chaotic, but with Medina, healthcare providers in Africa can access essential and life-saving pharmaceuticals at the touch of a button, via mobile and web applications."
  />
  <Card1
    header="With great trust comes great responsibility."
    para="DrugStoc achieves Africa-wide distribution of quality medicines with Medina, delivering genuine medications to hard-to-reach areas. Our supply chain is end-to-end traceable and trackable."
  />
  <Card1
    header="Warehousing and Logistics"
    para="We left good behind and embraced Excellence. Medina integrates advanced warehousing and supply chain technology to deliver reliable procurement. Our ultra-modern cold-chain system has revolutionized the logistics of vaccines and other biologicals in Africa."
  />
</div>
<div className="w-full">
    <img src="/products/medina0.png"/>
</div>
<div className="p-5 sm:p-10 lg:px-28 lg:pt-28">
    <Header>What’s in it for you?</Header>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Card2 
        className="w-fit"
         img="/products/medina6.jpg" title="Simplified Sourcing" para="Search, Find, Decide. Tap, tap, tap. With a few taps, you can browse, compare, and order quality pharmaceuticals from trusted manufacturers and suppliers."/>
        <Card2 
            className="w-fit" 
            img="/products/medina1.jpg" 
            title="Comprehensive Product Access" 
            para="See our extensive inventory of 
            pharmaceuticals and specialty medications 
            in one quick click.Easy access for hospitals, 
            clinics and pharmacies no matter your location."/>
        <Card2 
            className="w-fit" 
            img="/products/medina5.jpg" 
            title="Cost Efficiency & Smart Supply
            Chain Optimization" 
            para="Use technology to care for patients smarter. 
            Reduce procurement cost, minimize stock shortage, and enjoy prompt delivery with 
            our intelligent platform that connects you to the best medicine prices."/>
        <Card2 
            className="w-fit" 
            img="/products/medina3.jpg" 
            title="International Standards
            and Quality Assurance" 
            para="Sleep easier with our ISO Certified 
            quality processes and trusted network of suppliers which 
            guarantees authenticity, eliminating risks of counterfeit and substandard medications."/>

        <Card2 
            className="w-fit" 
            img="/products/medina2.jpg" 
            title="Real-Time Order Tracking 
            & Inventory Management" 
            para="Stay in control with real-time order 
            tracking and inventory management features. Monitor deliveries, 
            track order progress, and manage stock levels efficiently, all in one place."/>
        
        <Card2 
            className="w-fit" 
            img="/products/medina4.jpg" 
            title="Secure & Flexible
            Payment Options" 
            para="Medina supports multiple payment options, offering secure transactions tailored to
             the financial and operational needs of healthcare businesses across various regions."/>

    </div>
</div>
<ExperienceDSApp/>
    

        </div>

    </>
  )
}

export default Medina
