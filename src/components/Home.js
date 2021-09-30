import React from 'react';
import search from '../img/search.png';
import cart from '../img/cart.png';
import user from '../img/user.png';
import logo from '../img/logo.png';
import logoblack from '../img/log.svg'

export default function Home() {

    return(
        <div>  
            <div className="fixed w-full top-0">      
                <div className="bg-white flex justify-around px-5 py-3 border-b-2">
                    <div className="flex justify-between space-x-5">
                        <img className="w-28" src={logo} alt="logo" />
                        <h1 className="hidden lg:block">Products</h1>
                        <h1 className="hidden lg:block">Solutions</h1>
                        <h1 className="hidden lg:block">Industries</h1>
                        <h1 className="hidden lg:block">For You</h1>
                    </div>
                    
                    <div className="flex justify-between space-x-4 uppercase">
                        <h1 className="hidden lg:block">Shop</h1>
                        <h1 className="hidden lg:block">Drivers</h1>
                        <h1 className="hidden lg:block">Support</h1>
                        <img className="w-6" src={search} alt="search" />
                        <img className="w-6" src={cart} alt="cart" />
                        <img className="w-6" src={user} alt="user" />
                    </div>
                </div>
            </div>

            <h1 className="uppercase md:text-3xl text-green-600 text-4xl mx-72 lg:mx-52 mt-20 mb-10 font-semibold xs:mx-0">Select your Location</h1>
            
            <div className="uppercase lg:mx-52 mx-72 sm:mx-0">
                <h1 className="text-3xl font-bold">The Americas</h1>
                <div className="grid grid-cols-4 mt-5 font-light">
                    <div className="space-y-2">
                        <h1>Argentina</h1>
                        <h1>Colombia</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>Brasil</h1>
                        <h1>Mexico</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>Canada</h1>
                        <h1>Peru</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>Chile</h1>
                        <h1>United State</h1>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mt-20">Europe</h1>
                <div className="grid grid-cols-4 mt-5 font-light">
                    <div className="space-y-2">
                        <h1>Belgium</h1>
                        <h1>Germany</h1>
                        <h1>Israel</h1>
                        <h1>Poland</h1>
                        <h1>Finland</h1>
                        <h1>Rest of Europe</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>Belgium</h1>
                        <h1>Spain</h1>
                        <h1>Netherlands</h1>
                        <h1>Russia</h1>
                        <h1>Sweden</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>Czech Republic</h1>
                        <h1>France</h1>
                        <h1>Norway</h1>
                        <h1>Romania</h1>
                        <h1>Turkey</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>Denmark</h1>
                        <h1>Italy</h1>
                        <h1>Austria</h1>
                        <h1>Switzerland</h1>
                        <h1>United Kingdom</h1>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mt-20">Asia</h1>
                <div className="grid grid-cols-4 mt-5 font-light">
                    <div className="space-y-2">
                        <h1>Australia</h1>
                        <h1>Korea</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>China</h1>
                        <h1>Singapore</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>India</h1>
                        <h1>Taiwan</h1>
                    </div>

                    <div className="space-y-2">
                        <h1>Japan</h1>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mt-20">Middle East</h1>
                <div className="grid grid-cols-4 mt-5 font-light mb-10">
                    <div className="space-y-2">
                        <h1>Middle East</h1>
                    </div>
                </div>

                <div>
                    <img className="w-36 -mx-6" src={logoblack} alt="black logo" />
                    <div className="space-x-5 text-sm text-gray-500 capitalize -mt-5 ">
                        <a href="da">Privacy Policy</a>
                        <a href="da">Manage My Privacy</a>
                        <a href="da">Legal</a>
                        <a href="da">Accessibility</a>
                        <a href="da">Product Security</a>
                        <a href="da">Contact</a>
                    </div>
                </div>

                <p className="text-xs text-gray-500 capitalize my-3">Copyright &copy; 2021 NVIDIA Corporation</p>
            </div>
        </div>
    )
}