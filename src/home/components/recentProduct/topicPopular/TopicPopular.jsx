import React from 'react';
import './topicPopular.css';

const TopicPopular = ({picture,name,p}) => {
  return (
      <div className="recent-product-topic-popular-podcaster">

          <img src={picture} width="30px" className="recent-product-topic-popular-podcaster-img"/>

          <div className="recent-product-topic-popular-podcaster-about">

              <p className="recent-product-topic-popular-podcaster-about-name">{name}</p>

              <p className="recent-product-topic-popular-podcaster-about-p">{p}</p>

          </div>

      </div>
  )
}

export default TopicPopular;