import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {captain, setCaptain} = React.useContext(CaptainDataContext);
    const navigate=useNavigate();

    

    const submitHandler = async (e) => {
        e.preventDefault();
       const captain={
            email: email,
            password
        }
        // console.log(captain)

        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain);

        if(response.status===201){  
            const data=response.data;
               
            setCaptain(data.captain);
            localStorage.setItem('token',data.token);
            navigate('/captain-home');
        }

        setEmail('');
        setPassword('');

    }

    return (
        <div>
            <div className='p-5 h-screen flex flex-col justify-between'>
                <div>
                    <img
                        className='w-16 mb-10'
                        src="data:image/png;base64,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" alt="" />
                        
                    <form
                        onSubmit={(e) => {
                            submitHandler(e);
                        }}
                    >
                        <h3 className='text-lg font-medium mb-1'>What's our Captain Email</h3>
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
                        <button
                            className='bg-black text-white mb-4 rounded px-3 py-1  w-full text-lg  placeholder:text-base'
                        >Login</button>
                    </form>
                    <p className='text-center'>
                        Jion a fleet?
                        <Link
                            to='/captain-signup'
                            className="text-blue-600 "
                        >Register As a captian</Link>
                    </p>

                </div>
                <div>
                    <Link

                        to='/login'

                        className='bg-orange-600 flex items-center justify-center text-white mb-4 rounded px-3 py-1  w-full text-lg  placeholder:text-base'

                    >Sign in as User</Link>
                </div>
            </div>
        </div>
    )
}

export default CaptainLogin
