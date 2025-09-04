import Card1 from "../../components/Card1"
import { Header } from "../../components/Header"
import { Paragraph } from "../../components/Paragraph"
import CustomButton1 from "../../components/button/CustomButton1"
import PillShapedComponent from "./componenets/PillShapedComponent"


const Career = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="relative w-screen h-[900px] mt-24 bg-[#0B1532] flex justify-between px-10 md:px-20 overflow-hidden">
        {/* Left side - Text */}
        <div className="text-white space-y-10 md:w-1/2 mt-40 absolute md:static z-10">
          <Header className="text-white">Transform Healthcare. Grow With Us.</Header>
          <Paragraph className="!text-[#F9F9FB]">
            As we continue to scale across geographies,
            we are looking for exceptional people with bold ideas, strong values,
            and a shared passion for making healthcare accessible and efficient
          </Paragraph>
          <CustomButton1 
            className="bg-white rounded-sm !text-black" 
            title="View Open Roles" 
          />
        </div>

        {/* Right side - Images */}
        <div className="w-1/2 rotate-[27.3deg] flex space-x-5 absolute right-0 -top-10">
          <div className="space-y-5">
            <PillShapedComponent img="/career/career2.jpg" containerWidth="w-[270%] xl:!w-[250%]"  objectPosition="!object-bottom"  />
            <PillShapedComponent img="/career/career1.jpg" containerWidth="w-[220%]"/>
          </div>
          <div className="pt-80">
            <PillShapedComponent img="/career/career3.jpg" containerWidth=""  className="w-[350px]"/>
          </div>
        </div>
      </div>

      {/* Why join us section */}
      <div className="md:flex items-start justify-between lg:px-28 lg:pt-28  rounded-t-[40px] md:rounded-t-[70px] bg-white relative -top-24 md:-top-48 gap-10">
        <div className="md:w-1/2 p-5 lg:p-0">
          <Card1 
            header="Why Join Us?" 
            para="When you join DrugStoc, you become
            part of a purpose-driven team committed 
            to meaningful impact. Every role, from 
            tech to operations, marketing to data analytics, 
            plays a part in helping people live healthier lives."
          />

          <Card1 
            header="A Culture That Nurtures Potential" 
            para="Our team is built on the foundation of trust, collaboration, and continuous learning. At DrugStoc, we :" 
            list={[
              "Value Diversity: We welcome talent from all walks of life, recognizing that diverse perspectives fuel innovation and drive better outcomes",
              "Champion Integrity: We operate with transparency and hold ourselves to the highest ethical standards.",
              "Invest in Growth: We support our people with the tools, mentorship, and flexibility they need to thrive professionally and personally.",
              "Celebrate Impact: Every task, project, and decision at DrugStoc contributes to a larger mission, enabling access to quality healthcare."
            ]}
            className="space-y-5"
            listClass="space-y-2 lg:space-y-10"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/career/career4.jpg" className="rounded-lg" />
        </div>
      </div>

      {/* Explore opportunities section */}
      <div className="px-5 md:px-20 mb-20">
        <div className="p-5 rounded-2xl w-full bg-[#F9F9FB] flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-10">
          {/* Image */}
          <img src="/career/career6.jpg" className="rounded-lg w-full md:w-1/2" />

          {/* Text + Button */}
          <div className="space-y-5 md:space-y-10 text-center md:text-left">
            <Header>Explore Opportunities</Header>
            <Paragraph>
              Ready to build a healthier world with us?
              Click here to view current openings and submit your application 
              through our secure HR platform.
            </Paragraph>
            <CustomButton1 
              className="bg-[#5EA3D6] rounded-sm" 
              title="View Open Roles" 
            />
          </div>
        </div>
      </div>

      {/** Kickstart your career */}
      <div className="px-5 md:p-10 lg:px-20 pt-10 lg:pt-20 bg-[#5EA3D6] flex flex-col md:flex-row text-white min-h-[600px] md:h-[800px] overflow-hidden">
  {/* Left side - Text */}
  <div className="space-y-6 w-full md:w-1/2 flex flex-col justify-center">
    <Header className="text-white">
      Kickstart Your Career With Purpose
    </Header>
    <Paragraph className="text-white">
      At DrugStoc, we’re building more than a platform — we’re building the 
      future of healthcare in Africa. Whether you're still in school, just 
      graduating, or ready to take your first step into the professional world, 
      there’s a place for your passion, ideas, and ambition here.
    </Paragraph>
    <Paragraph className="text-white">
      Work alongside industry leaders, innovate with purpose, 
      and grow in an environment that values learning, impact, and people.
    </Paragraph>
    <Paragraph className="text-white">
      We believe that great careers start with meaningful opportunities.
      Let’s build the healthcare systems of tomorrow — together.
    </Paragraph>
    <Paragraph className="text-white">
      Ready to Start?<br/>
      Join our internship and entry-level programs 
      designed to grow your skills and your impact.
    </Paragraph>
    <CustomButton1 
      className="bg-white !text-black rounded-sm" 
      title="Explore Opportunities" 
    />
  </div>

  {/* Right side - Image */}
  <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
    <PillShapedComponent 
      className="rotate-[27.3deg] w-[80%] md:w-[562px] md:h-[1096px]" 
      img="/career/career5.jpg" 
    />
  </div>
</div>

    </div>
  )
}

export default Career
