import React from 'react';
import Image from 'next/image';
import SingleChar from '../../../../lib/Singlechar';
import backgroundImage from '../../../../public/images/vampire.jpg';
import { CiHeart } from "react-icons/ci";
import { FcAndroidOs } from "react-icons/fc";
import { PiGenderMaleDuotone } from "react-icons/pi";
import { FaEarthAmericas, FaMapLocation } from "react-icons/fa6";
import SingleLoc from '../../../../lib/SingleLoc';
import { FaMapMarkerAlt } from "react-icons/fa";


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
    const sloc = await SingleLoc(id)

    return (
        // <div className="">

        //     <Image
        //         src={backgroundImage}
        //         alt="background"
        //         fill
        //         className="absolute object-cover"/>


        //     <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/90 via-[#060022]/80 to-[#000000]/90 " />
        //     <div className="relative z-20 flex    text-white px-4">

        //     </div>
        // </div>


        <div>
            <div className='  flex  justify-between mt-5 px-11    '>
                <div className=' mt-36 '>
                    <h1 className="text-xl font-bold mb-4 text-blue-300">{schar.name}</h1>

                    <img
                        src={schar.image}
                        alt={schar.name}
                        className="w-64 h-auto rounded-lg shadow-lg mx-auto"
                    />
                </div>
                <div className='border-2 border-blue-600 h-[850px] w-[500px] py-2'>
                    <div className=' flex mt-10  '>

                        <div className='border-2 border-blue-600 h-[110px] w-[190px] ml-2  mr-3.5'>
                            <CiHeart className='text-green-400 w-12 h-10'></CiHeart>
                            <h2 className='ml-1.5 font-mono'>status</h2>
                            <h2 className='ml-1.5  text-2xl font-semibold'>{schar.status}</h2>
                        </div>
                        <div className='border-2 border-blue-600 h-[110px] w-[190px] mr-3.5'>
                            <FcAndroidOs className=' w-12 h-10'></FcAndroidOs>
                            <h2 className='ml-1.5 font-mono'>species</h2>
                            <h2 className='ml-1.5  text-2xl font-semibold'>{schar.species}</h2>


                        </div>
                        <div className='border-2 border-blue-600 h-[110px] w-[190px] mr-3.5'>
                            <PiGenderMaleDuotone className='text-green-400 w-12 h-10'></PiGenderMaleDuotone>
                            <h2 className='ml-1.5 font-mono'>Gender</h2>
                            <h2 className='ml-1.5  text-2xl font-semibold'>{schar.gender}</h2>
                        </div>

                    </div>
                    <div className='border-2 border-blue-600 h-[150px] w-full  m-1 mt-2' >
                        <FaEarthAmericas className=' ml-1.5 text-green-400 w-12 h-10'></FaEarthAmericas>
                        <h2 className=' ml-1.5 font-mono'>orgins</h2>
                        <h2 className='ml-1.5  text-2xl font-semibold' >{sloc.name}</h2>

                    </div>
                    <div className='border-2 border-blue-600 h-[150px] w-full  m-1 mt-8' >
                        <FaMapMarkerAlt className=' ml-1.5 text-green-400 w-12 h-10 mt-0.5'></FaMapMarkerAlt>
                        <h2 className='text-xs font-bold ml-1.5 '>Last Known Loaction</h2>
                        <h2 className='ml-1.5  text-lg font-semibold'>{schar.location.name}</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}
