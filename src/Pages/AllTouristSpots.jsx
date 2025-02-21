import { useLoaderData } from "react-router-dom";
import SpotCard from "../Components/SpotCard";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const AllTouristSpots = () => {
  const [open, setOpen] = useState(false);
  const AllSpots = useLoaderData();
  const [sortedSpots, setSortedSpots] = useState(AllSpots);
  const handleLowToHigh = () => {
    const sorted = [...sortedSpots].sort(
      (a, b) => a.averageCost - b.averageCost
    );
    setSortedSpots(sorted);
    setOpen(false);
  };
  const handleHighToLow = () => {
    const sorted = [...sortedSpots].sort(
      (a, b) => b.averageCost - a.averageCost
    );
    setSortedSpots(sorted);
    setOpen(false);
  };
  return (
    <div className="my-8 md:w-4/5 w-5/6 mx-auto ">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center btn text-2xl font-semibold text-white bg-amber-600 hover:bg-amber-700
         duration-300">
        Sort by {open === true ? <IoIosArrowUp /> : <RiArrowDownSLine />}
      </button>
      {/* dropdown menu */}
      <ul
        className={`absolute z-10 duration-300 bg-white border rounded text-center hover:cursor-pointer text-black w-56 ${
          open ? "top-[138px]" : "hidden"
        }`}>
        <li
          onClick={handleLowToHigh}
          className=" border-b hover:bg-gray-200 py-1 ">
          Lowest to Highest
        </li>
        <li onClick={handleHighToLow} className="hover:bg-gray-200 py-1">
          Highest to Lowest
        </li>
      </ul>
      <div className="my-14 grid md:grid-cols-3 gap-5 ">
        {sortedSpots.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpots;
