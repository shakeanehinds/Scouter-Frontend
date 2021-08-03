import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export function EducationForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Education Form
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="level"
                        name="level"
                        label="Education Level"
                        fullWidth
                        autoComplete="COLLEGE"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="attainment"
                        name="attainment"
                        label="Award Conferred"
                        fullWidth
                        autoComplete="DIPLOMA"
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="institution"
                        name="institution"
                        label="Institution"
                        fullWidth
                        autoComplete="Montego Bay Commuinity College"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="startDate"
                        name="startDate"
                        label="Start Date"
                        fullWidth
                        autoComplete="2003-01-03"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="endDate"
                        name="endDate"
                        label="End Date"
                        fullWidth
                        autoComplete="2005-07-07"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}