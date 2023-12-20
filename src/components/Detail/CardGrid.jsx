import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-10 py-6 w-full h-full">
      <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-2 row-span-2">
        <img
          src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/06/offbeat_airbnb-2.jpg"
          alt="Image 1"
          className="w-full h-full object-cover hover:opacity-90 rounded-tl-xl rounded-bl-xl"
        />
      </div>
      <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-1">
        <img
          src="https://www.meganstarr.com/wp-content/uploads/2021/02/Casa-Moab.jpg"
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-1">
        <img
          src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/06/offbeat_airbnb-2.jpg"
          alt="Image 3"
          className="w-full h-full object-cover rounded-tr-xl"
        />
      </div>
      <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-1">
        <img
          src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/06/offbeat_airbnb-2.jpg"
          alt="Image 4"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-1">
        <img
          src="https://www.meganstarr.com/wp-content/uploads/2021/02/Casa-Moab.jpg"
          alt="Image 4"
          className="w-full h-full object-cover  rounded-br-xl"
        />
      </div>
      <div className="md:hidden">
        <MobileView />
      </div>
    </div>
  );
}

const MobileView = () => {
  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <img
          src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/06/offbeat_airbnb-2.jpg"
          alt="Image 1"
          className="rouded-xl"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://www.meganstarr.com/wp-content/uploads/2021/02/Casa-Moab.jpg"
          alt="Image 2"
        />
      </SplideSlide>
    </Splide>
  );
};
