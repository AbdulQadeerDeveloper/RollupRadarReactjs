import React, { useEffect, useState } from 'react'
import axios from "axios"
import TrendingItem from './TrendingItem'

function Trending() {

    const [data, setData] = useState([])
    const url = "https://api.coingecko.com/api/v3/search/trending"

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data.coins)
            })
    }, [url])

    return (
        <div className='rounded-div py-5 mb-10'>
               
            </div>
    )

    
}

export default Trending