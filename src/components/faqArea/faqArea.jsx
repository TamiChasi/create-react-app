import React, { useState } from 'react';
import { faqData } from '../../static/faqData.js';
import './faqArea.css';
import { Button, Container, Typography } from '@mui/material';
import SeparatorIcon from '../../icons/saperatorIcon.jsx';
import FaqCard from '../faqCard/faqCard.jsx'

export default function FaqArea() {
  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? faqData : faqData.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <Container>
      <Typography variant="h5" className="faq-title">שאלות נפוצות</Typography>
      <SeparatorIcon />
      <br />
      <div className='faqAreaDiv'>
        {displayedFaqs.map((item, index) => (
          <FaqCard key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      {!showAll && faqData.length > 3 && (
        <div className="show-more-container">
          <Button onClick={handleShowMore} className="show-more-button">
            הצג עוד שאלות
          </Button>
        </div>
      )}
      <br />
      <br />
    </Container>
  );

}
