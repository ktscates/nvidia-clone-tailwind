import React from 'react';
import search from '../img/search.png';
import cart from '../img/cart.png';
import user from '../img/user.png';
import logo from '../img/logo.png';
import logoblack from '../img/log.svg';
import banner from '../img/banner.jpg';
import photo from '../img/video.jpeg';

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

            <div className="bg-gray-100">
                <div>
                    <img className="h-1/5 w-full" src={banner} alt="banner" />
                </div>

                <h1 className="text-green-700 text-4xl text-center mt-10 uppercase">Shop</h1>
                <div className="flex justify-around my-10 md:mx-32 p-5 -space-x-96">
                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>
                </div>

                <h1 className="text-green-700 text-4xl text-center mt-10 uppercase">Gaming</h1>

                <div className="flex justify-around mt-10 mb-20 md:mx-32 -space-x-96 p-5">
                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>
                </div>

                <h1 className="text-green-700 text-4xl text-center mt-10 uppercase">Latest News</h1>

                <div className="flex justify-around mt-10 mb-20 md:mx-32 -space-x-96 p-5">
                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>
                </div>

                <h1 className="text-green-700 text-4xl text-center mt-10 uppercase">Data Center to Edge</h1>

                <div className="flex justify-around mt-10 mb-20 md:mx-32 -space-x-96 p-5">
                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-300 shadow-2xl w-60">
                        <img src={photo} alt="" />
                        <div className="bg-gray-100 pl-5 py-8 space-y-6">
                            <h1 className="text-green-500">The Ultimate Play</h1>
                            <p>GeForce RTX 30 Series</p>
                        </div>
                    </div>
                </div>

                <div className="bg-black">
                    <div className="flex justify-around w-full p-5">
                        <div className=" divide-y-2 divide-white">
                            <h1 className="text-white text-bold text-2xl mb-3">Corporate Information</h1>
                            <div className="text-green-400 space-y-3">
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                            </div>
                        </div>

                        <div className=" divide-y-2 divide-white">
                            <h1 className="text-white text-bold text-2xl mb-3">Get Involved</h1>
                            <div className="text-green-400 space-y-3">
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                            </div>
                        </div>

                        <div className=" divide-y-2 divide-white">
                            <h1 className="text-white text-bold text-2xl mb-3">News & Events</h1>
                            <div className="text-green-400 space-y-3">
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                                <p>About NVIDIA</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-10 flex py-5 text-center space-x-10 ml-60">
                        <h1 className="text-white mt-3 uppercase text-2xl font-light">Signup for NVIDIA News</h1>
                        <a className="px-5 py-3 bg-green-400 text-white font-bold" href="s">Subscribe</a>
                    </div>

                </div>

            </div>


            <div className="bottom-0 my-8">
                <img className="w-36" src={logoblack} alt="black logo" />
                <div className="space-x-5 text-sm text-gray-500 capitalize -mt-5 mx-5">
                    <a href="da">Privacy Policy</a>
                    <a href="da">Manage My Privacy</a>
                    <a href="da">Legal</a>
                    <a href="da">Accessibility</a>
                    <a href="da">Product Security</a>
                    <a href="da">Contact</a>
                </div>
            </div>

            <p className="bottom-0 mx-5 text-xs text-gray-500 capitalize my-3">Copyright &copy; 2021 NVIDIA Corporation</p>
        </div>
    )
}