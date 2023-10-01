import { useEffect, useState } from 'react';

const Tour = ({ tour: tour, handleNotIntersted: handleNotIntersted }) => {
  let tourLength = tour.length;
  //console.log(tourLength);
  //length ,loading and responsive is pending
  const [readMore, setReadMore] = useState(false);
  return (
    <main className='flex flex-col bg-gray-300 m-2' key={tour.id}>
      <section className='relative'>
        <img
          src={tour.image}
          alt={tour.name}
          className='w-[100%] h-[50vh] p-1 mb-[10px]'
        />
        <h1 className='absolute top-1 right-1 bg-green-600 text-white p-1 rounded-sm'>
          ${tour.price}
        </h1>
      </section>

      <h1 className='text-center text-xl mb-[10px]'>
        Best Of Paris In 7 Days Tour
      </h1>
      <section>
        {readMore ? (
          <p className='p-4 mb-[10px]'>
            {tour.info}
            <a
              className='text-green-600 font-bold ml-1 cursor-pointer hover:text-green-700 duration-500'
              onClick={() => setReadMore(!readMore)}
            >
              Show less
            </a>
          </p>
        ) : (
          <p className='p-4 mb-[10px]'>
            {tour.info.slice(0, 200)}.....
            <a
              className='text-green-600 font-bold cursor-pointer hover:text-green-700 duration-500'
              onClick={() => setReadMore(!readMore)}
            >
              Read more
            </a>
          </p>
        )}
      </section>

      <button
        className='ml-4 mr-4 pl-2 pr-2 mb-[10px] border border-green-600 text-green-600 hover:bg-green-600 hover:text-white duration-500 rounded-sm'
        onClick={() => handleNotIntersted(tour.id)}
      >
        Not Interested
      </button>
    </main>
  );
};

export default Tour;
