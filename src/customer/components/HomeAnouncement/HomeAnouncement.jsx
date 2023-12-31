import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeAnouncement = () => {
 

  const navigate= useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full mx-auto sm:px-36 sm:py-24 border-t-4 sm:border-none border-black bg-gray-100 overflow-hidden ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-[25rem]"
            src="https://i.pinimg.com/564x/4f/0e/ae/4f0eae7968b70c2784e702f1bd1583ba.jpg"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase  tracking-wide text-2xl sm:text-6xl sm:leading-[4rem]		 text-black font-bold">
            Explore Wide <br className=" hidden sm:block"/> Range of<br /> Collections
          </div>
          <p className="block mt-1 text-lg pt-1 sm:pt-6 leading-tight font-medium text-black hover:underline">
            Incredible Quality & Comfort
          </p>
          <p className="mt-1 sm:mt-2 text-slate-500 text-sm sm:text-md pb-6">
            Our team put together a great group of treading and retro sheo
            collection. If you are looking for something that can take your
            style to next level? We have a list of shoes to do just that.
          </p>
          <button onClick={()=>navigate('/men/footware/shoes')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900   px-6 py-2 rounded	shadow-lg shadow-indigo-500/40 hover:shadow-blue-500/50">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAnouncement;
