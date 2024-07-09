import React  , { useState }from 'react'
import {link_Data} from '../../static/linksData.js'; 
import './linksArea.css'
import image1 from '../../static/imgs/linksIcons/image1.png'
import LinkCard from '../linkCard/linkCard.jsx';
import Button from '@mui/material/Button';


export default function LinksArea() {
  return (
    <React.Fragment>
       <div className='linksAreaDiv' >
      {link_Data.map((item, index) => (
        <LinkCard key={index} title={item.title} description={item.description}  link={item.link}  />
      ))}
    </div>
     
  </React.Fragment>
  );
 
}

