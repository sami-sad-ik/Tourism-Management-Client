import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SpotCard from "../Components/SpotCard";
import { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";
import Marquee from "react-fast-marquee";

const Home = () => {
  const spots = useLoaderData();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <Banner spots={spots} />
      <h2 className="text-center md:text-4xl text-2xl font-bold my-10">
        Popular Tour Packages for You
      </h2>
      <div className="md:w-4/5 w-5/6 mx-auto grid md:grid-cols-3 gap-5">
        {spots.slice(0, 6).map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
      <div className="my-10  mx-auto">
        <h1 className="my-16 text-4xl text-center font-bold">
          Explore Sountheast Asia more
        </h1>
        <Marquee pauseOnHover={true}>
          <div className=" flex bg-base-300 rounded-md">
            {countries.map((country) => (
              <CountryCard key={country._id} country={country} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
