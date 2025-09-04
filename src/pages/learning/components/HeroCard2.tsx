import { Header } from "../../../components/Header"
import { Paragraph } from "../../../components/Paragraph"


const HeroCard2 = () => {
  return (
    <div className="rounded-[10px] p-3 space-y-3 bg-white w-80 absolute top-44 -right-12 sm:top-56 lg:top-64 sm:left-12 ">
    <Paragraph color="!text-[#514F6D80]" className="!text-sm md:text-lg">"Drugstoc Learning has been very
useful for me in my pharmacy practice"</Paragraph>
      <div className="relative h-10 flex space-x-3">
          
            <img loading="lazy" src="/learning/li7.png" className="rounded-full w-11 h-11"></img>
            <div>
                <Header variant="tiny">Ciroma Chukwuka</Header>
                <Paragraph variant="tiny" color="!text-[#514F6D80]">Pharmacist</Paragraph>
            </div>
      </div>
  </div>
  )
}

export default HeroCard2
