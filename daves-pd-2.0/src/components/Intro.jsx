import React from "react";
import Button from './ui/Button'

import landingImage from '../../public/assets/landing.webp';

const Intro = () => {
  return (
    <div className="lg:flex lg:flex-row flex items-center lg:mt-4 lg:mb-24 mb-44 flex-col h-80">
      <div className="items-center text-black flex flex-col lg:w-1/2 p-4 justify-center bg-blue-200 lg:h-full">
        <h1 className="mb-4 p-4">
          <span className="font-bold italic">Residential</span> and <span className="font-bold italic">commercial</span> Painter and
          Decorator in London, Hemel Hempstead, St. Albans and surrounding areas{" "}
        </h1>
        <Button />
      </div>
      <div className="lg:w-1/2 lg:h-full sm:h-3/6">
        <img src={landingImage} alt="Paint brushes" className="max-h-full w-full" />
      </div>
    </div>
  );
};

export default Intro;
