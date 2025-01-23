import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        }
        // console.log(userData)
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
            
        if (response.status === 201) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token',data.token);

            navigate('/home');


        }
    }catch(error){
        console.error('Error during registration:', error.response ? error.response.data : error.message)
    }

        setEmail('');
        setPassword('');

    }
    return (
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
                    <button
                        className='bg-black text-white mb-4 rounded px-3 py-1  w-full text-lg  placeholder:text-base'
                    >Login</button>
                </form>
                <p className='text-center'>
                    New Here?
                    <Link
                        to='/signup'
                        className="text-blue-600 "
                    >Create new account</Link>
                </p>

            </div>
            <div>
                <Link

                    to='/captain-login'

                    className='bg-emerald-600 flex items-center justify-center text-white mb-4 rounded px-3 py-1  w-full text-lg  placeholder:text-base'

                >Sign in as captian</Link>
            </div>
        </div>
    )
}

export default UserLogin
