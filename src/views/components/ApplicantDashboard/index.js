import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import Paper from '@material-ui/core/Paper';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PersonalDetailsForm } from '../PersonalDetailsForm';
import { EmploymentHistoryForm } from '../EmploymentHistoryForm/index';
import { EducationForm } from '../EducationForm/index';
import { useForm } from "react-hook-form";
import { profileApi } from '../../../api/main-api';
import { startCase } from 'lodash';

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

export const ApplicantDashboard = () => {
    const { handleSubmit } = useForm();
    const onSubmit = values => { console.log('submit values') };//signupAsApplicant(values);

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    // console.log(applicant ?? 'no applicant');

    //temp




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
                                    {/*signupAsApplicant(this)*/}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            onClick={() => { alert('Function not yet available'); }}
                                            className={classes.buttonLeft}
                                        >
                                            I Already Have An Account
                                        </Button>
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
            </main>
        </React.Fragment>
    );
}