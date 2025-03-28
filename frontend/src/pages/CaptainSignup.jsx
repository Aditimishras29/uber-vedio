import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem("token", data.token)
      navigate("/captain-home")
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 space-y-8">
        <div className="flex justify-center">
          <img
            className="h-16 w-auto"
            src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg"
            alt="Uber logo"
          />
        </div>
        
        <h2 className="text-center text-3xl font-bold text-gray-900">Captain Sign Up</h2>
        
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label className="text-xl font-medium text-gray-700">What's our Captain's Name</label>
            <div className="mt-2 flex gap-4">
              <input
                required
                className="bg-gray-100 appearance-none rounded w-1/2 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-lg"
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="bg-gray-100 appearance-none rounded w-1/2 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-lg"
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label className="text-xl font-medium text-gray-700">What's our Captain's email</label>
            <input
              required
              className="mt-2 bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-lg"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label className="text-xl font-medium text-gray-700">Enter Password</label>
            <input
              required
              className="mt-2 bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div>
            <label className="text-xl font-medium text-gray-700">Vehicle Information</label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <input
                className="bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-lg"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                className="bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-lg"
                type="text"
                placeholder="License Plate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
              <select
                className="bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-lg"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="">Select Vehicle Type</option>
                <option value="Car">Car</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Auto Rickshaw">Auto Rickshaw</option>
              </select>
              <input
                className="bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-lg"
                type="number"
                placeholder="Passenger Capacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Create an Account
          </button>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-base text-gray-600">
            Already have an account?{" "}
            <Link to="/captain-login" className="font-medium text-blue-600 hover:text-blue-500">
              Login here
            </Link>
          </p>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          This site is protected by reCAPTCHA and the{" "}
          <a href="#" className="text-blue-600 hover:underline">Google Privacy Policy</a> and{" "}
          <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
