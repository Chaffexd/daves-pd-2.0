import React from 'react';

const icons = [
    {
        icon: '/assets/clock.png',
        id: 1,
        title: "Speedy Service",
        text: "We respond to any inquiry within two hours; we are available for consultation as soon as the next day. Get your London property transformed and book your house painters and decorators for the same week!"
    },
    {
        icon: '/assets/process-improvement.png',
        id: 2,
        title: "Easy Process",
        text: "With our hassle-free painting and decorating service, you can leave everything to us. You’re our priority. All you need to do is to book your consultation. We then inspect, advise, and paint!"
    },
    {
        icon: '/assets/shield.png',
        id: 3,
        title: "Top Quality",
        text: "We have been painting London properties for years and our experienced painters and decorators use only superior materials. Plus, you can call us back anytime."
    },
    {
        icon: '/assets/paint-bucket.png',
        id: 4,
        title: "Experienced Team",
        text: "Our team has over of 25 years of experience, knowing the best tools and materials depending on the desired service. Our professionalism and quality makes us stand out from the crowd."
    }
]

const TeamAward = () => {
  return (
    icons.map(icon => 
        <div key={icon.id} className='mb-12 lg:w-1/5 flex flex-col items-center'>
            <img src={icon.icon} alt={icon.title} className='mb-4 h-16' />
            <h2 className='mb-4 font-bold'>{icon.title}</h2>
            <p className='text-center'>{icon.text}</p>
        </div>
    )
  );
};

export default TeamAward;