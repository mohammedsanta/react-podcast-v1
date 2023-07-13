import React from 'react';
import './recentProduct.css';
import pic from '../../pictures/cover.png';
import pic1 from '../../pictures/cover1.png';
import pic2 from '../../pictures/cover2.png';
import BoxProduct from './boxProduct/BoxProduct';
import TopicPopular from './topicPopular/TopicPopular';
import { FaComputer } from "react-icons/fa6";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";


const RecentProduct = () => {
  return (
    
    <div class="recent-product">

        <div class="recent-product-container">

            <h1 class="recent-product-h1">Recent product</h1>
    
            <BoxProduct picture={pic} title="Learning to take risks be generous and make a ruckus" description="Learning to take risks be generous and make a ruckusLearning to take risks be generous and make a ruckus" />

            <BoxProduct picture={pic1} title="Learning to take risks be generous and make a ruckus" description="Learning to take risks be generous and make a ruckusLearning to take risks be generous and make a ruckus" />

            <BoxProduct picture={pic2} title="Learning to take risks be generous and make a ruckus" description="Learning to take risks be generous and make a ruckusLearning to take risks be generous and make a ruckus" />

            <BoxProduct picture={pic} title="Learning to take risks be generous and make a ruckus" description="Learning to take risks be generous and make a ruckusLearning to take risks be generous and make a ruckus" />


        </div>

        <div class="recent-product-topic-container">

            <h3 class="recent-product-topic-h3">Topic</h3>

            <div class="recent-product-topic-topics">

                <p><FaComputer /> Tecnology</p>
                <p><AiOutlineSecurityScan /> Security</p>
                <p><RiCodeSSlashFill /> Programing</p>
                <p><FaPhotoVideo /> Photography</p>
                <p><FaBookReader /> Storys</p>

            </div>

            <img src={pic2} class="recent-product-topic-img"/>


            <div class="recent-product-topic-popular">

                <h3 class="recent-product-topic-popular-h3">Populart podcaster</h3>

                <TopicPopular picture={pic} name="Anna" p="About"/>
            
                <TopicPopular picture={pic1} name="Anna" p="About"/>

                <TopicPopular picture={pic2} name="Anna" p="About"/>

            </div>
            

        </div>


    </div>
  )
}

export default RecentProduct;