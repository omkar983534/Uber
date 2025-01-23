import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>

     <div className='bg-cover bg-center bg-[url(https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/d80b4d5d-3333-4128-81b5-907be7af89d2/bf26acff-821f-496e-af5c-9dbc12714c44.png)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400 '>
        <img className='w-16 ml-8 '  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7py-4 px-4'>
           <h2 className='text-3xl font-bold'>Get Started With Uber</h2> 
           <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 mb-3 '>Continue</Link>


        </div>
     </div>
    </div>
  )
}

export default Start
