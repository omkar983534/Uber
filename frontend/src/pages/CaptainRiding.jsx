import React from 'react'
import { Link } from 'react-router-dom'
import { useRef,useState,useEffect } from 'react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'


const CaptainRiding = () => {

    const finishRidePanelRef = useRef(null)

    const [finishRidePanel, setFinishRidePanel] = useState(false)


    useEffect(() => {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })

        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })

        }

    }, [finishRidePanel]);


    return (
        <div className='h-screen relative flex flex-col justify-end'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

            </div>
            <div 
            onClick={(e)=>{
                setFinishRidePanel(true)
            }}
            className='1/5 p-6 flex items-center justify-between relative bg-yellow-400'>
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-gray-200 ri-arrow-up-wide-line"></i></h5>
            </div>

            <div className='h-1/5 p-6 flex items-center justify-between bg-yellow-400'>
                <h4 className='text-xl font-semibold'> 4 KM away</h4>
                <button className='bg-green-600 text-white font-semibold p-3 px-6 rounded-lg'>Complete Ride</button>

            </div>

            <div ref={finishRidePanelRef} className='fixed w-full  h-screen  bottom-0 translate-y-full    z-10  bg-white  p-10 py- px-3 pt-14 '>
                <FinishRide setFinishRidePanel={setFinishRidePanel}  />
            </div>

        </div>
    )
}

export default CaptainRiding
