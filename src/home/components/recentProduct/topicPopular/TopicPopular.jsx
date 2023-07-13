import React from 'react';
import './topicPopular.css';

const TopicPopular = ({picture,name,p}) => {
  return (
      <div class="recent-product-topic-popular-podcaster">

          <img src={picture} width="30px" class="recent-product-topic-popular-podcaster-img"/>

          <div class="recent-product-topic-popular-podcaster-about">

              <p class="recent-product-topic-popular-podcaster-about-name">{name}</p>

              <p class="recent-product-topic-popular-podcaster-about-p">{p}</p>

          </div>

      </div>
  )
}

export default TopicPopular;