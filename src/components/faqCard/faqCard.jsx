import React,  { useState }  from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faqCard.css';
import { useTranslation } from 'react-i18next';

export default function FaqCard({ question, answer }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion className="faq-card"
    expanded={expanded}
    onChange={handleChange}>
      <AccordionSummary
       expandIcon={<ExpandMoreIcon className="expand-icon" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ height: 60 }}
      >
        <Typography className="faq-question">{question}</Typography>
      </AccordionSummary>
      
      <AccordionDetails className="faq-details">
        <Typography className="faq-answer">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
