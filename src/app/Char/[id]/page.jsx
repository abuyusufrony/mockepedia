import React from 'react';
import Image from 'next/image';
import SingleChar from '../../../../lib/Singlechar';
import backgroundImage from '../../../../public/images/vampire.jpg';
import { CiHeart } from "react-icons/ci";
import { FcAndroidOs } from "react-icons/fc";
import { PiGenderMaleDuotone } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import SingleLoc from '../../../../lib/SingleLoc';
import { FaMapMarkerAlt } from "react-icons/fa";
import Allepi from '../../../../lib/Allepi';
import { FaListUl } from "react-icons/fa";
import logo from '../../../../public/images/Logo.png'


export async function generateMetadata({ params }) {
    const { id } = params;
    const schar = await SingleChar(id);

    return {
        title: schar.name,
        description: schar.species
    };
}

export default async function Page({ params }) {
    const { id } = params;
    const schar = await SingleChar(id);
    const sloc = await SingleLoc(id);
    const epi = await Allepi();

    return (
        <div className="relative min-h-screen overflow-hidden">

            <Image
                src={backgroundImage}
                alt="background"
                fill
                className="absolute object-cover opacity-45"
                priority
            />


            <div className="absolute inset-0 bg-black/70 z-0" />

            <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-8 text-white">
                <div className='logo-conatiner flex justify-center items-center'>
                    <Image src={logo} alt="Rick and Morty Logo" width={250} height={100} className="mb-4" />
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-6">
                    {/* Left: Character Info */}
                    <div className="mt-10 lg:mt-24 text-center lg:text-left lg:w-[45%] flex flex-col items-center lg:items-start space-y-6">
                        <h1 className="text-3xl lg:text-4xl font-semibold mb-2 text-green-300 text-center drop-shadow-md">
                            {schar.name}
                        </h1>

                        <div className="relative group w-48 sm:w-56 lg:w-80 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 cursor-pointer border-2 border-yellow-200">
                            <img
                                src={schar.image}
                                alt={schar.name}
                                className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-500 p-2"
                            />



                        </div>
                    </div>
                    <hr className='text-green-400' />

                    {/* Right: Details */}
                    <div className="   p-4 rounded-lg w-full lg:w-[55%] backdrop-blur-md">
                        {/* Status / Species / Gender Cards */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-between mt-4">
                            <div className="border-2 border-green-400 h-[110px] w-full sm:w-[180px] p-2 rounded-md">
                                <CiHeart className="text-green-400 w-8 h-8 mb-1" />
                                <h2 className="font-mono text-sm">Status</h2>
                                <h2 className="text-lg font-semibold">{schar.status}</h2>
                            </div>
                            <div className="border-2 border-green-400 h-[110px] w-full sm:w-[180px] p-2 rounded-md">
                                <FcAndroidOs className="w-8 h-8 mb-1" />
                                <h2 className="font-mono text-sm">Species</h2>
                                <h2 className="text-lg font-semibold">{schar.species}</h2>
                            </div>
                            <div className="border-2 border-green-400 h-[110px] w-full sm:w-[180px] p-2 rounded-md">
                                <PiGenderMaleDuotone className="text-green-400 w-8 h-8 mb-1" />
                                <h2 className="font-mono text-sm">Gender</h2>
                                <h2 className="text-lg font-semibold">{schar.gender}</h2>
                            </div>
                        </div>

                        {/* Origin */}
                        <div className="border-2 border-green-400 h-[130px] w-full mt-6 p-3 rounded-md">
                            <FaEarthAmericas className="text-green-400 w-8 h-8 mb-1" />
                            <h2 className="font-mono text-sm">Origin</h2>
                            <h2 className="text-lg font-semibold">{sloc.name}</h2>
                        </div>

                        {/* Last Known Location */}
                        <div className="border-2 border-green-400 h-[130px] w-full mt-6 p-3 rounded-md">
                            <FaMapMarkerAlt className="text-green-400 w-8 h-8 mb-1" />
                            <h2 className="text-sm font-bold">Last Known Location</h2>
                            <h2 className="text-lg font-semibold">{schar.location.name}</h2>
                        </div>

                        {/* Episodes Scrollable List */}
                        <div className="border-2 border-green-400 h-[200px] w-full mt-6 overflow-y-auto rounded-md p-3">
                            <div className="flex items-center mb-2">
                                <FaListUl className="text-green-400 w-5 h-5 mr-2" />
                                <span className="font-semibold text-white">Episodes</span>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                {epi.map((e, index) => (
                                    <li className='text-xl font-bold' key={index}>{e.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
