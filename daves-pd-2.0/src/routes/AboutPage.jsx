import React, { useEffect } from "react";

import mapboxgl from "mapbox-gl";

const AboutPage = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY2hhZmZleGQiLCJhIjoiY2tvb3JtZXkzMGVoOTJ6cGNzcnpiY3FhbyJ9.uw49z7s69q2Igcpi5sWcIQ";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-0.34011086719053196, 51.75036254242872], // starting position [lng, lat]
      zoom: 11, // starting zoom
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat([-0.3379617872867584, 51.7526673303486])
      .addTo(map)

  }, []);

  return (
    <section>
      <h1 className="text-center text-2xl my-8">
        This is what we do, and who we are
      </h1>
      <article className="mx-16">
        <p className="mb-8">
          Dave's Painting & Decorating is a trusted, rated and reliable firm of
          painters and decorators. We have been providing customers in St Albans
          and the surrounding area with a high-quality finish for over 30 years.
        </p>
        <p className="mb-8">
          We know that in these busy times people often struggle to find the
          time to decorate their homes. Our friendly, experienced painters and
          decorators help to breathe a new lease of life into homes and offices
          so that our customers can once again enjoy the space in which they
          live. With our 30 years of experience we know which products and
          techniques will provide the best finish that will last.
        </p>
        <p className="mb-8">
          We offer all internal and external painting and decorating services
          for commercial and domestic customers alike and take the time to
          understand everyone’s requirements so that we can complete the work to
          the highest possible specifications. We work hard to ensure that all
          of our painters and decorators work to high standards using the best
          techniques and products for the job.
        </p>
        <div id="map" className="w-full h-96 mb-36"></div>
      </article>
    </section>
  );
};

export default AboutPage;
