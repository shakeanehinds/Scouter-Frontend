import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@material-ui/core';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import {
    NAME_REGEX, SAFE_STRING_REGEX, TRN_REGEX
} from '../../../utils/validators';

const NATIONALITIES_LIST = [
    "Afghan",
    "Albanian",
    "Algerian",
    "American",
    "Andorran",
    "Angolan",
    "Antiguans",
    "Argentinean",
    "Armenian",
    "Australian",
    "Austrian",
    "Azerbaijani",
    "Bahamian",
    "Bahraini",
    "Bangladeshi",
    "Barbadian",
    "Barbudans",
    "Batswana",
    "Belarusian",
    "Belgian",
    "Belizean",
    "Beninese",
    "Bhutanese",
    "Bolivian",
    "Bosnian",
    "Brazilian",
    "British",
    "Bruneian",
    "Bulgarian",
    "Burkinabe",
    "Burmese",
    "Burundian",
    "Cambodian",
    "Cameroonian",
    "Canadian",
    "Cape Verdean",
    "Central African",
    "Chadian",
    "Chilean",
    "Chinese",
    "Colombian",
    "Comoran",
    "Congolese",
    "Costa Rican",
    "Croatian",
    "Cuban",
    "Cypriot",
    "Czech",
    "Danish",
    "Djibouti",
    "Dominican",
    "Dutch",
    "East Timorese",
    "Ecuadorean",
    "Egyptian",
    "Emirian",
    "Equatorial Guinean",
    "Eritrean",
    "Estonian",
    "Ethiopian",
    "Fijian",
    "Filipino",
    "Finnish",
    "French",
    "Gabonese",
    "Gambian",
    "Georgian",
    "German",
    "Ghanaian",
    "Greek",
    "Grenadian",
    "Guatemalan",
    "Guinea-Bissauan",
    "Guinean",
    "Guyanese",
    "Haitian",
    "Herzegovinian",
    "Honduran",
    "Hungarian",
    "I-Kiribati",
    "Icelander",
    "Indian",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Irish",
    "Israeli",
    "Italian",
    "Ivorian",
    "Jamaican",
    "Japanese",
    "Jordanian",
    "Kazakhstani",
    "Kenyan",
    "Kittian and Nevisian",
    "Kuwaiti",
    "Kyrgyz",
    "Laotian",
    "Latvian",
    "Lebanese",
    "Liberian",
    "Libyan",
    "Liechtensteiner",
    "Lithuanian",
    "Luxembourger",
    "Macedonian",
    "Malagasy",
    "Malawian",
    "Malaysian",
    "Maldivan",
    "Malian",
    "Maltese",
    "Marshallese",
    "Mauritanian",
    "Mauritian",
    "Mexican",
    "Micronesian",
    "Moldovan",
    "Monacan",
    "Mongolian",
    "Moroccan",
    "Mosotho",
    "Motswana",
    "Mozambican",
    "Namibian",
    "Nauruan",
    "Nepalese",
    "New Zealander",
    "Nicaraguan",
    "Nigerian",
    "Nigerien",
    "North Korean",
    "Northern Irish",
    "Norwegian",
    "Omani",
    "Pakistani",
    "Palauan",
    "Panamanian",
    "Papua New Guinean",
    "Paraguayan",
    "Peruvian",
    "Polish",
    "Portuguese",
    "Qatari",
    "Romanian",
    "Russian",
    "Rwandan",
    "Saint Lucian",
    "Salvadoran",
    "Samoan",
    "San Marinese",
    "Sao Tomean",
    "Saudi",
    "Scottish",
    "Senegalese",
    "Serbian",
    "Seychellois",
    "Sierra Leonean",
    "Singaporean",
    "Slovakian",
    "Slovenian",
    "Solomon Islander",
    "Somali",
    "South African",
    "South Korean",
    "Spanish",
    "Sri Lankan",
    "Sudanese",
    "Surinamer",
    "Swazi",
    "Swedish",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Tajik",
    "Tanzanian",
    "Thai",
    "Togolese",
    "Tongan",
    "Trinidadian or Tobagonian",
    "Tunisian",
    "Turkish",
    "Tuvaluan",
    "Ugandan",
    "Ukrainian",
    "Uruguayan",
    "Uzbekistani",
    "Venezuelan",
    "Vietnamese",
    "Welsh",
    "Yemenite",
    "Zambian",
    "Zimbabwean"
];

const EMPLOYMENT_TYPE = {
    "FULL_TIME": "Full Time",
    "PART_TIME": "Part Time"
};

const PROSPECTIVE_EMPLOYMENT_TYPE = {
    "FULL_TIME": "Full Time",
    "PART_TIME": "Part Time",
    "ALL": "All"
};

const EMPLOYMENT_STATUS = {
    "EMPLOYED": "Employed",
    "UNEMPLOYED": "Unemployed"
};

const ATTAINMENT_TYPE = {
    "DIPLOMA": "Diploma",
    "ASSOCIATE_DEGREE": "Associate Degree",
    "BACHELOR": "Bachelor",
    "MASTER": "Master",
    "PHD": "PhD"
};

