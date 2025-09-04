import Card1 from "../../../components/Card1"
import CustomButton1 from "../../../components/button/CustomButton1"
import HeroSection from "../components/HeroSection"



const buttons = [
    {
        title: "E-Commerce",
        onClick: ()=>{}
    },

    {
        title: "Finanace",
        onClick: ()=>{}
    },
    {
        title: "Credit",
        onClick: ()=>{}
    }
]
const DrugstocPay = () => {
  return (
    <>
        <div className="mt-24">
        <HeroSection 
        header="Drugstoc Pay" 
        subheader="Get the medications and health 
        products your business needs right when you need them. 
        With DrugStoc Pay, you can access interest-free credit to 
        instantly stock your pharmacy without the traditional barriers to financing."
        background="bg-[url('/products/dspay.svg')]"
        img="/oursolutions/oursolutions-dspay.png"
        backgroundColor="bg-[#82809E]/70"
        buttons={buttons}
        />
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 px-5 pt-5 sm:px-10 sm:pt-10  lg:px-28 lg:pt-28 rounded-t-[40px] md:rounded-t-[70px] bg-white relative -top-24 md:-top-48">
  <Card1
    header="Instant Access"
    para="Receive immediate credit to purchase products through our platform. No delays. No complicated approval processes."
  />
  <Card1
    header="Zero Interest"
    para="You pay exactly what you borrow. No hidden fees. No interest. Just transparent and straightforward financing"
  />
  <Card1
    header="Flexible Repayment"
    para="Choose repayment options that work for your business. Whether you're a small community pharmacy or a large-scale hospital, we've designed DrugStoc Pay to be adaptable to your cash flow cycle."
  />
  <Card1
    header="100% Transparent"
    para="Our terms are clear and simple. No hidden charges. No fine print. Just real, financial support to grow your healthcare business."
  />
</div>
 <div className="bg-[#F9F9FB] p-5 sm:p-10 lg:p-28  md:flex items-center justify-between">
 <Card1
 className="md:w-1/2"
    header="Get Started Today"
    para="Join thousands of healthcare businesses already benefiting from DrugStoc Pay. Apply easily, get approved quickly, and enjoy the freedom to grow your practice on your terms."
  />

  <CustomButton1 title="Request for a POS" className="bg-[#514F6D] ml-5"/>
 </div>
    

        </div>

    </>
  )
}

export default DrugstocPay
