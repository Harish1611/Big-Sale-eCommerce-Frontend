import "./ScrollText.css";
const ScrollText = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <div className="text-white-600 text-md animate-scrolling-text">
        30% off on first order! | 30% off on first order! | 30% off on first
        order! | 30% off on first order!
      </div>
    </div>
  );
};

export default ScrollText;
