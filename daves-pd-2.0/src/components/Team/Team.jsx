import TeamAward from './TeamAward';

const Team = () => {
  return (
    <section className='flex flex-col items-center bg-slate-300 text-cente'>
        <h1 className='mt-8 mb-8 text-center text-2xl'>We are London/Hertfordshire based painters and decorators <br></br>with <span>excellent</span> customer service</h1>
        <p className='mb-8'>What makes our painters and decorators different?</p>
        <div className='flex mt-4 w-full lg:flex-row flex-col justify-center items-center lg:justify-evenly my-24'>
            <TeamAward />
        </div>
    </section>
  );
};

export default Team;