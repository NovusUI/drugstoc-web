import ExperienceDSApp from "../../components/ui/ExperienceDSApp"
import Card1 from "./components/Card1"
import Card2 from "./components/Card2"


const cardContent = [
    {
        imgSrc:"/about/abtimg1.png",
        subHeader:"WHO WE ARE",
        header:"The largest pharma supply chain technology company in Africa.",
        para:["We lead impactful health innovations across Africa, closing care gaps with intelligent technology.",
        "Our anti-counterfeit supply chain and extensive distribution network unlock access to genuine, life-saving medications, ensuring positive health outcomes for millions of Africans who seek sound healthcare daily."
    ]
    },
    {
        imgSrc:"/about/abtimg2.jpg",
        subHeader:"What we do",
        header:"Building the Largest Healthtech Infrastructure for the Next 1 billion Africans.",
        para:["With a deep understanding of Africa’s unmet health needs, we create and distribute innovative healthcare technology.",
        "Our ecosystem guarantees that healthcare providers have uninterrupted access to advanced technology, knowledge support and life-saving medications to serve their growing communities."
    ]
    }
]

const cardContent2 = [
    {

        subHeader:"WHO WE ARE",
        header:"The largest pharma supply chain technology company in Africa.",
    
    },
    {
        subHeader:"What we do",
        header:"Building the Largest Healthtech Infrastructure for the Next 1 billion Africans.",
    }
]

const AboutUs = () => {
  return (
    <div className="flex flex-col  pb-10">
      <section className="w-screen mt-24">
        <img className="h-96 md:h-fit w-full object-cover" src="/about/ds_employee.png" alt="ds_employee"></img>
      </section>
      <section className="p-5 sm:p-10 pt-20 lg:p-20 space-y-20 w-full">
        {
            cardContent.map(card=>    <Card1 imgSrc={card.imgSrc} subHeader={card.subHeader} header={card.header}  para={card.para}/>)
        }

     
      </section>
      <section className="md:flex space-x-10 space-y-10 md:space-y-0 p-5 sm:p-10 pt-20 lg:p-20 ">
            {
                cardContent2.map(card=><Card2 header={card.header} subHeader={card.subHeader} />)
            }
      </section>
      <section className="p-5 sm:p-10 pt-20 lg:p-20">
            <div className="rounded-lg bg-[#5EBD75] px-10 py-10 lg:px-20 md:flex justify-between items-center  md:space-x-20 ">
                <div className="space-y-5 md:w-1/2 text-white">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl ">Join the Movement</h1>
                    <p className="md:text-lg lg:text-xl">Ready to make a difference? At DrugStoc, you’ll collaborate with a diverse
                         team of doctors, pharmacists, engineers, 
                         financial analysts, and innovators united by one goal: transforming healthcare. 
                        Explore opportunities and be part of something bigger.
                    </p>
                    <button className="w-full md:w-[244px] h-[56px] text-black bg-white flex justify-around items-center capitalize mb-10">
                        <p>visit out career page</p>
                    </button>
                </div>
                <div className="">
                    <img className="object-cover" src="/about/abtimg3.png"></img>
                </div>
            </div>
      </section>
      <ExperienceDSApp/>
    
    </div>
  )
}

export default AboutUs
