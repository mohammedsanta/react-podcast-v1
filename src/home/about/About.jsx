import React from 'react';
import './about.css';
import Header from '../components/header/Header';
import picture from '../pictures/pic1.jpg';

const About = () => {
  return (
    <div className='about'>

        <Header />

        <div className="about-header">


            <div className="about-header-words">

                <h1 className="about-header-words-h1">Hi This is My First Ract App For Podcast Content</h1>

                <h2 className="about-header-words-h2">My Name is Mohammed Samy and i Hope You Like My Work</h2>

                <p className='about-header-words-about'>
                    I Have Experience About HTML CSS JavaScript TypeScript PHP MySQL <br/>
                    Laravel Framwork experience About <br />
                    Authentication Validation With Request file Routing, Middlewares, Factories, Migration<br />
                    Seeder, Multi Guard, Multi Authentication,Policies, API, Resource to API, E-commerce<br />
                
                    <br /><br />

                    And ReactJs I have Learned <br />

                    Virtual DOM, How is Virtual DOM faster, Props in JSX <br />
                     ReactJS — Components ,React Hooks

                </p>

            </div>

            <div className="about-header-pic">
                <img src={picture} alt="" />
            </div>

        </div>

    </div>
  )
}

export default About