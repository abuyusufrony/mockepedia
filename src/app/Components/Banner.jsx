// app/components/Banner.jsx
'use client';

import Image from 'next/image';
import localfont from 'next/font/local'
import backgroundImage from '../../../public/images/Неон город вверх 1.png';
import logo from '../../../public/images/Logo.png'
import bubble from '../../../public/images/bubble.png'
import portal from '../../../public/images/portal.png'



const bold = localfont({
    src: '../../../public/fonts/TTTravels-BoldItalic.ttf'
})

const Banner = () => {
    return (
        <div className="relative  ">
            <Image
                src={backgroundImage}
                alt="background"
                fill
                className="absolute object-cover"
                priority
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/90 via-[#060022]/80 to-[#000000]/90 z-10" />

            <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 text-white">
                <Image src={logo} alt="Rick and Morty Logo" width={250} height={100} className="mb-4" />

                <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold">
                    <Image src={bubble} width={40} height={40} alt="blob" className="absolute left-[-30px] top-[-20px]" />
                    <span className="italic font-ttItalic">THE</span>{' '}
                    <Image src={portal} alt="Rick" width={40} height={40} className="inline-block h-auto mx-2 align-middle" />
                    <span className="text-[#00FFCB] font-ttBold">RICK &</span><br />
                    <span className="text-[#A0FF00] font-ttBold">MORTY</span>{' '}
                    <span className="italic font-ttItalic">WIKI</span>
                </div>

                <div className="mt-8 flex flex-col items-start text-left md:flex-row md:items-center md:justify-center md:space-x-10">
                    <button className="mt-4 md:mt-0 bg-[#00FFCB] px-6 py-2 rounded-full text-black font-semibold hover:bg-[#00e6b3] transition-all md:mr-2.5">
                        ▶ Watch Now
                    </button>

                    <p className="text-sm text-gray-300 font-medium font-tt md:ml-14 mt-5">
                        Brilliant but boozy scientist Rick hijacks his fretful <br />
                        teenage grandson, Morty, for wild escapades <br />
                        in other worlds and alternate dimensions.
                    </p>


                </div>
            </div>


        </div>
    );
};

export default Banner;
