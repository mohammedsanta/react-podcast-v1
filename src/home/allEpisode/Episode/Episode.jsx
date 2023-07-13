import React, { useRef, useState } from 'react';
import './Episode.css';
import m from '../../pictures/m.mp3';
import l from '../../pictures/l.mp3';
// import m from '../../pictures/m.mp3';
// import m from '../../pictures/m.mp3';
import Player from './Player';
const sound = require("D:/Coding/JS/React/podcast/src/home/pictures/m.mp3");

const Episode = ({picture,title,description,song}) => {
  
  return (
    <div className='episod'>
        
      <img src={picture} className="episod-img" />

      <div className="episode-about">

        <p className="episode-about-title">{title}</p>

        <p className="episode-about-description">{description}</p>

        <div className="run">

          <audio src={song} type="audio/mpeg"/>

          <Player song={song}/>

        </div>

      </div>

    </div>
  )
}

export default Episode;