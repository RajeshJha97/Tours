import { useState, useEffect } from 'react';
import Tour from './Tour';
import Loading from './Loading';

const Tours = () => {
  const url = 'https://course-api.com/react-tours-project';
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    setTours(data);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(!isLoading);
  }, []);
  //handle not interested
  const handleNotIntersted = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <main className='flex flex-col items-center py-[70px]  '>
        <h1 className='text-5xl mb-[20px]'>Our Tours</h1>
        <div className='bg-green-600 w-[140px] h-1 mb-[20px]'></div>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[95vw] shadow-md  rounded-xl bg-blue-100 mt-4 '>
          {tours.map((tour) => {
            return (
              <Tour
                tour={tour}
                key={tour.id}
                handleNotIntersted={handleNotIntersted}
              />
            );
          })}
        </section>
      </main>
    </>
  );
  // return (
  //   {loading ?
  //      :
  // }

  // );
};

export default Tours;
