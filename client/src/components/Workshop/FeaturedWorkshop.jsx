import React from 'react';

const FeaturedWorkshop = () => (
  <section className=" min-h-[320px] text-white flex flex-col md:flex-row items-center py-10 font-roboto mt-20">
    {/* Left: Workshop People Image */}
    <div className="flex-shrink-0 w-[90vw] max-w-[410px] md:w-[430px] md:max-w-[520px] min-h-[220px] bg-gray-300 rounded mr-0 md:ml-12 md:mr-14 overflow-hidden shadow-lg mb-7 md:mb-0">
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
        alt="Workshop participants"
        className="object-cover w-full h-full"
      />
    </div>
    {/* Right: Text */}
    <div className="md:flex-1 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-inter font-semibold mb-3 text-white ">
        Featured workshop 
      </h2>
      <p className="text-base text-white font-roboto leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <p className="text-base text-white font-roboto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
    </div>
  </section>
);

export default FeaturedWorkshop;
