import React from 'react';
import SingleChar from '../../../../lib/Singlechar';

export async function generateMetadata({ params }) {
    const { id } = params;
    const schar = await SingleChar(id)

    return {
        title: schar.name,
        description: schar.species
    };

}

export default async function page({ params }) {
    const { id } = params
    const schar = await SingleChar(id)

    return (
        <div>
            <h2>dynamic route</h2>
            <p>id are {id}</p>
            <h2> name are :{schar.species}</h2>
            <img src={schar.image} alt="" />

        </div>
    );
};

