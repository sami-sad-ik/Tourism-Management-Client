import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const spot = useLoaderData();
  console.log(spot);
  const handleUpdateTourist = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryname = form.countryname.value;
    const touristSpotName = form.touristSpotName.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const travelTime = form.travelTime.value;
    const visitors = form.visitors.value;
    const image = form.image.value;
    const userName = form.userName.value;
    const seasonality = form.seasonality.value;
    const description = form.description.value;
    const touristSpot = {
      countryname,
      touristSpotName,
      location,
      averageCost,
      travelTime,
      visitors,
      image,
      userName,
      seasonality,
      description,
    };
    console.log(touristSpot);
    fetch(`http://localhost:5000/update/${spot._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            text: "Tourist Spot Updated",
            icon: "success",
          });
          //   form.reset();
        }
      });
  };
  return (
    <div className="md:w-2/3 w-5/6 mx-auto">
      <div className="bg-base-300 rounded-md my-5 py-8">
        <h2 className=" md:pt-12  font-rancho drop-shadow-xl text-center text-4xl font-semibold">
          Update Tourist Spot here
        </h2>
        <form onSubmit={handleUpdateTourist}>
          <div className="flex lg:flex-row flex-col  justify-center gap-3 md:px-28 px-6 md:py-3">
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Country Name</span>
              </label>
              <label className="font-raleway">
                <select
                  required
                  name="countryname"
                  defaultValue={spot.countryname}
                  placeholder="Enter Country Name"
                  className="input border-none input-sm w-full">
                  <option value="" disabled>
                    -- Select a Country --
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Cambodia">Cambodia</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Tourist Spot Name</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="text"
                  name="touristSpotName"
                  defaultValue={spot.touristSpotName}
                  placeholder="Enter Tourist Spot Name"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="flex lg:flex-row flex-col  justify-center gap-3 md:px-28 px-6 md:py-3">
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Location</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="text"
                  name="location"
                  defaultValue={spot.location}
                  placeholder="Enter Location"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Short Description</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="text"
                  name="description"
                  defaultValue={spot.description}
                  placeholder="Enter Short Description"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="flex lg:flex-row flex-col  justify-center gap-3 md:px-28 px-6 md:py-3">
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Average Cost</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="number"
                  name="averageCost"
                  defaultValue={spot.averageCost}
                  placeholder="Enter Average Cost"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Seasonality</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="text"
                  name="seasonality"
                  //   defaultValue={spot.seasonality}
                  placeholder="Enter Seasonality"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col  justify-center gap-3 md:px-28 px-6 md:py-3">
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Travel Time</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="number"
                  name="travelTime"
                  defaultValue={spot.travelTime}
                  placeholder="Enter Travel Time"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Image URL</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="text"
                  name="image"
                  defaultValue={spot.image}
                  placeholder="Enter Image URL"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="flex lg:flex-row flex-col  justify-center gap-3 md:px-28 px-6  md:py-3">
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">Total Visitors per year</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="number"
                  name="visitors"
                  defaultValue={spot.visitors}
                  placeholder="Enter Total Visitors per year"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
            <div className="flex flex-col justify-start gap-2 md:w-1/2">
              <label>
                <span className="  font-medium">User Name</span>
              </label>
              <label className="font-raleway">
                <input
                  required
                  type="text"
                  name="userName"
                  defaultValue={spot.userName}
                  placeholder="Enter User Name"
                  className="input border-none input-sm w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col  justify-center gap-3 md:px-28 px-6  md:py-3"></div>
          <div className="md:w-[790px] mx-auto md:px-0 px-6 my-5  ">
            <input
              required
              className=" btn btn-block font-rancho text-lg bg-amber-600  hover:bg-amber-700 duration-500"
              type="submit"
              value="Update Tourist Spot"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
