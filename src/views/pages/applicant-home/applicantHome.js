import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Step from '@material-ui/core/Step';
// import Stepper from '@material-ui/core/Stepper';
import Paper from '@material-ui/core/Paper';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useForm } from "react-hook-form";
import * as api from './main-api';
import { AppHeader } from '../../components/AppHeader';
import { AppFooter } from '../../components/AppFooter';
import { useHistory } from 'react-router';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import { PersonalDetailsForm } from '../../components/PersonalDetailsForm/';
import { EmploymentHistoryForm } from '../../components/EmploymentHistoryForm/index';
import { EducationForm } from '../../components/EducationForm/index';
import { profileApi } from '../../../api/main-api';
import { startCase } from 'lodash';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const homeStages = {
    signup: 'SIGNUP',
    login: 'LOGIN',
    dashboard: 'DASHBOARD',
    profile: 'PROFILE',
    application: 'APPLICATION'
};

const defaultState = {
    homeStage: homeStages.signup,
    userId: Math.random(10)
}

export const ApplicantHome = () => {
    const history = useHistory();

    const [homeState, setHomeState] = useState(defaultState);
    const param = {
        'homeState': [homeState, setHomeState]
    };

    const getHomeContent = () => {

        switch (homeState.homeStage) {
            case homeStages.signup:
                return <ApplicantSignup homeState={param} />

            case homeStages.login:
                console.log('login not working');

            case homeStages.profile:
                return <ApplicantProfile homeState={param} />

            case homeStages.dashboard:
                return <ApplicantDashboard homeState={param} />

            case homeStages.application:
                return <ApplicantApplications homeState={param} />

            default:
                history.pushState("/");

        }
    }

    return (
        <React.Fragment>
            <div className="w-10 h-full align-middle flex flex-col content-between">
                <CssBaseline />
                {console.log('applicant home')}
                <AppHeader />
                <Paper>
                    {getHomeContent()}
                </Paper>
                <AppFooter />

            </div>
        </React.Fragment>
    );

}



//Applicant Signup

const signupSteps = ['Personal Details', 'Employment History', 'Education'];

function getStepContent(step) {
    switch (step) {
        case 0:
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
        case 1:
            return <EmploymentHistoryForm />;
        case 2:
            return <EducationForm />;
        default:
            throw new Error('Unknown step');
    }
}

export const ApplicantSignup = ({ homeState }) => {
    const useStyles = makeStyles((theme) => ({
        appBar: {
            position: 'relative',
        },
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
        stepper: {
            padding: theme.spacing(3, 0, 5),
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
        },
        buttonLeft: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
            alignSelf: 'flex-start'
        }
    }));
    const { handleSubmit } = useForm();
    const onSubmit = values => { console.log('submit values ', values) };

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const goToDashboard = () => {
        const newState = [...homeState];
        newState[0] = homeStages.dashboard;
        homeState[1](newState);
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Signup as an Applicant
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {signupSteps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === signupSteps.length ? (
                                <React.Fragment>

                                    <Typography variant="h5" gutterBottom>
                                        Thank you for signing up. It's time to reap rewards!
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        With your new scouter account, you can now view job recommendations based on your skillset. Click 'Update Profile' from Profile at anytime to update your profile.
                                    </Typography>
                                    <Button onClick={goToDashboard} className={classes.button}>
                                        See My Dashbaord
                                    </Button>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>

                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                                {activeStep === signupSteps.length - 1 ? 'Complete Signup' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </form>
                </Paper>
            </main>
        </React.Fragment>
    );
}