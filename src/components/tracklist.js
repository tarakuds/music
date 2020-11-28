import React from 'react'
import axios from 'axios'



const Tracklist=(props)=>{
    // const Key='1638fe563a3c3038628e2462ec04af8a'
    const API_URL='https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1?format=json&apikey=1638fe563a3c3038628e2462ec04af8a'

    axios.get(API_URL)

    console.log("I want a list here")
        return (
        <p>{props.value}</p>
    )
}



export default Tracklist