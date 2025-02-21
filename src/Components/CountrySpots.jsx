import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const CountrySpots = () => {
  const spots = useLoaderData();
  return (
    <div>
      <div className="md:w-4/5 w-5/6 mx-auto grid md:grid-cols-3 gap-5">
        {spots.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default CountrySpots;
