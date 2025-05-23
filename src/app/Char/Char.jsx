'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import allchar from '../../../lib/Allchar';
import Allloc from '../../../lib/Allloaction';
import Allepi from '../../../lib/Allepi';

function Char() {
    const router = useRouter();
    const [rick, setRick] = useState([]);
    const [loc, setLoc] = useState([]);
    const [episode, setEpisode] = useState([]);

    const [viewAllCharacters, setViewAllCharacters] = useState(false);
    const [viewAllLocations, setViewAllLocations] = useState(false);
    const [viewAllEpisodes, setViewAllEpisodes] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const charactersData = await allchar();
                const locationsData = await Allloc();
                const episodeData = await Allepi();

                setRick(charactersData);
                setLoc(locationsData);
                setEpisode(episodeData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const charactersToShow = viewAllCharacters ? rick : rick.slice(0, 5);
    const locationsToShow = viewAllLocations ? loc : loc.slice(0, 4);
    const episodesToShow = viewAllEpisodes ? episode : episode.slice(0, 4);

    const navigateToCharacter = (id) => {
        router.push(`/Char/${id}`);
    };

    if (loading) {
        return (
            <div className='bg-[#0B0C2A] mr-4 py-6'>
                <div className='text-white flex justify-between items-center mb-6'>
                    <h2 className="text-2xl font-bold">Meet the cast</h2>
                </div>
                <div className="flex justify-center items-center h-60">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#00FFCB]"></div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-[#0B0C2A] px-3 mr-4 py-6'>

            {/* Characters Section */}
            <div className='text-white flex justify-between items-center mb-6'>
                <div>
                    <h2 className="text-2xl font-bold ">Meet the cast</h2>
                    {!viewAllCharacters && <p className="text-gray-400 text-sm mt-1">Click "View All" to see all characters</p>}
                </div>
                <button
                    onClick={() => setViewAllCharacters(!viewAllCharacters)}
                    className=" cursor-pointer bg-[#00FFCB] px-6 py-2 rounded-full text-black font-semibold hover:bg-[#00e6b3] transition-all flex items-center"
                >
                    {viewAllCharacters ? 'Show Less' : 'View All'}
                    {!viewAllCharacters && <span className="ml-1">→</span>}
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {charactersToShow.map((r) => (
                    <div
                        key={r.id}
                        className={`bg-gray-800 rounded p-4 flex flex-col hover:transform hover:scale-105 transition-all duration-200 ${viewAllCharacters ? "cursor-pointer" : "cursor-default border-8"}`}
                        style={{ borderBottomRightRadius: '80px' }}
                        onClick={viewAllCharacters ? () => navigateToCharacter(r.id) : undefined}
                    >
                        <img src={r.image} alt={r.name} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-white mt-1.5">{r.name}</h2>
                    </div>
                ))}
            </div>

            {/* Episodes Section */}
            <div className="mt-10">
                <div className="flex justify-between items-center text-white mb-4">
                    <h2 className='text-2xl font-bold'>Episodes</h2>
                    <button
                        onClick={() => setViewAllEpisodes(!viewAllEpisodes)}
                        className="bg-[#00FFCB] px-6 py-2 rounded-full text-black font-semibold hover:bg-[#00e6b3] transition-all cursor-pointer"
                    >
                        {viewAllEpisodes ? 'Show Less' : 'View All'}
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {episodesToShow.map((ep) => (
                        <div
                            key={ep.id}
                            className="relative p-4 text-white bg-[#1C1F2E] border border-transparent hover:scale-105 transition-all duration-200"
                            style={{
                                background: 'linear-gradient(to bottom right, #1C1F2E, #1C1F2E) padding-box, linear-gradient(to bottom right, #3b82f6, #10b981) border-box',
                                borderRadius: '16px',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                            }}
                        >


                            <p className="text-md text-gray-400">{ep.episode}</p>
                            <h2 className="text-xl font-medium">{ep.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Locations Section */}
            <div className="mt-10">
                <div className="flex justify-between items-center text-white mb-4">
                    <h2 className='text-2xl font-bold'>Locations</h2>
                    <button
                        onClick={() => setViewAllLocations(!viewAllLocations)}
                        className="bg-[#00FFCB] px-6 py-2 rounded-full text-black font-semibold hover:bg-[#00e6b3] transition-all cursor-pointer"
                    >
                        {viewAllLocations ? 'Show Less' : 'View All'}
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {locationsToShow.map((l) => (
                        <div
                            key={l.id}
                            className={`relative p-4 text-white bg-[#1C1F2E] border border-transparent hover:scale-105 transition-all duration-200 ${viewAllLocations ? "cursor-pointer" : "cursor-default"}`}
                            style={{
                                background: 'linear-gradient(to bottom right, #1C1F2E, #1C1F2E) padding-box, linear-gradient(to bottom right, #3b82f6, #10b981) border-box',
                                borderRadius: '16px',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                            }}
                            onClick={viewAllLocations ? () => router.push(`/Location/${l.id}`) : undefined}
                        >
                            <p className="text-sm">#{l.id}</p>
                            <h2 className="text-lg font-medium">{l.name}</h2>
                        </div>
                    ))}
                </div>
            </div>



            {/* Back to Top */}
            {(viewAllCharacters || viewAllLocations || viewAllEpisodes) && (
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-[#00FFCB] px-4 py-2 rounded-full text-black font-semibold hover:bg-[#00e6b3] transition-all"
                    >
                        Back to Top
                    </button>
                </div>
            )}
        </div>
    );
}

export default Char;
