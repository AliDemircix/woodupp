import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React from 'react';
import { ProductDescription, productDescriptionTitles } from '../../lib/producthero/constants';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ProductInfoSectionProps {
    description: ProductDescription;
}

const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({ description }) => {
    return (
        <Box py={4}>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                    <Typography variant="h6" mb={1}>
                        Productinformatie
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" mb={2}>
                        {description.productInfo}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                    <Typography variant="h6" mb={1}>
                        Materiaal en onderhoud
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" mb={2}>
                        {description.materialAndMaintenance}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                    <Typography variant="h6" mb={1}>
                        Duurzaamheid
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" mb={2}>
                        {description.sustainability}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default ProductInfoSection;
