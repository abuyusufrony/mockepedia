import React from 'react';
import Image from 'next/image';
import SingleChar from '../../../../lib/Singlechar';
import backgroundImage from '../../../../public/images/vampire.jpg';

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

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <Image
                src={backgroundImage}
                alt="background"
                fill
                className="absolute object-cover"
                priority
            />


            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/90 via-[#060022]/80 to-[#000000]/90 z-10" />

            {/* Overlaid Content */}
            <div className="relative z-20 flex   h-full text-white px-4">
                <div>
                    <h1 className="text-4xl font-bold mb-4">{schar.name}</h1>
                    <p className="text-xl mb-6">Species: {schar.species}</p>
                    <img
                        src={schar.image}
                        alt={schar.name}
                        className="w-64 h-auto rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </div>
        </div>
    );
}
