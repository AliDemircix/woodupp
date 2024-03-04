import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material';

function MontagePage() {
    return (
        <Grid container flexDirection={'column'} justifyContent="center">
            <Typography variant="h5" gutterBottom>
                Instructies voor montage met de KIT
            </Typography>
            <Grid item justifyContent="center" maxWidth={1000}>
                <List>
                    {kitInstructions.map((instruction, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`${index + 1}. ${instruction}`} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Typography variant="h5" gutterBottom>
                Instructies voor montage met de SCHROEVEN
            </Typography>
            <Grid item justifyContent="center" maxWidth={1000}>
                <List>
                    {screwInstructions.map((instruction, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`${index + 1}. ${instruction}`} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
}

const kitInstructions = [
    'Zorg er eerst voor dat de te monteren muur correct is opgemeten.',
    'Zaag het vervolgens met behulp van een zaag op de gewenste afmetingen.',
    'Zorg ervoor dat de muur of het plafond vrij zijn van obstakels.',
    'Breng de lijmset aan op de achterkant van het paneel en zet het vast door stevig aan te drukken.',
    'Voordat u het laatste paneel verlijmt, meet u het nauwkeurig op en snijdt u met een mes het vilt van de zijkant van de lat af en rondt u het lijmproces af.',
    'Als u de installatie met eindlat gaat voltooien, hoeft u het vilt niet af te snijden; de eindlat wordt met behulp van de kit op het vilt gelijmd.',
];

const screwInstructions = [
    'Zorg er eerst voor dat de te monteren muur correct is opgemeten.',
    'Zaag het vervolgens met behulp van een zaag op de gewenste afmetingen.',
    'Zorg ervoor dat de muur of het plafond vrij zijn van obstakels.',
    'Bevestig van de onderliggende latten aan de muur waar je de akoestische panelen wil monteren. ( Tussen de latten kan 30-40 cm afstand gehouden worden )',
    'Maak het paneel op maat in de lengte.',
    'Bevestig het aan de muur met schroeven. ( We adviseren aan 12 tot 16 schroeven per paneel te gebruiken. )',
    'Maak het paneel op maat in de breedte voor het laatste stuk en bevestig hem.',
];

export default MontagePage;
