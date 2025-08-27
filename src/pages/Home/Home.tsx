
import NdprCard from "../../components/ui/NpdrCard"
import HonorsAwards from "./components/Award"
import GlobalPartners from "./components/GlobalPartners"
import HeroSection from "./components/HeroSection"
import OurSolutions from "./components/OurSolutions"
import SideKick from "./components/SideKick"


const Home = () => {
  return (
    <>
    <div>
      <HeroSection/>
      <SideKick/>
    </div>
    <OurSolutions/>
    <section>
    <HonorsAwards/>
    </section>
    <GlobalPartners/>
    <section className=" pb-40 pt-10 px-10 lg:px-20">
      
     
      <NdprCard/>
    </section>
    </>
  )
}

export default Home
