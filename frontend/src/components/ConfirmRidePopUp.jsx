import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

  const [otp, setOtp] = useState('')
  

  const sumbitHandler=(e)=>{
    e.preventDefault()
  }
  return (

    <div >
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.setRidePopUpPanel(false)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>confirm ride to start</h3>

      <div className='flex items-center justify-between mt-3 bg-yellow-300 rounded p-3 '>
        <div className='flex items-center gap-3 '>
          <img
            className='h-12 rounded-full object-cover w-12 '
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCg7Pe8Kvg-9r8hATA6LTrctSjTGO_ypvyw&s" alt="" />
          <h2 className='text-lg font-medium'>Omkar Gupta</h2>
        </div>
        <h5 className='text-lg font-semibold '>2.4 KM</h5>
      </div>


      <div className='flex gap-2 justify-between flex-col items-center'>

        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'></p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'></p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹200</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>

        <div className='mt-6 w-full'>

          <form action=""
          onSubmit={(e)=>{
            sumbitHandler(e);
          }}
          >
            <input 
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 ' type="text" placeholder='Enter OTP' />

            <Link to='/captain-riding' className='w-full mt-5 flex justify-center bg-green-600 text-white  font-semibold p-2 rounded-lg '>Confirm</Link>

            <button onClick={() => {
              props.setConfirmRidePopUpPanel(false)
              props.setRidePopUpPanel(false)

            }} className='w-full mt-1 bg-red-600 text-white-700  font-semibold p-2 rounded-lg'>Cancel</button>

          </form>

        </div>

      </div>
    </div>

  )
}

export default ConfirmRidePopUp
