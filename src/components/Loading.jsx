import gif from '../assets/loading.gif';

const Loading = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <img src={gif} alt='loader' className='w-[100px]' />
    </div>
  );
};

export default Loading;
