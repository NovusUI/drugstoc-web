
import DownloadBtn from '../button/DownloadBtn'

const ExperienceDSApp = () => {
  return (
    <section className="p-5 sm:p-10 pt-20 lg:p-20">
    <div className="rounded-3xl w-full  bg-[url('/about/abivec.svg')] bg-cover bg-center bg-no-repeat bg-[#514F6D] flex flex-col-reverse md:flex-row items-center px-5 pt-5 sm:px-10  sm:pt-10 md:pr-5 lg:pr-10 xl:pr-20">

          <div className="md:w-2/5 lg:w-fit">
              <img src="/about/abtimg4.png" loading='lazy'/>
          </div>
          <div className="text-white space-y-5 md:space-y-2 lg:space-y-5 xl:space-y-8 md:w-3/5 lg:w-fit">
              <h1 className="text-2xl md:text-xl lg:text-3xl xl:text-5xl md:w-2/3">
                  Experience the DrugStoc App
              </h1>
              <p className="text-sm">Manage your orders, track deliveries, 
                  discover new products, and enjoy exclusive offers, all from your phone.
              </p>
              <div className="space-x-5 md:space-x-10 flex">
                  <DownloadBtn link="https://apps.apple.com/ng/app/drugstoc-mobile/id1467205425" text="App Store" subtext="Download on the" img="/about/apple.svg"/>
                  <DownloadBtn link='https://play.google.com/store/apps/details?id=com.drugstoc.app' text="Google Play" subtext="Get it on" img="/about/playstore.svg"/>
              </div>
          </div>
      </div>

    </section>
  )
}

export default ExperienceDSApp
