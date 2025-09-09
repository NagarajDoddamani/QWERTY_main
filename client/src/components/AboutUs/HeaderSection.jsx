import React from 'react';
import man from '../../assets/man.svg';

function HeaderSection() {
  return (
    <section className="w-full bg-[#04000D] py-14 px-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-1 md:gap-1 lg:gap-1">
        {/* LEFT: Heading Text Block */}
        <div className="md:w-[43%] w-full flex flex-col items-start ml-10">
          {/* "about" sits tight above the main title */}
          <span
            className="lowercase text-[#7E22CE] font-medium"
            style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '3rem',
              lineHeight: 1.15,
              letterSpacing: '0.01em',
              marginBottom: '-1rem',
              marginLeft:'2.5rem' // Tighten vertical spacing
            }}
          >
            about
          </span>
          <h1
            className="font-roboto font-bold tracking-tight text-[3rem] sm:text-5xl md:text-7xl text-white mb-3"
            style={{
              lineHeight: 1.06,
              letterSpacing: '-0.01em',
              textAlign: 'left',
              marginTop: 0, // Remove default margin
            }}
          >
            Qwerty.i/o
          </h1>
          <p
            className="text-gray-300"
            style={{
              fontFamily: 'Roboto, Arial, sans-serif',
              fontSize: '1.07rem',
              lineHeight: 1.52,
              maxWidth: '30rem',
              textAlign: 'left',
              marginBottom: 0,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
         
        </div>
        {/* RIGHT: Large, tightly placed square image */}
        <div className="md:w-[45%] w-full flex justify-center md:justify-end sm:mt-5">
          <img
            src={man}
            alt="About Qwerty.i/o"
            className="w-[18rem] h-[19rem] md:w-[40rem] md:h-[22rem] object-cover "
            style={{
              borderRadius: 0, // Absolutely square
              boxShadow: '0 8px 32px 0 rgba(48,20,80,0.13)',
              marginTop: 0,
            }}
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;