import React from 'react'
import './Banner.css';
import { useState, useEffect } from 'react';
import baseURL from '../baseUrl';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

function Banner({ fetchUrl1 }) {
    const [movies, setMovies] = useState([])

    async function fetchData() {
        const result = await baseURL.get(fetchUrl1)
        setMovies(result.data.results[
            Math.floor(Math.random() * result.data.results.length)
        ]);
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(movies);

    function truncate(content, n) {
        return content?.length > n ? content?.substr(0, n - 1) + "..." : content
    }

    return (
        <header className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
            backgroundSize: "cover"
        }}>
            <div className='banner_content'>
                <h1 className='banner_title'>
                    {movies.name}
                </h1>
                <h1 className='banner_overview'>
                    {truncate(movies.overview, 150)}
                    {/* {movies.overview} */}
                </h1>
                <button className='btn'>Play</button>
                <button className='btn1'>More Info</button>
            </div>
        </header>
    )
}

export default Banner