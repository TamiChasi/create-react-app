import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faqCard.css';
import { useTranslation } from 'react-i18next';

export default function FaqCard({ question, answer }) {
  const { t } = useTranslation();
  return (
    <Accordion className="faq-card">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="faq-question">{question}</Typography>
      </AccordionSummary>
      
      <AccordionDetails className="faq-details">
        <Typography className="faq-answer">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
