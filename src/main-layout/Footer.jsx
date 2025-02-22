import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="bg-[url('/images/more/13.jpg')] bg-cover bg-no-repeat bg-center text-white">
        <div className="md:w-2/3 w-5/6 mx-auto py-12 flex md:flex-row flex-col justify-start items-center gap-4">
          <div className=" space-y-5">
            <h1 className="  font-rancho drop-shadow-xl text-3xl font-semibold">
              TravelGo
            </h1>
            <p className="pr-16">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="text-3xl flex justify-start  items-center gap-2">
              <FaFacebook />
              <FaSquareXTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
            <h1 className="  font-rancho drop-shadow-xl text-3xl font-semibold">
              Get in Touch
            </h1>
            <div className="flex flex-col space-y-3">
              <p className="flex justify-start items-center gap-3">
                <IoCall />
                <span>+88 01533 333 333</span>
              </p>
              <p className="flex justify-start items-center gap-3">
                <FaEnvelope />
                <span>info@gmail.com</span>
              </p>
              <p className="flex justify-start items-center gap-3">
                <FaLocationDot />
                <span>72, Wall street, King Road, Dhaka</span>
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="  font-rancho drop-shadow-xl text-3xl font-semibold">
              Connect with Us
            </h2>
            <label className="font-raleway ">
              <input
                required
                type="text"
                placeholder="Name"
                className="input bg-gray-600 border-none input-sm w-full mt-2"
              />
            </label>
            <label className="font-raleway ">
              <input
                required
                type="email"
                placeholder="Email"
                className="input bg-gray-600 border-none input-sm w-full my-2"
              />
            </label>
            <label className="font-raleway ">
              <input
                required
                type="text"
                placeholder="Message"
                className="input bg-gray-600 border-none input-sm w-full h-20 mb-2 "
              />
            </label>
            <input
              className="border-2 border-[#331A15] hover:bg-[#D2B48C] hover:text-white hover:border-[#D2B48C] 
            duration-300  font-rancho text-xl  rounded-full px-3 py-1 "
              type="button"
              value="Send Message"
            />
          </div>
        </div>
      </div>
      <div className="font-rancho w-full h-[50px] overflow-hidden relative">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-1/2 
              flex justify-center items-center gap-3">
          <h2 className="text-xl font-rancho flex-shrink-0  ">
            Copyright TravelGo ! All Rights Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
