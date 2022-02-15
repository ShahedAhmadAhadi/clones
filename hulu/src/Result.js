import React, { useEffect, useState } from 'react'
import './Result.css'
import VideoCard from './VideoCard'
import axios from './axios'
import requests from './requests'
import FlipMove from 'react-flip-move'

export default function Result({ selectedOption }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [selectedOption])
    //design don

    return (
        <div className='result'>
            <FlipMove>
                {movies.map(movie => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}
