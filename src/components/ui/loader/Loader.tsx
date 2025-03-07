import './loader.css';

export const Loader = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='loader loader-1'>
        <div className='loader-outter'></div>
        <div className='loader-inner'></div>
      </div>
    </section>
  );
};
