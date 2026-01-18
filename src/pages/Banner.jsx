import Image from "next/image";
import banner from "../../public/banner.png";


export default function Banner() {
  return (
  
    <section className="bg-[#f5f7fb] rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
        

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Create Digital Experiences <br /> That People Love
          </h1>

          <p className="text-gray-600 mb-8 max-w-lg">
            Our team focuses on building modern, user-friendly web applications
            that help businesses grow faster and smarter in the digital world.
          </p>

          <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition">
            Explore Our Work
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={banner}
            alt="Team working together"
            width={420}
            height={420}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>

  );
}
