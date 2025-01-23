import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const CaptainSignup = () => {

  const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');

const [vehicleColor, setVehicleColor] = useState('');
const [vehiclePlate, setVehiclePlate] = useState('');
const [vehicleCapacity, setVehicleCapacity] = useState('');
const [vehicleType, setVehicleType] = useState('');

  const {captain, setCaptain} = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
   const captainData={
      fullname: {
        firstname: firstName,
        lastname: lastName
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
    // console.log(captianData);
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);

    if(response.status===201){
      const data=response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigate('/captain-home');
    }


    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('');


  }


  return (
    <div>
        <div>
      <div className='p-5 h-screen flex flex-col justify-between'>
        <div>
          <img
            className='w-16 mb-10'
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className='text-lg font-medium mb-1'>What's Our Captian</h3>
            <div className='flex flex-row justify-between gap-2'>
              <input className='bg-[#eeee] mb-4 rounded px-3 py-1 border w-full text-lg  placeholder:text-base'
                type="text" required placeholder='Firstname'
                value={firstName}
                onChange={(e) => {
                  setFirstname(e.target.value)
                }}
              />

              <input
                value={lastName}
                onChange={(e) => {
                  setLastname(e.target.value)
                }}
                type="text" placeholder='Lastname' className='bg-[#eeee] mb-4 rounded px-3 py-1 border w-full text-lg  placeholder:text-base' />
            </div>


            <h3 className='text-lg font-medium mb-1'>What's Your Email</h3>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

              }}
              className='bg-[#eeee] mb-4 rounded px-3 py-1 border w-full text-lg  placeholder:text-base'
              type="email" required placeholder='email@example.com' />
            <h3 className='text-lg font-medium mb-1' >Enter Password</h3>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className='bg-[#eeee] mb-4 rounded px-3 py-1 border w-full text-lg  placeholder:text-base'
              type="password" required placeholder='Password' />
              <h3 className='text-lg font-medium mb-1'>Vehicle Information</h3>
              <input
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
                className='bg-[#eeee] mb-4 rounded px-3 py-1 border w-full text-lg placeholder:text-base'
                type="text" required placeholder='Vehicle Color' />
              <input
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
                className='bg-[#eeee] mb-4 rounded px-3 py-1 border w-full text-lg placeholder:text-base'
                type="text" required placeholder='Vehicle Plate' />
              <input
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
                className='bg-[#eeee] mb-4 rounded px-3 py-1 border w-full text-lg placeholder:text-base'
                type="number" required placeholder='Vehicle Capacity' />
              <select
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
                className='bg-[#eeee] mb-4 rounded px-3 py-1 border w-full text-lg placeholder:text-base'
                required>
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            {/* <div className='flex flex-row gap-2 mb-2  '>
              <input type="checkbox" name="" id="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              <p className='text-xs'>
                I agree with this <span className='underline '>terms and conditions</span>
                              </p>
            </div> */}
            <button
              className='bg-black text-white mb-4 rounded px-3 py-1  w-full text-lg  placeholder:text-base'
            >Create Captain Account</button>

          </form>
          <p className='text-center'>
            Already User?
            <Link
              to='/captain-login'
              className="text-blue-600 "
            >Login Here</Link>
          </p>

        </div>
        <div>


        </div>
      </div>

    </div>
    </div>
  )
}

export default CaptainSignup
