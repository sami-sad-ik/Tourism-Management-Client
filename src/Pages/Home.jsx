import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";

const Home = () => {
  const spots = useLoaderData();

  return (
    <div>
      <Banner spots={spots} />
      <h2 className="text-center md:text-4xl text-2xl font-bold my-10">
        Popular Tour Packages for You
      </h2>
    </div>
  );
};

export default Home;
