import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const spot = useLoaderData();
  const {
    image,
    touristSpotName,
    countryname,
    location,
    visitors,
    description,
    travelTime,
    averageCost,
  } = spot;
  return (
    <div className="w-4/5 mx-auto my-12 flex justify-center items-start gap-5  ">
      <div className="md:w-1/2 h-[460px]">
        <img className="h-[460px] object-cover rounded-md" src={image} alt="" />
      </div>
      <div className="md:w-1/2 flex flex-col text-xl space-y-5">
        <h1 className="text-5xl font-semibold">{touristSpotName}</h1>
        <p>
          <span className="font-bold">Country </span>: {countryname}
        </p>
        <p>
          <span className="font-bold">Location </span>: {location}
        </p>
        <p>
          <span className="font-bold">Travel Time </span>: {travelTime} days
        </p>
        <p>
          <span className="font-bold">Visitors per year </span>: {visitors}
        </p>
        <p>
          <span className="font-bold">Average Cost </span>: ${averageCost}
        </p>
        <p>
          <span className="font-bold">Short Description</span> : {description}
        </p>
      </div>
    </div>
  );
};

export default SpotDetails;
