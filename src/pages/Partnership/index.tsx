import Card1 from '../../components/Card1'
import { Header } from '../../components/Header'
import { Paragraph } from '../../components/Paragraph'

const Partnership = () => {
  return (
    <div className="flex flex-col space-y-20  md:space-y-40 md:px-10 xl:px-20 pb-10 pt-36">
     <section className="bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="">
        {/* Left Text Section */}
        <div className='lg:w-1/2 lg:absolute'>
          <Header className=''>
            Building a Resilient, Inclusive Healthcare Supply Chain
          </Header>
          
          <Paragraph className="mt-4 text-gray-600 max-w-lg" color='!text-gray-600'>
            We work with mission-aligned organizations ranging from multinational
            pharmaceutical manufacturers to global health investors and development
            partners. Through these partnerships we fulfil our promise of ensuring access
            to quality healthcare across Africa.
          </Paragraph>
        </div>

        {/* Right Image Grid */}

        <div className="grid grid-cols-1 gap-4 sm:p-6 py-6 sm:grid-cols-4 sm:grid-rows-4 lg:pt-40">
  {/* Row 1 */}
  <div className="sm:col-span-1 sm:col-start-4">
    <img
        loading='lazy'
      src="/partnership/partnerimg-1.png"
      alt="Row 1"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Row 2 */}
  <div className="sm:col-span-1 sm:col-start-3 sm:row-span-2">
    <img
     loading='lazy'
      src="/partnership/partnerimg-3.png"
      alt="Row 2+3 span"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div className="sm:col-span-1 sm:col-start-4">
    <img
     loading='lazy'
      src="/partnership/partnerimg-4.png"
      alt="Row 2 col 4"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Row 3 */}
  <div className="sm:col-span-1 sm:col-start-2">
    <img
     loading='lazy'
      src="/partnership/partnerimg-2.png"
      alt="Row 3 col 2"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div className="sm:col-span-1 sm:col-start-4">
    <img
     loading='lazy'
      src="/partnership/partnerimg-5.png"
      alt="Row 3 col 4"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Row 4 */}
  <div className="sm:col-span-2 sm:col-start-1">
    <img
     loading='lazy'
      src="/partnership/partnerimg-6.png"
      alt="Row 4 left"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div className="sm:col-span-2 sm:col-start-3">
    <img
     loading='lazy'
      src="/partnership/partnerimg-7.png"
      alt="Row 4 right"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>



      </div>
    </section>
    <section className='lg:flex justify-between items-center'>
      <div className='lg:w-1/2'>
      <Card1 
        header='Our Global Pharmaceutical Partners' 
        para='We partner with over 400 pharmaceutical manufacturers globally to combat the distribution of counterfeit medications to ensure traceability, safety, and regulatory compliance.
        We hold exclusive partnerships with leading
         pharmaceutical 
         and healthcare companies 
         that share our commitment to quality and innovation'
         list={[
          "Our collaboration with Hisamitsu brings the globally trusted Salonpas brand to the African market, offering effective pain relief solutions.",
          "Through our partnership with Chi Pharmaceuticals, we expand access to high-quality, affordable medicines across therapeutic areas.",
          "Our alliance with Afriject supports the delivery of safe and essential medical consumables to enhance public health initiatives.",
          "Our exclusive relationship with Sam pharma strengthens our portfolio with essential healthcare products tailored to local needs."
         ]}
      />
      <Card1 
        header='Interested in partnering with DrugStoc?'
        para='We welcome engagement with organizations, institutions, and enterprises that are equally passionate about transforming healthcare access and delivering sustainable impact.
        Fill out the partnership inquiry form or reach us at partnerships@drugstoc.com. Let’s create a healthier future together'
        className='mt-10'
      />
      </div>
      <div className='p-10'>
        <img   loading='lazy'src='/partnership/partnerimg-8.svg' className='self-center'/>
      </div>
    </section>
    </div>
  )
}

export default  Partnership
