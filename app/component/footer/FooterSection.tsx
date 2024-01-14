import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React from "react";

interface Links {
  title: string;
  link: string;
}

interface FooterSectionProps {
  title: string;
  links: Links[];
}

function FooterSection({ section }: FooterSectionProps) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  if (isSmallScreen) {
    return (
      <Accordion sx={{ bgcolor: "#F5F5F7", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            px: 0,
            borderBottom: 1,
            borderColor: "grey.500",
            minHeight: "unset",
            "& .MuiAccordionSummary-content": {
              my: 1,
            },
          }}
        >
          <Typography variant="h6">{section.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0 }}>
          <List>
            {section?.links?.map((item: { link: string; title: string }) => (
              <ListItem key={item.title}>
                <Link href={item.link}>{item.title}</Link>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <>
      <Typography variant="h6">{section.title}</Typography>
      <List>
        {section?.links?.map((item: { link: string; title: string }) => (
          <ListItem key={item.title}>
            <Link href={item.link}>{item.title}</Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default FooterSection;
