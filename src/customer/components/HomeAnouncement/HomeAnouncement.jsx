const HomeAnouncement = () => {
  return (
    <div className="w-full mx-auto sm:px-36 sm:py-24 bg-white overflow-hidden ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-[25rem]"
            src="https://i.pinimg.com/564x/4f/0e/ae/4f0eae7968b70c2784e702f1bd1583ba.jpg"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-4xl sm:text-6xl sm:leading-[4rem]		 text-black font-bold">
            Explore Wide <br></br> Range of<br></br> Collections
          </div>
          <p className="block mt-1 text-lg pt-6 leading-tight font-medium text-black hover:underline">
            Incredible Quality & Comfort
          </p>
          <p className="mt-2 text-slate-500 pb-6">
            Our team put together a great group of treading and retro sheo
            collection. If you are looking for something that can take your
            style to next level? We have a list of shoes to do just that.
          </p>
          <button className="text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 hover:bg-blue-700  px-6 py-2 rounded	shadow-lg shadow-indigo-500/40 hover:shadow-blue-500/50">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAnouncement;
