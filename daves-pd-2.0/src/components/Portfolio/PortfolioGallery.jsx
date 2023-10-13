import PortfolioItem from "./PortfolioItem";

const workImages = [
  {
    image: "/assets/residential.webp",
    id: 0,
    title: "Commercial painting and decorating",
    info: "Quality painting and decorating services in London and surrounding areas",
  },
  {
    image: "/assets/residential2.webp",
    id: 1,
    title: "Residential painting and decorating",
    info: "Any type of residential projects, regardless of size, area, or colour.",
  },
  {
    image: "/assets/external.webp",
    id: 2,
    title: "Exterior painting and decorating",
    info: "Creating an exterior which is smart and aesthetically beautiful.",
  },
  {
    image: "/assets/commercial.webp",
    id: 3,
    title: "Office painting and decorating",
    info: "Any office, big or small, with no disturbance to your business.",
  },
];

const PortfolioGallery = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 my-24 w-full">
      {workImages.map((image) => (
        <PortfolioItem
          key={image.id}
          source={image.image}
          title={image.title}
          info={image.info}
        />
      ))}
    </section>
  );
};

export default PortfolioGallery;
