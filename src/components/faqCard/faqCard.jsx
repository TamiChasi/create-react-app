import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faqCard.css';

export default function FaqCard({ question, answer }) {
  return (
    <Accordion className="faq-card">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="faq-question">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="faq-answer">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
