import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {

    return (

        <div >
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Finsih this ride  </h3>

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

                <div className='mt-10 w-full'>

                    <form action=""
                        onSubmit={(e) => {
                            sumbitHandler(e);
                        }}
                    >

                        <Link to='/captain-home' className='w-full mt-5 flex justify-center bg-green-600 text-white  font-semibold p-2 rounded-lg '>Finish</Link>

                        <p className='text-xs text-red-500 mt-10'>Click on finish button  if you have completed the payment</p>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default FinishRide
