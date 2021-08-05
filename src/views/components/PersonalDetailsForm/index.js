import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export function PersonalDetailsForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="middleName"
                        name="middleName"
                        label="Middle name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="dob"
                        name="dateOfBirth"
                        label="Date of Birth"
                        type="date"
                        fullWidth
                        autoComplete="dd/mm/yyyy"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="nationality"
                        name="nationality"
                        label="Nationality"
                        fullWidth
                        autoComplete="Jamaican"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="streetNumber"
                        name="streetNumber"
                        label="Address line 1"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="streetName"
                        name="streetName"
                        label="Address line 2"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="parish"
                        name="county"
                        label="State/Parish/Region"
                        fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}