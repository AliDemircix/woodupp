'use client';

import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import TextureIcon from '@mui/icons-material/Texture';

export type MiddleHeroItemType = {
  id: string;
  title: string;
  img: {
    src: string;
    alt: string;
  };
  content: string[];
};
export function MiddleHeroItem({
  id,
  title,
  img,
  content,
}: MiddleHeroItemType) {
  const smallScreen = useMediaQuery('(max-width:700px)');
  return (
    <Grid
      container
      direction={id === 'hero2' ? 'row-reverse' : 'row'}
      overflow={'hidden'}
      my={2}
      sx={{ backgroundColor: smallScreen ? '#F5F5F7' : 'none' }}
    >
      <Grid item xs={12} md={6}>
        <img
          src={img.src}
          alt={img.alt}
          style={{
            borderRadius: id === 'hero2' ? '0 24px 24px 0' : '24px 0 0 24px',
            width: smallScreen ? '100%' : '700px',
            height: '350px',
            objectFit: smallScreen ? 'fill' : 'cover',
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        borderRadius={id === 'hero2' ? ' 24px 0 0 24px' : ' 0  24px 24px 0'}
        sx={{ backgroundColor: '#F5F5F7' }}
        alignItems="center"
      >
        <Typography
          variant="h1"
          sx={{ mt: 2 }}
          fontSize={smallScreen ? '18px' : '24px'}
          textAlign={'center'}
          fontWeight={500}
        >
          {title}
        </Typography>
        <List>
          {content.map((item) => {
            return (
              <ListItem key={item}>
                <TextureIcon sx={{ fontSize: '16px', mr: 1 }} />
                <Typography variant="subtitle1">{item}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}
