import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { PersonalDetailsForm } from '../../components/PersonalDetailsForm/';
import { signupAsApplicant } from '../../../api/home-api';
import { EmploymentHistoryForm } from '../../components/EmploymentHistoryForm/index';
import { EducationForm } from '../../components/EducationForm/index';
import { useForm } from "react-hook-form";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Scouter
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

const steps = ['Personal Details', 'Employment History', 'Education'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <PersonalDetailsForm />;
        case 1:
            return <EmploymentHistoryForm />;
        case 2:
            return <EducationForm />;
        default:
            throw new Error('Unknown step');
    }
}

export function ApplicantSignup() {
    const { handleSubmit } = useForm();
    const onSubmit = values => signupAsApplicant(values);

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

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
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>

                                <Typography variant="h5" gutterBottom>
                                        Thank you for signing up. It's time to reap rewards!
                                </Typography>
                                <Typography variant="subtitle1">
                                        With your new scouter account, you can now view job recommendations based on your skillset. Click 'Update Profile' from Profile at anytime to update your profile.
                                </Typography>
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
                                                {activeStep === steps.length - 1 ? 'Complete Signup' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                    </form>
                </Paper>
                <Copyright />
            </main>
        </React.Fragment>
    );
}