import React from 'react'

const CaptainDetails = () => {
  return (
    <div >
    <div className='flex  items-center justify-between'>
     <div className='flex  items-center justify-start gap-3'>
       <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCg7Pe8Kvg-9r8hATA6LTrctSjTGO_ypvyw&s" alt="" />
       <h4 className='text-lg font-medium'>Omkar Gupta</h4>
     </div>
     <div>
       <h4 className='text-xl font-semibold '>254.34</h4>
       <p className='text-sm text-gray-600'> Earned</p>
     </div>
    </div>
    <div className='flex justify-center'>
     <div className='text-center'>
       <i className='text-2xl font-thin ri-timer-2-line'></i>
       <h5 className='text-lg font-medium'>10.2</h5>
       <p className='test-small text-gray-600'>Hours Online</p>
     </div>
     <div className='text-center'>
       <i className='text-2xl font-thin ri-speed-up-line'></i>
       <h5 className='text-lg font-medium'>10.2</h5>
       <p className='test-small text-gray-600'>Hours Online</p>
     </div>
     <div className='text-center' >
       <i className='text-2xl font-thin ri-booklet-line'></i>
       <h5 className='text-lg font-medium'>10.2</h5>
       <p className='test-small text-gray-600'>Hours Online</p>
     </div>
    </div>
 
 
 
 </div>
  )
}

export default CaptainDetails
