import React from 'react';

import Link from 'next/link';
import allchar from '../../../lib/Allchar';


async function Char() {
    const rick = await allchar()



    return (
        <div className='bg-[#0B0C2A] border border-[#00FFF0]    mr-4'>
            this page are  characters.

            <div className='text-white flex  justify-between'>
                <div>
                    <h2>Meet the cast</h2>
                </div>
                <button>View All</button>
            </div>
            <div>
                {
                    rick.map((r) => <div> <Link href={`/Char/${r.id}`}>
                        <img src={r.image} alt={r.name} />

                    </Link> </div>)
                }
            </div>

        </div>
    );
};

export default Char;