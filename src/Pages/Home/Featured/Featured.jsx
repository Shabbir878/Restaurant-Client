import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading="Check It Out" heading="Featured Item" />

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div className="md:ml-10 space-y-4">
          <p>Aug 20,2026</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas
            vel, voluptas magni aut ea, voluptates mollitia tempora numquam
            asperiores nobis porro atque quia natus, sit eaque ad? Ad a fugit
            ullam facilis! Ab, maxime aperiam nesciunt dolore fugit fugiat
            neque, id sit nostrum, doloremque impedit architecto. Amet, natus
            voluptatem!
          </p>

          <button className="btn btn-outline border-0 border-b-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
