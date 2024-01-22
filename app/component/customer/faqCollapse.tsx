'use client';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export type Question = {
  q: string;
  a: string;
};
type Props = {
  questions: Question[];
};
export function FaqCollapse({ questions }: Props) {
  return (
    <div>
      {questions.map((questionData: Question, i: number) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {questionData.q}
            </AccordionSummary>
            <AccordionDetails>{questionData.a}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
