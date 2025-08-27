

interface Award {
  src: string;
  alt: string;
}

const awards: Award[] = [
  { src: "/awards/award1.png", alt: "2023 Global Visa Everywhere Initiative (VEI)" },
  { src: "/awards/award2.png", alt: "Top 10 Africa's Business Heroes (Jack Ma Foundation)" },
  { src: "/awards/award3.png", alt: "Nigerian Healthcare Excellence Awards 2022" },
  { src: "/awards/award4.png", alt: "Nigerian Healthcare Excellence Awards 2021" },
  { src: "/awards/award5.png", alt: "African Business Excellence & Leadership Award" },
];

export default function HonorsAwards() {
  return (
    <section className="bg-[#0b2d1b] py-24 flex flex-col items-center">
      <h2 className="text-center text-white text-2xl font-semibold mb-24">
        Honors & Awards
      </h2>

      <div className="flex flex-wrap justify-center gap-16 px-4 lg:max-w-2/3" >
        {awards.map((award, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={award.src}
              alt={award.alt}
              className="w-48 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
