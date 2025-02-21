import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { image, countryname, description } = country;
  return (
    <Link
      to={`/countries/${countryname}`}
      className="flex flex-col justify-center items-center py-5">
      <div className="w-56 h-56 rounded-full brightness-75 ">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="text-center px-10 max-w-xs">
        <h1 className="text-3xl font-semibold">{countryname}</h1>
        <p>{description.slice(0, 100)}...</p>
      </div>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
