import star from "/star.svg";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
      <div className='flex justify-center items-center flex-col'>
        <img
          src={imgURL}
          alt='customer'
          className='rounded-full object-cover w-[120px] h-[120px]'
        />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
          <img
            src={star}
            width={24}
            height={24}
            alt='rating star'
            className='object-contain m-0'
          />
          <p className='text-xl font-volkhov text-slate-800'>({rating})</p>
        </div>
        <h3 className='mt-1  text-3xl text-center text-[#1a2e2e] font-bold'>
          {customerName}
        </h3>
      </div>
    );
  };
  
  export default ReviewCard;