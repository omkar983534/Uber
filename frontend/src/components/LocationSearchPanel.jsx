import React from 'react'

const LocationSearchPanel = (props) => {
    

        // sample array for locatin
        const locations=[
            "24B, Kappor's cafe near patna bridge udaypur",
            "2A, Kappor's Malthote near patna bridge udaypur",
            "44c, Kappor's Gupta near patna bridge udaypur",
            "12X, Kappor's Jehtaala near patna bridge udaypur",
        ]

    return (
        <div>

            {/* this is just a sample data */}
            {
                locations.map(function(elem, idx){
                    return <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }}
                     className='flex border-2 p-2 rounded items-center gap-4 my-2 border-gray-50 active:border-black justify-start  '>
                    <h2 className='bg-[#eee] h-8 w-12  flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }



            
            
        </div>
    )
}

export default LocationSearchPanel
