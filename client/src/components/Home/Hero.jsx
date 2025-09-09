import React, { useEffect, useState } from 'react';
import Button from '../Button'; 

const Hero = ({ onLearnMore }) => {
  const [Visible,setVisible]=useState(false)
   useEffect(() => {
      const getCount = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/visible",{
             method: "GET",
             headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();
          setVisible(data.isVisible)
        } catch (err) {
          console.log("Error getting count", err);
        }
      };
      const interval = setInterval(getCount, 2000);
      return () => clearInterval(interval);
    }, []);
  return (
    <section className="text-center py-16 sm:py-20 md:py-28">
      <h1 className="font-roboto mb-4 font-bold tracking-tight text-[3rem] sm:text-5xl md:text-7xl">
        Qwerty<span className="text-purple-400">.i/o</span>
      </h1>

      <p className="mx-auto mb-8 max-w-xl text-base text-gray-300 leading-relaxed md:text-lg">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      </p>

      <div className="flex justify-center items-center gap-4">
        <Button variant="primary" onClick={() => console.log('Learn More clicked!')}>
          Learn more
        </Button>
        
        {Visible && <Button 
          variant="secondary" 
          onClick={onLearnMore} 
          // onClick={() => navigate('/quiz')}
        >
          Quiz →
        </Button>}
      </div>
    </section>
  );
};

export default Hero;
