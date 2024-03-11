import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import { Button, TextField, Typography, Grid } from '@mui/material';

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    selectedProductNames: Array<string>;
}

interface FormData {
    name: string;
    address: string;
    email: string;
    message: string;
    kleurstalen: string;
}

export default function SendMailDialog(props: SimpleDialogProps) {
    const { onClose, open, selectedProductNames } = props;

    const [formData, setFormData] = useState<FormData>({
        name: '',
        address: '',
        email: '',
        message: '',
        kleurstalen: '',
    });

    const [submitting, setSubmitting] = useState<boolean>(false);

    useEffect(() => {
        const productNames = selectedProductNames.join(', ');
        setFormData((prevState) => ({
            ...prevState,
            kleurstalen: productNames,
        }));
    }, [selectedProductNames]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        // send email
        const response = await fetch('api/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const { success, error } = await response.json();

        if (success) {
            alert('Verstuurd, bedankt voor uw aanvraag!. We nemen zo snel mogelijk contact met u op.');
        } else if (error) {
            alert('Er is iets misgegaan, probeer het later opnieuw.');
        }
        onClose();
        setSubmitting(false);
    };

    return (
        <Dialog onClose={onClose} open={open}>
            <Grid container justifyContent={'center'} sx={{ minWidth: 400 }}>
                <form onSubmit={handleSubmit} style={{ width: 300 }}>
                    <Grid container justifyContent={'center'} mb={2} mt={2}>
                        <Typography variant="h3">Contact Formulier</Typography>
                    </Grid>
                    <Grid mb={2}>
                        <Typography variant="h5" mb={1}>
                            Aangevraagd
                        </Typography>
                        {selectedProductNames.map((kleurstaal) => (
                            <Typography>{kleurstaal}</Typography>
                        ))}
                    </Grid>
                    <Grid mb={2}>
                        <TextField id="name" name="name" label="Name" variant="outlined" onChange={handleInputChange} fullWidth />
                    </Grid>
                    <Grid mb={2}>
                        <TextField id="address" name="address" label="Address" variant="outlined" onChange={handleInputChange} fullWidth />
                    </Grid>
                    <Grid mb={2}>
                        <TextField id="email" name="email" label="Email" variant="outlined" onChange={handleInputChange} fullWidth />
                    </Grid>

                    <Grid mb={2}>
                        <TextField id="message" name="message" label="Message" variant="outlined" multiline rows={4} onChange={handleInputChange} fullWidth />
                    </Grid>

                    <Grid container justifyContent={'center'} mb={2} mt={2}>
                        <Button
                            variant={'contained'}
                            sx={{
                                textTransform: 'none',
                                padding: '12px 16px',
                                borderRadius: 10,
                                background: 'darkgray',
                                '&:hover': {
                                    backgroundColor: '#524e4e',
                                },
                            }}
                            type="submit"
                        >
                            <Typography variant="h5" fontWeight={'bold'} fontSize={14}>
                                Email Versturen
                            </Typography>
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Dialog>
    );
}
