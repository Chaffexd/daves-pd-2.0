import React from "react";
import Button from "../ui/Button";

const pledgeList = [
  {
    id: "p1",
    text: "We will be honest and trustworthy",
  },
  {
    id: "p2",
    text: "We will give you a realistic timescales, so you know how long your painting and decorating project will take",
  },
  {
    id: "p3",
    text: "We will provide a final cost before starting painting and decorating",
  },
  {
    id: "p4",
    text: "We will keep you updated continuously",
  },
  {
    id: "p5",
    text: "We will respect your property and maintain a clean environment",
  },
  {
    id: "p6",
    text: "We will arrange a professional cleaning service if needed",
  },
  {
    id: "p7",
    text: "We will be complying with Health & Safety regulations and The Best Practice",
  },
];

const Pledge = () => {
  return (
    <section className="flex mt-12 mb-12">
      <div className="flex flex-col justify-center p-12 w-1/2">
        <h1 className="mb-4">
          Excellent service guaranteed, delivered by our painters and decorators
          across London and Hertfordshire
        </h1>
        <p>
          We value the <span className="font-bold">trust</span> that our clients place in us.
        </p>
        <p>Here is our pledge to you:</p>
        <ul className="mb-8">
          {pledgeList.map((pledgeItem) => (
            <li className="list-disc mt-4" key={pledgeItem.id}>{pledgeItem.text}</li>
          ))}
        </ul>
        <Button />
      </div>
      <div className="flex flex-col items-center p-12 w-1/2">
        <img src={"/public/assets/external2.webp"} className="rounded-b-lg w-4/5" alt="House exterior" />
      </div>
    </section>
  );
};

export default Pledge;
