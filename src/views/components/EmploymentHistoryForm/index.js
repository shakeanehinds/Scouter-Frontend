import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { DragHandle } from '@material-ui/icons';

export const EmploymentHistoryForm = () => {
    const generateWorkHistoryId = () => {
        const numHistory = document.body.querySelector('[id="employmentContainer"]')
    }
    const handleAddWorkHistory = () => {
        const workHistoryId = generateWorkHistoryId();
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Employment History
            </Typography>
            <div id="employmentContainer">
                {/* <Grid item xs={12} sm={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddWorkHistory}>
                        <Icon color="primary">add</Icon>
                        Add New Work History
                    </Button>
    </Grid>*/}
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="employmentStatus"
                        required
                        name="employmentStatus"
                        label="Current Employment Status"
                        fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="placeOfEmployment"
                        name="placeOfEmployment"
                        label="Place of Employment"
                        fullWidth
                        autoComplete="Sure-fix Software Solutions"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="employmentType"
                        name="employmentType"
                        label="Employment Type"
                        fullWidth
                        autoComplete="FULL_TIME"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="employmentStartDate"
                        name="employmentStartDate"
                        label="Start Date"
                        type="date"
                        fullWidth
                        autoComplete="2011-01-03"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="employmentEndDate"
                        name="employmentEndDate"
                        label="End Date"
                        type="date"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField

                        id="remarks"
                        name="remarks"
                        label="Comments"
                        fullWidth
                        autoComplete="It was a good working experience"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}