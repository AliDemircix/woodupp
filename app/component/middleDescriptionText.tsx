'use client';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import TextureIcon from '@mui/icons-material/Texture';

const textData = {
  title: 'WAAROM HOUTPANEEL?',
  question1: 'Wil je een stoere uitstraling aan je sfeer toevoegen?',
  question2: 'Heeft u last van een slechte akoestiek in uw woning?',
  answer: 'Dan bent u bij ons aan het juiste adres!',
  text: [
    'Door dit product te gebruiken kunt u genieten van de voordelen van geluidsisolatie en tegelijkertijd Tegelijkertijd verfraait u uw interieur esthetisch. En wandpanelen, “vooral de houten variant”, zorgen voor meer warmte in huis en geven direct een luxe uitstraling.',
    'Houten akoestische panelen passen perfect in verschillende interieurs, zowel als wand en plafondafwerking.',
    'Akupanel kan in diverse ruimtes worden toegepast, zoals thuis, op kantoor, conferentiezaal, school, restaurant, hotel en openbare gebouwen.',
    'Het is eenvoudig te monteren en af te stellen naar de maat.',
    'Houten panelen zijn gemaakt van duurzame materialen. Het akoestische vilt is gemaakt van gerecycled plastic en de lamellen zijn gemaakt van MDF met een fineeroppervlak.',
  ],
};

function MiddleDescriptionText() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Stack
      my={10}
      alignItems={'flex-start'}
      color={'#3d3d3d'}
      width="90%"
      mx={'auto'}
    >
      <Typography variant="h1" fontWeight={500} mb={2}>
        {textData.title}
      </Typography>
      <Typography variant="h4" fontWeight={500} my={1}>
        {textData.question1}
      </Typography>
      <Typography variant="h4" fontWeight={500} my={1}>
        {textData.question2}
      </Typography>
      <Typography variant="body1" fontWeight={500} my={2}>
        {textData.answer}
      </Typography>
      {textData.text.map((t, i) => {
        return (
          <Typography key={i} variant="body1" fontWeight={500} my={0.7}>
            <TextureIcon sx={{ fontSize: '16px', mr: 1 }} /> {t}
          </Typography>
        );
      })}
    </Stack>
  );
}
export default MiddleDescriptionText;
