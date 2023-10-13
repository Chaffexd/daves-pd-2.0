import React from "react";
import StarRating from "./StarRating";
import Footer from '../ui/Footer'

const reviews = [
  {
    id: "r1",
    name: "Chris Davies",
    review:
      "Excellent all round exterior paint work for our Grade II listed Georgian town house. 8 sash windows, front and back door and white wash of brickwork with all problem areas identified and treated for weather proofing. Dave and his colleagues are a friendly and extremely good value for money. Highly recommended.",
    stars: 5,
  },
  {
    id: "r2",
    name: "Irnthu",
    review:
      "Dave and his colleague did a really wonderful job painting. Dave was responsive with the communication and completed the work swiftly.",
    stars: 5,
  },
  {
    id: "r3",
    name: "Shane Tseng",
    review:
      "Dave arrived 15 minutes early for a fairly simple job of treating my bathroom ceiling. He explained the process to me and how to look after my ceiling + silicone to prevent it from getting mold like it had done. Since it's a new build he explained that the extractor fan wasn't doing a very good job and it wasn't removing the steam. He treated the bathroom with an anti-mold paint and renewed the silicone all to a very high standard, in fact, impeccable standard - I haven't seen work so clean. There wasn't a spec of paint to be found anywhere on the glass or floor. Overall Dave was punctual, reliable, honest, knowledgable and trustworthy. He was value for money and done an amazing job. I won't be using any other painter again I know that.",
    stars: 5,
  },
  {
    id: "r4",
    name: "Lesley Shearer",
    review:
      "Dave is punctual and really approachable. He has managed to fit in two tasks for me in the last 4 weeks. Thoroughly recommended Many Thanks for a job well done.",
    stars: 5,
  },
  {
    id: "r5",
    name: "Sandra Hilton",
    review:
      "Dave was really prompt in responding to my enquiry and did the work immediately & efficiently. I'm really happy with the work (painting stairs, landing & Hall)",
    stars: 5,
  },
  {
    id: "r6",
    name: "Gabriela Vulpe",
    review:
      "Dave came to see what needs doing. Dave repaired and painted over many patches on the walls of the house. He mad sure they were diced and the end result is brilliant and this was the next day.",
    stars: 5,
  },
  {
    id: "r7",
    name: "Lisa Gordon",
    review:
      "Dave is efficient, hard working, fast and fuss free. Nothing is a problem as he has initiative.. I'm a regular client.",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <>
      <div className="w-full">
        <ul className="mx-8 flex flex-col items-center">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="w-3/5 mb-8 p-4 bg-slate-200 rounded-md"
            >
              <h1 className="mb-4">{review.name}</h1>
              <p className="mb-4">{review.review}</p>
              <StarRating stars={review.stars} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
