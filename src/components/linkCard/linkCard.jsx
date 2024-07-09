import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Link, Typography } from '@mui/material';
import './linkCard.css'
import iconComponents from './icons'; // Adjust the import path as needed

export default function LinkCard({ icon, title, description, link }) {
  const IconComponent = iconComponents[icon];

  return (
    <div className='links-card-div' >
      <Card className="card-with-border" style={{ height: '100%' }} >
        <Link href={link} underline="none" target="_blank" >
          {IconComponent && <IconComponent />}

          <CardContent className='card-link-description' >
            <br></br>
            {title}
            <Typography variant="body2" color="text.secondary" >{description} </Typography>
          </CardContent>
        </Link>
      </Card>
    </div>
  );





}








