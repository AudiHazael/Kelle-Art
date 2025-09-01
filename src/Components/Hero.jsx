import React from "react";

function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center lg:items-center bg-[#394033]"
      id="Hero"
      data-aos="fade-in"
    >
      <div
        className="max-w-7xl flex h-fit justify-center items-center mx-auto px-4 md:px-0 md:py-0 space-y-6 text-[#e6d8c3]"
        data-aos="fade-up"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 m-2 px-6 py-16 shadow-xl md:shadow-none border border-white/10 rounded-md md:p-8 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Left Side */}
          <div
            className="md:col-span-6 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1
              className="text-2xl md:text-4xl font-bold pb-4 leading-snug"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Art By Kelle
            </h1>
            <p
              className="text-base md:text-lg pb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Explore a world of original paintings, digital art, and
              commissioned works crafted with passion and authenticity. Each
              piece is more than just art—it’s an experience, a journey, and a
              reflection of life’s vibrant moments.
            </p>

            {/* CTA Links */}
            <div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                className="inline-block px-6 md:px-8 py-3 font-semibold text-[#e6d8c3] transition bg-[#735c40] rounded-md hover:text-[#402421] hover:bg-[#e6d8c3]"
                href="#commission"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Commission Artwork
              </a>
              <a
                href="#portfolio"
                className="inline-block px-6 md:px-8 py-3 font-semibold text-[#e6d8c3] transition border-2 border-[#735c40] rounded-md hover:bg-[#e6d8c3] hover:text-[#402421] hover:border-none"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Explore Portfolio
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div
            className="md:col-span-6 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <img
              src="https://via.placeholder.com/400x400"
              alt="hero image"
              className="hidden lg:block"
              loading="lazy"
              data-aos="fade-left"
              data-aos-delay="900"
            />
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div
        className="flex flex-col justify-center items-center py-6 md:py-0"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <img
          src="https://via.placeholder.com/400x400"
          alt="hero image"
          className="block lg:hidden"
          loading="lazy"
          data-aos="fade-up"
          data-aos-delay="1100"
        />
      </div>
    </div>
  );
}

export default Hero;
