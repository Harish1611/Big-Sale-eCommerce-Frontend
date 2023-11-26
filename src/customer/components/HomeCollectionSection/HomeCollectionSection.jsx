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
  const items = data?.content?.slice(0, 10).map((item) => (
    <div className="">
      <HomeCollectionCard product={item} />

    </div>
  ));
  console.log("Data before Card", data?.content)

  return (
    <div className="relative p-8   sm:p-6 mx-0 sm:mx-10 ">
      <h2 className="text-2xl  text-gray-600 font-serif py-5">{section}</h2>
      <hr className="text-black bg-black w-20 h-[2px] mb-6"></hr>
      <div className="">
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
