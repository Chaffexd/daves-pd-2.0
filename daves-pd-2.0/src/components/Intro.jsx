import React from "react";
import Button from './ui/Button'

import landingImage from '../../public/assets/landing.webp';

const Intro = () => {
  return (
    <div className="flex h-80">
      <div className="items-center text-black flex flex-col w-1/2 p-4 justify-center bg-blue-200">
        <h1 className="mb-4 p-4">
          <span className="font-bold italic">Residential</span> and <span className="font-bold italic">commercial</span> Painter and
          Decorator in London, Hemel Hempstead, St. Albans and surrounding areas{" "}
        </h1>
        <Button />
      </div>
      <div className="w-1/2">
        <img src={landingImage} alt="Paint brushes" className="max-h-full w-full" />
      </div>
    </div>
  );
};

export default Intro;
