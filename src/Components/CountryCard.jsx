import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CountryCard = ({ spot }) => {
  const {
    _id,
    image,
    touristSpotName,
    countryname,
    averageCost,
    travelTime,
    location,
  } = spot;
  return (
    <div>
      <div className=" p-3 rounded-md shadow-sm shadow-gray-300 hover:brightness-75 duration-300 ">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-56 "
        />
        <div className="mt-6 mb-2">
          <span className="inline text-sm font-bold bg-amber-600 p-1 rounded-md tracking-widest uppercase ">
            {countryname}
          </span>
          <h2 className="text-2xl font-bold tracking-wide my-2">
            {touristSpotName}
          </h2>
        </div>
        <div className="my-3 flex justify-between items-start">
          <p className="font-medium">{travelTime} days package</p>
          <p className=" flex items-center">
            <IoLocationOutline className="text-xl" />
            {location}
          </p>
        </div>
        <div className="flex justify-between items-center gap-3">
          <p className="text-xl text-green-400 font-bold">${averageCost}</p>
          <Link
            to={`/spot-details/${_id}`}
            className="bg-blue-600 hover:bg-blue-400 duration-200 tracking-wide text font-bold px-3 py-1 rounded-md">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
CountryCard.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default CountryCard;
