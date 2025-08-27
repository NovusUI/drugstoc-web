import Card2 from "../../components/Card2"
import { Header } from "../../components/Header"
import { Paragraph } from "../../components/Paragraph"
import CustomButton1 from "../../components/button/CustomButton1"


const cardContent = [
  {
    title: "Comprehensive Course Library",
    para: "Offer a diverse range of courses covering various medical specialties, from primary care to advanced procedures.",
    img:"/learning/learn1.png",
  },
  {
    title: "Flexible Learning",
    img: "/learning/learn2.png",
    para:"Allow healthcare providers to learn at their own pace with on-demand access to courses and materials.",
  },
  {
    title: "Expert Instructors:",
    img: "/learning/learn3.png",
    para:"Highlight experienced healthcare professionals as instructors, ensuring high-quality content.",
  },
  {
    title: "Continuing Education Credits",
    img: "/learning/learn4.png",
    para:"Emphasize the platform's ability to help providers meet their continuing education requirements.",
  },
  {
    title: "Interactive Learning",
    img: "/learning/learn5.png",
    para:"Showcase features like quizzes, simulations, and case studies to enhance engagement.",
  }
]
    



const Learning = () => {

 

  return (
    <div>
      <div>
        {/* hero section */}
        <div className="mt-24 w-full  bg-[url('/learning/learning.svg')] bg-cover bg-center bg-no-repeat bg-[#E2F3E6] md:flex justify-between  items-center px-5 sm:px-10 xl:px-20 pt-10 pb-24 md:pb-48 lg:pb-48">

          <div className="space-y-5 lg:space-y-10 md:w-1/2">
            <Header>Empower Your Healthcare Practice with Cutting Edge Knowledge</Header>
            <Paragraph>DrugStoc Learning equips healthcare providers with the
               essential knowledge and tools to elevate their practice and
               increase revenue. Get exclusive access to our webinar replays, 
              allowing you to learn at your own pace anytime, anywhere.
            </Paragraph>
            <div className="space-x-2 sm:space-x-5">
              <CustomButton1 title="Get Started" className="bg-[#5EBD75]"/>
              <CustomButton1 title="Login" className="bg-[#121118]"/>
            </div>
          </div>
           <div className="md:w-1/2 relative h-full ">
              <img src="/learning/learningHeroImg1.png" className=""></img>
              <img src="/learning/learningHeroImg2.png" className="absolute"></img>
              <img src="/learning/learningHeroImg3.png" className="absolute top-0"></img>
              <img src="/learning/learningHeroImg4.png" className="absolute"></img>
           </div>
        </div>
        <div className="p-6 md:p-20 pb-0 rounded-t-[40px] md:rounded-t-[70px] bg-white relative -top-24 md:-top-48  gap-10">
          <Header>Why use DrugStoc learning?</Header>
          <div className="flex flex-wrap justify-center gap-8 px-4  pt-20" >
            {
              cardContent.map(card=><Card2 para={card.para} img={card.img} title={card.title}/>)
            }
          </div>
        </div>
      </div>

   
      
    </div>
  )
}

export default Learning
