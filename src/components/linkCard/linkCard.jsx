import React  , { useState }from 'react'
import { Card, CardMedia, CardContent, Link, Typography } from '@mui/material';
import './linkCard.css'
import image1 from '../../static/imgs/linksIcons/image1.png'
import BookIcon from '../../icons/bookIcon'



 
export default function LinkCard({icon,title,description,link}) {
const icon2 =`<{icon}/>` 
return (     
<div className='links-card-div' >

<Card className="card-with-border" style={{height:'100%'}} >
{icon2}
{/* <CardMedia className="card-icon-size"
  component="img"
  alt={title}
  image={image1}/> */}
<CardContent  >
   <Link href={link} underline="none" target="_blank" > {title}</Link>
   <Typography variant="body2" color="text.secondary" >{description} </Typography>
</CardContent>
</Card>
</div>     
    );
   


    
    
  }