const EDUCATION_LEVEL = {
    "PRIMARY": "Primary",
    "HIGH_SCHOOL": "High School",
    "COLLEGE": "College",
    "UNIVERSITY": "University",
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        alignSelf: 'center',
        alignContent: 'center',
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

export const ApplicantSignup = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (values, e) => {
        //e.preventDefault();
        //document.getElementById('applicantSignupForm').submit()
        console.log('submit values ', values);
    }
    const onError = (errors, e) => console.log(errors, e);

    const [formValues, setFormValues] = React.useState({});

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        const vals = new FormData(document.getElementById('applicantSignupForm'));
        console.log('vals ', vals.entries());
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [employmentStartDates, setEmploymentStartDates] = React.useState({
        "0": new Date()
    });
    const handleEmploymentStartDateChange = (date, id) => {
        const dates = { ...employmentStartDates };
        dates[id] = date;
        setEmploymentStartDates(dates);
    };

    const [employmentEndDates, setEmploymentEndDates] = React.useState({
        "0": new Date()
    });
    const handleEmploymentEndDateChange = (date, id) => {
        const dates = { ...employmentEndDates };
        dates[id] = date;
        setEmploymentEndDates(dates);
    };

    const [educationEndDates, setEducationEndDates] = React.useState({
        "0": new Date()
    });
    const handleEducationEndDateChange = (date, id) => {
        const dates = { ...educationEndDates };
        dates[id] = date;
        setEducationEndDates(dates);
    };

    const [educationStartDates, setEducationStartDates] = React.useState({
        "0": new Date()
    });
    const handleEducationStartDateChange = (date, id) => {
        const dates = { ...educationStartDates };
        dates[id] = date;
        setEducationStartDates(dates);
    };

    const [propectiveEmpType, setPropectiveEmpType] = React.useState('ALL');
    const handleProspectiveEmpTypeChange = (value) => {
        const typeEmp = Object.keys(PROSPECTIVE_EMPLOYMENT_TYPE).find(key => PROSPECTIVE_EMPLOYMENT_TYPE[key] === value);
        setPropectiveEmpType(typeEmp);
    };

    const [empStatus, setPropectiveEmpStatus] = React.useState('ALL');
    const handleEmploymentStatusChange = (value) => {
        const typeEmp = Object.keys(EMPLOYMENT_STATUS).find(key => EMPLOYMENT_STATUS[key] === value);
        setPropectiveEmpStatus(typeEmp);
    };

    const [employmentTypes, setEmploymentTypes] = React.useState({});
    const handleEmploymentTypeChange = (empType, id) => {
        const empTypes = { ...employmentTypes };
        empTypes[id] = empType;
        setEmploymentTypes(empTypes);
    };

    const [educationLevels, setEducationLevels] = React.useState({});
    const handleEducationLevelChange = (edLevel, id) => {
        const edLevels = { ...educationLevels };
        edLevels[id] = edLevel;
        setEducationLevels(edLevels);
    };

    const [educationAttainmentss, setEducationAttainments] = React.useState({});
    const handleEducationAttainmentChange = (attainment, id) => {
        const attainments = { ...educationAttainmentss };
        attainments[id] = attainment;
        setEducationAttainments(attainments);
    };


    const validateName = (value) => {
        const valid = value.match(NAME_REGEX);
        return valid ? null : 'Value must be a valid name';
    }

    const validateString = (value) => {
        const valid = value?.match(SAFE_STRING_REGEX) || null;
        return valid ? null : 'Value must be aN alphanumeric sequence';
    }

    const validateTRN = (value) => {
        const valid = value.match(TRN_REGEX);
        return valid ? null : 'Value must be a 9 digits';
    }


    return (
        <React.Fragment>

            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Signup as an Applicant
                    </Typography>
                    <form id='applicantSignupForm' onSubmit={handleSubmit(onSubmit, onError)} encType="application/x-www-form-urlencoded">
                        <React.Fragment key={"Personal Details"}>

                            <Typography variant="h6" gutterBottom>
                                Personal Details
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        name="firstName"
                                        id="firstName"
                                        label="First name"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        id="middleName"
                                        label="Middle name"
                                        fullWidth
                                        name="middleName"
                                    />

                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="lastName"
                                        label="Last name"
                                        fullWidth
                                        name="lastName"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                        <KeyboardDatePicker
                                            required
                                            margin="normal"
                                            id="dob"
                                            label="Date of Birth"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={() => handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <Select
                                        required
                                        label="Nationality"
                                        name="nationality"
                                        value={this.value}
                                        options={NATIONALITIES_LIST}
                                    >
                                        {NATIONALITIES_LIST.map((nationality) => {
                                            return <MenuItem value={nationality}>{nationality}</MenuItem>
                                        })}
                                    </Select>

                                </Grid>
                                <Grid item xs={12}>

                                    <TextField
                                        required
                                        id="trn"
                                        label="Tax Registration Number / Social Security Number"
                                        fullWidth
                                        name="trn"
                                    />
                                </Grid>
                                <Grid item xs={12}>

                                    <TextField
                                        required
                                        id="streetNumber"
                                        label="Address line 1"
                                        fullWidth

                                        name="streetNumber"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Address line 2"
                                        fullWidth
                                        name="streetName"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        label="City"
                                        fullWidth
                                        city
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="parish"
                                        label="Parish"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="country"
                                        label="Country"
                                        fullWidth
                                    />
                                </Grid>

                            </Grid>
                        </React.Fragment >
                        <hr className='separator h-1 border-1 w-full my-12'></hr>
                        <React.Fragment key={"Employment History"}>


                            <Typography variant="h6" gutterBottom>
                                Employment History
                            </Typography>
                            <div id="employmentContainer">

                                {/*<Grid item xs={12} sm={12}>
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
                                <Grid item xs={12} sm={6}>
                                    <Select
                                        required
                                        id="employmentStatus"
                                        label="Employment Status"
                                        fullWidth
                                        onChange={() => handleEmploymentStatusChange(this.value, 0)}
                                        value={(value) => `${value}`}
                                    >
                                        {Object.entries(EMPLOYMENT_STATUS).map((eTypeArr) => {
                                            return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
                                        })}
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        name="placeOfEmployment"
                                        id="placeOfEmployment"
                                        label="Place of Employment"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <Select
                                        required
                                        onChange={() => handleEmploymentTypeChange(this.value, 0)}
                                        id="employmentType"
                                        name="employmentType"
                                        label="Employment Type"
                                        fullWidth
                                        value={(value) => `${value}`}>

                                        {Object.entries(EMPLOYMENT_TYPE).map((eTypeArr) => {
                                            return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
                                        })}
                                    </Select>

                                </Grid>
                                <Grid item xs={12}>

                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            required
                                            name="employmentStartDate"
                                            margin="normal"
                                            id="1"
                                            label="Start Date"
                                            format="MM/dd/yyyy"
                                            value={employmentStartDates["0"] || ""}
                                            onChange={() => handleEmploymentStartDateChange(this.value, 0)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>

                                </Grid>
                                <Grid item xs={12}>

                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            required
                                            name="employmentEndDate"
                                            margin="normal"
                                            id="1"
                                            label="End Date"
                                            format="MM/dd/yyyy"
                                            value={employmentStartDates["0"] || ""}
                                            onChange={() => handleEmploymentEndDateChange(this.value, 0)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={12}>

                                    <TextField
                                        name="comments"
                                        id="comment"
                                        label="Comment"
                                        fullWidth
                                        required
                                    />

                                </Grid>
                            </Grid>
                        </React.Fragment>
                        <hr className='separator h-1 border-1 w-full my-12' />
                        <React.Fragment key={"Education History"}>

                            <Typography variant="h6" gutterBottom>
                                Education Form
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>

                                    <Select
                                        required
                                        name="educationLevel"
                                        id="education Level"
                                        labelId="Highest Education Level"
                                        fullWidth
                                        value={(value) => `${value}`}
                                        onChange={() => handleEducationLevelChange(this.value, "0")}>
                                        {Object.entries(EDUCATION_LEVEL).map((eTypeArr) => {
                                            return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
                                        })}
                                    </Select>

                                </Grid>
                                <Grid item xs={12} sm={12}>

                                    <TextField
                                        name="institution"
                                        required
                                        id="institution"
                                        label="Institution"
                                        fullWidth
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Select
                                        required
                                        id="attainment"
                                        placeholder="Award Conferred"
                                        fullWidth

                                        value={this.value}
                                        onChange={() => handleEducationAttainmentChange(this.value, "0")}
                                        renderValue={(value) => `${value}`}>
                                        {Object.entries(ATTAINMENT_TYPE).map((eTypeArr) => {
                                            return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
                                        })}
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            required
                                            margin="normal"
                                            id="1"
                                            label="Start Date"
                                            format="MM/dd/yyyy"
                                            value={educationStartDates["0"] || ""}
                                            onChange={() => handleEducationStartDateChange(this.value, 0)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            name="educationStartDate"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12}>


                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            name="educationEndDate"
                                            required
                                            margin="normal"
                                            id="1"
                                            label="End Date"
                                            format="MM/dd/yyyy"
                                            value={educationEndDates["0"] || ""}
                                            onChange={() => handleEducationEndDateChange(this.value, 0)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}

                                        />
                                    </MuiPickersUtilsProvider>

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <Select
                                        required
                                        name="prospectiveEmploymentType"
                                        id="prospectiveEmploymentType"
                                        label="Prospective Employment Type"
                                        placeholder="Prospective Employment Type"
                                        fullWidth
                                        value={this.value}
                                        onChange={() => handleProspectiveEmpTypeChange(this.value, "0")}
                                        renderValue={(value) => `${value}`}>
                                        {Object.entries(PROSPECTIVE_EMPLOYMENT_TYPE).map((eTypeArr) => {
                                            return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
                                        })}
                                    </Select>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                        <React.Fragment>
                            <div className={classes.buttons}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.button}
                                >  Complete Signup
                                </Button>
                            </div>
                        </React.Fragment>
                    </form>
                </Paper>
            </main>
        </React.Fragment >
    );
}