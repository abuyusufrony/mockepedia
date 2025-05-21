import React from 'react';

import Link from 'next/link';
import allchar from '../../../lib/Allchar';
import Allloc from '../../../lib/Allloaction';


async function Char() {
    const rick = await allchar()
    const loc = await Allloc()



    return (
        <div className='bg-[#0B0C2A]    mr-4'>
            this page are  characters.

            <div className='text-white flex  justify-between'>
                <div>
                    <h2>Meet the cast</h2>

                </div>
                <button>View All</button>

            </div>
            <div className='flex'>
                {/* {
                    rick.map((r) => <div className='' key={r.id}> <Link href={`/Char/${r.id}`}>
                        <img src={r.image} alt={r.name} />
                        <h2>r.name</h2>

                    </Link> </div>)
                } */}
                <div className="bg-[#0a0f1a] py-6 px-4">
                    <div className="mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
                        {rick.slice(0, 15).map((r) => (
                            <Link key={r.id} href={`/Char/${r.id}`}>
                                <div
                                    className="relative bg-[#101928] border border-blue-500 rounded-2xl p-4 overflow-hidden transition-transform hover:scale-105"
                                    style={{ borderBottomRightRadius: '80px' }}
                                >
                                    <img
                                        src={r.image}
                                        alt={r.name}
                                        className=" h-60 object-cover rounded-xl z-10 relative"
                                    />
                                    <div className="mt-4 ">
                                        <p className="text-white text-lg font-medium ">{r.name}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>




            </div>

            <div>
                <h2 className=' text-white'>Loactions are </h2>
                <div className='flex'>
                    {
                        loc.map((l) => <div className='p-1 mr-1.5  '>
                            <h2 className='text-white'> # {l.id}</h2>
                            <h2 className='text-white text-2xl'>{l.name}</h2>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Char;