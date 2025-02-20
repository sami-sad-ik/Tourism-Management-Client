import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CountryCard from "../Components/CountryCard";

const Home = () => {
  const spots = useLoaderData();

  return (
    <div>
      <Banner spots={spots} />
      <h2 className="text-center md:text-4xl text-2xl font-bold my-10">
        Popular Tour Packages for You
      </h2>
      <div className="md:w-4/5 w-5/6 mx-auto grid md:grid-cols-3 gap-5">
        {spots.slice(0, 6).map((spot) => (
          <CountryCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default Home;
