import React, { useState } from 'react'
import { link_Data } from '../../static/linksData.js';
import './linksArea.css'
import image1 from '../../static/imgs/linksIcons/image1.png'
import LinkCard from '../linkCard/linkCard.jsx';
import Button from '@mui/material/Button';
import LinksTitles from '../linksTitle/linksTitles.jsx';
import { Container } from '@mui/material';
import SaperatorIcon from '../../icons/saperatorIcon.jsx'


export default function LinksArea() {
  return (
    <Container className='linksAreaContainer'>

      <LinksTitles></LinksTitles>
      <SaperatorIcon></SaperatorIcon>
      <br className='hide-on-mobile'></br>
      <div className='linksAreaDiv' >
        {link_Data.map((item, index) => (
          <LinkCard key={index} icon={item.icon} title={item.title} description={item.description} link={item.link} />
        ))}
      </div>
      <br />
      <br />

    </Container>
  );
}

