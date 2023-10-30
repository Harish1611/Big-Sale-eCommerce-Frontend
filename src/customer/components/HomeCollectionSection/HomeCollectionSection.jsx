import AliceCarousel from "react-alice-carousel";
import HomeCollectionCard from "../HomeCollectionCard/HomeCollectionCard";
import "./HomeCollectionSection.css";

const HomeCollectionSection = ({ section, data }) => {
  const responsive = {
    0: {
      items: 1,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };
  const items = data?.slice(0, 10).map((item) => (
    <div className="">
      <HomeCollectionCard product={item} />
    </div>
  ));

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl font-extrabold text-gray-600 py-5">{section}</h2>
      <hr className="text-black bg-black w-20 h-[3px] mb-6"></hr>
      <div className="relative border p-5">
        <AliceCarousel
          disableDotsControls
          mouseTracking
          items={items}
          touchtracking
          animationType="fadeout"
          animationDuration={1000}
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default HomeCollectionSection;
