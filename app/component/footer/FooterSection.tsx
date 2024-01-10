import { List, ListItem, Typography } from "@mui/material";
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
  return (
    <>
      <Typography variant="h6">{section.title}</Typography>
      <List>
        {section?.links?.map((item: { link: string; title: string }) => (
          <ListItem>
            <Link href={item.link}>{item.title}</Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default FooterSection;
