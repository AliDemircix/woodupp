import { List, ListItem, Typography } from '@mui/material';
import TextureIcon from '@mui/icons-material/Texture';

interface MiddleHeroListProps {
    items: string[];
    title: string;
}

export function MiddleHeroList({ items, title }: MiddleHeroListProps) {
    return (
        <>
            <Typography variant="h5" textAlign="center" fontWeight={500}>
                {title}
            </Typography>
            <List>
                {items.map((item) => {
                    return (
                        <ListItem key={item}>
                            <TextureIcon sx={{ fontSize: '16px', mr: 1 }} />
                            <Typography variant="subtitle1">{item}</Typography>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}
