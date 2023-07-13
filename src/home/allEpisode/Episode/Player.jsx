import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";

const Player = ({song}) => {

    const play = () => {
        new Audio(song).play();
    }

    return (
    <>
        <button className='episode-play' onClick={() => play()}><AiFillPlayCircle /> </button>
    </>
  )
}

export default Player;