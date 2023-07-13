import React from 'react';
import './EpisodeHeader.css';
import Header from '../../components/header/Header';
import Episodes from '../Episodes/Episodes';


const EpisodeHeader = () => {
  return (
    <div className='EpisodeHeader'>

      <Header />

      <h1 className="EpisodeHeader-h1">A Podecast About</h1>

      <h2 className="EpisodeHeader-h2">Culture, Travel & Rlationships</h2>

      <p className="EpisodeHeader-p">Subscribe and listen on every major platform</p>

      <div className="EpisodeHeader-buttons">

        <button>Apple Podcasts</button>
        <button>Google Podcasts</button>
        <button>Spotify Podcasts</button>

      </div>

    </div>
  )
}

export default EpisodeHeader