import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Link, Typography } from '@mui/material';
import './linkCard.css'
import iconComponents from './icons'; // Adjust the import path as needed
import { useTranslation } from 'react-i18next';

export default function LinkCard({ icon, title, description, link }) {
  const IconComponent = iconComponents[icon];

  const { t } = useTranslation();

  return (
      <Card className="card-with-border" style={{ height: '100%' }} >
        <Link href={link} underline="none" target="_blank" >
          {IconComponent && <IconComponent />}
          <CardContent className='card-link-description' >
            <br></br>
            {t(title)}
            <Typography variant="body2" color="text.secondary" >{description} </Typography>
          </CardContent>
        </Link>
      </Card>
      );





}








