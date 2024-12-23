import React, { useState, useRef } from 'react';
import { faqData } from '../../static/faqData.js';
import './faqArea.css';
import { Button, Container, Typography } from '@mui/material';
import SeparatorIcon from '../../icons/saperatorIcon.jsx';
import FaqCard from '../faqCard/faqCard.jsx'
import { useTranslation } from 'react-i18next';
import '../../assets/styles.css'

export default function FaqArea() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? faqData : faqData.slice(0, 3);

 
  const titleRef = useRef(null);


  const handleShowMore = () => {
    setShowAll(true);
  };


  const handleShowLess = () => {
    setShowAll(false);
   
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <Container>
      <Typography ref={titleRef} variant="h5" className="faq-title">
        <div id="titleQuestions">
          {t("titleQuestions")}
        </div>
      </Typography>
      {/* <br className='hide-on-mobile'></br> */}

      <div id="subheadingQuestions">
        {t("subheadingQuestions")}
      </div>

      <SeparatorIcon />
      {/* <br className='hide-on-mobile' /> */}
      <div className='faqAreaDiv' >
        {displayedFaqs.map((item, index) => (
          <FaqCard key={index} question={item.question} answer={item.answer} />
        ))}
      </div>

      <div className="show-more-container" >
        {!showAll && faqData.length > 3 && (
          <Button onClick={handleShowMore} id="onClickQuestions">
            {t("Add questions")}
          </Button>
        )}

        {showAll && (
          <Button onClick={handleShowLess} id="onClickQuestions">
            {t("Show less questions")}
          </Button>
        )}
      </div>

     
      <br />
      <br />
    </Container>
  );

}
