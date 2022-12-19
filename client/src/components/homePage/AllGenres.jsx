import React from 'react';

export default function OptionAllGenres({allGenres}) {
    return(
        <>
            {allGenres.map(genre => {
                return(
                    <option key={genre.id} value={genre.name}>{genre.name}</option>
                )
            })}
        </>
    )
}