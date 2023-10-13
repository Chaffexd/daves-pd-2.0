import React from "react";

const paintProviders = [
  {
    id: "x1",
    image: "/public/assets/dulux.webp",
    alt: "Dulux Paints",
  },
  {
    id: "x2",
    image: "/public/assets/farrowball.webp",
    alt: "Dulux Paints",
  },
  {
    id: "x3",
    image: "/public/assets/sanderson.webp",
    alt: "Dulux Paints",
  },
  {
    id: "x4",
    image: "/public/assets/paintpaper.webp",
    alt: "Dulux Paints",
  },
];

const Paints = () => {
  return (
    <div className="flex items-center flex-col justify-center mb-16 bg-slate-300 py-16">
      <h1 className="text-lg my-8">
        Our painters and decorators use superior products and deliver excellent
        quality jobs across London
      </h1>
      <p className="mb-4">We guarantee a perfect result using one of these providers</p>
      <div className="flex items-center flex-row justify-evenly	w-5/6">
        {paintProviders.map((provider) => (
          <img key={provider.id} src={provider.image} alt={provider.alt} className="w-1/4" />
        ))}
      </div>
    </div>
  );
};

export default Paints;
