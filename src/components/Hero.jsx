import { Link } from "react-router-dom";
import image1 from "../assets/comfy1.png";
import image2 from "../assets/comfy2.png";
import image3 from "../assets/comfy3.png";
import image4 from "../assets/comfy4.png";

const carouselImages = [image1, image2, image3, image4];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 item-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight">
          I&apos;m Self Learner
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          We Think that React is the most powerful framework since laravel was
          published, we are not comparing them cause we cant, but if we are
          tallking about NEXT so its much better then laravel.
        </p>

        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>

      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div className="carousel-item" key={image}>
              <img
                src={image}
                alt="product"
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
