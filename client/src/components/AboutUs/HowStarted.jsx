import React from 'react';
import AnantHegde from '/images/guy.png';
import Krithi from '/images/woman.png';
function HowStarted() {
  return (
    <div>
      <section className="w-full bg-[#04000D] py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 items-center">
          {/* Heading and Intro (spans 3 columns) */}
          <div className="md:col-span-3 ml-10">
            <h2 className="mb-2 text-left flex items-center gap-x-2">
              <span
                className="font-bold"
                style={{
                  color: '#7E22CE',
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontSize: '3rem'
                }}
              >
                How
              </span>
              <span
                className="font-bold"
                style={{
                  color: '#fff',
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontSize: '3rem'
                }}
              >
                it started
              </span>
            </h2>
            <p
              className="text-gray-300 mb-2"
              style={{
                fontFamily: 'Roboto, Arial, sans-serif',
                fontSize: '1.1rem',
                lineHeight: 1.45,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#04000D] text-white py-12 px-6 -mt-8">
        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {/* Anant Hegde Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div>
              <img
                src={AnantHegde}
                alt="Anant Hegde"
                className="w-full md:w-80 h-[360px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left flex flex-between mt-4 md:-mt-60 sm:mt-1">
              <h3 className="text-3xl font-bold mb-7">Anant Hegde</h3>
              <p className="text-gray-300"
                style={{
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontSize: '1.05rem',
                  maxwidth: '70rem'
                }}>
                Anant Hegde is a passionate technologist and entrepreneur. He co-founded Qwerty.I/O with the vision of building a vibrant technical community...
              </p>
            </div>
          </div>

          {/* Anant Quote */}
          <div className="flex justify-center mt-4 md:-mt-[180px] mb-4 lg:mb-[100px]">
            <p
              className="text-center text-gray-300 max-w-xs leading-relaxed pl-0 mx-auto"
              style={{
                fontFamily: 'Roboto, Arial, sans-serif',
                fontSize: '1.03rem',
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>

          {/* Kriti Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-14 mt-6 md:-mt-32 sm:mb-10">
            <div className="mt-0 md:-mt-28">
              <img
                src={Krithi}
                alt="Kriti"
                className="w-full md:w-80 h-[360px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left flex flex-row items-center gap-4 mt-6 md:mt-44">
              <p className="text-gray-300"
                style={{
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontSize: '1.05rem',
                }}>
                Kriti is the co-founder and creative force behind Qwerty.I/O. Her leadership and design skills have helped the platform grow into a leading tech platform for students.
              </p>
              <h3 className="text-3xl font-bold">Kriti</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowStarted;
