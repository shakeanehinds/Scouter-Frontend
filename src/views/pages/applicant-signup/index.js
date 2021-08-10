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
import { InputLabel } from '@material-ui/core';
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
import { ContactSupportOutlined } from '@material-ui/icons';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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



    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
    };

    const [employmentStartDates, setEmploymentStartDates] = React.useState({
        0: new Date(),
        1: new Date()
    });
    const handleEmploymentStartDateChange = (date, id) => {
        console.log(date);
        const dates = { ...employmentStartDates };
        dates[id] = date;
        setEmploymentStartDates(dates);
    };

    const [employmentEndDates, setEmploymentEndDates] = React.useState({
        0: new Date(),
        1: new Date()
    });
    const handleEmploymentEndDateChange = (date, id) => {
        const dates = { ...employmentEndDates };
        dates[id] = date;
        setEmploymentEndDates(dates);
    };

    const [educationEndDates, setEducationEndDates] = React.useState({
        0: new Date(),
        1: new Date()
    });
    const handleEducationEndDateChange = (date, id) => {
        const dates = { ...educationEndDates };
        dates[id] = date;
        setEducationEndDates(dates);
    };

    const [educationStartDates, setEducationStartDates] = React.useState({
        0: new Date(),
        1: new Date()
    });
    const handleEducationStartDateChange = (date, id) => {
        const dates = { ...educationStartDates };
        dates[id] = date;
        setEducationStartDates(dates);
    };

    const [propectiveEmpType, setPropectiveEmpType] = React.useState('ALL');
    const handleProspectiveEmpTypeChange = (pol) => {
        const typeEmp = pol.target.value; //Object.keys(PROSPECTIVE_EMPLOYMENT_TYPE).find(key => PROSPECTIVE_EMPLOYMENT_TYPE[key] === value);
        setPropectiveEmpType(typeEmp);
    };

    const [empStatus, setEmpStatus] = React.useState('ALL');
    const handleEmploymentStatusChange = (event) => {

        //const typeEmp = Object.keys(EMPLOYMENT_STATUS).find(key => EMPLOYMENT_STATUS[key] === event.target.value);

        setEmpStatus(event.target.value);
    };


    const [employmentTypes, setEmploymentTypes] = React.useState({
        0: "",
        1: ""
    });
    const handleEmploymentTypeChange = (empType, id) => {
        const empTypes = { ...employmentTypes };
        empTypes[id] = empType.target.value; //Object.keys(EMPLOYMENT_STATUS).find(key => EMPLOYMENT_STATUS[key] === empType.target.value);
        setEmploymentTypes(empTypes);
    };

    const [placeOfEmployments, setPlaceOfEmployments] = React.useState({
        0: "",
        1: ""
    });
    const handleEmploymentPlaceChange = (empType, id) => {
        console.log(placeOfEmployments[0]);
        const empTypes = { ...placeOfEmployments };
        empTypes[id] = empType.target.value;
        setPlaceOfEmployments(empTypes);
    };

    const [institutions, setInstitutions] = React.useState({
        0: "",
        1: ""
    });
    const upDateInstitutions = (empType, id) => {
        const empTypes = { ...institutions };
        empTypes[id] = empType.target.value;
        setInstitutions(empTypes);
    };

    const [educationLevels, setEducationLevels] = React.useState({
        0: "",
        1: ""
    });
    const handleEducationLevelChange = (edLevel, id) => {
        const edLevels = { ...educationLevels };
        edLevels[id] = edLevel.target.value; // Object.keys(EMPLOYMENT_STATUS).find(key => EMPLOYMENT_STATUS[key] === edLevel.target.value);
        setEducationLevels(edLevels);
    };

    const [educationAttainmentss, setEducationAttainments] = React.useState({
        0: "",
        1: ""
    });
    const handleEducationAttainmentChange = (attainment, id) => {
        const attainments = { ...educationAttainmentss };
        attainments[id] = attainment.target.value; //Object.keys(EMPLOYMENT_STATUS).find(key => EMPLOYMENT_STATUS[key] === attainment.target.value);
        setEducationAttainments(attainments);
    };

    const [nationality, setNationality] = React.useState("");
    const updateNationality = (event) => {

        setNationality(event.target.value);
    }

    const [comments, setComments] = React.useState({
        0: "",
        1: ""
    });
    const updateComments = (event) => {

        setComments(event.target.value);
    }


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
                                            format="dd-MM-yyyy"
                                            value={selectedDate}
                                            onChange={(value) => handleDateChange(value)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="nationality">Nationality</InputLabel>
                                    <Select
                                        required
                                        labelId="nationality"
                                        name="nationality"
                                        value={nationality}
                                        onChange={(value) => updateNationality(value)}
                                        options={NATIONALITIES_LIST}
                                        defaultValue="Jamaican"
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
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="parish"
                                        label="Parish"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="country"
                                        label="Country"
                                        fullWidth
                                        required
                                    />
                                </Grid>

                            </Grid>
                        </React.Fragment >
                        <hr className='separator h-1 border-1 w-full my-12'></hr>
                        <React.Fragment key={"Employment History"}>


                            <Typography variant="h6" gutterBottom>
                                Employment History
                            </Typography>

                            {/*<Grid item xs={12} sm={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddWorkHistory}>
                        <Icon color="primary">add</Icon>
                        Add New Work History
                                    </Button>
                                    </Grid>*/}

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="employmentStatus">Current Employment Status</InputLabel>
                                    <Select
                                        required
                                        id="employmentStatus"
                                        label="Employment Status"
                                        fullWidth
                                        onChange={(value) => handleEmploymentStatusChange(value)}
                                        value={empStatus}
                                    >
                                        {Object.entries(EMPLOYMENT_STATUS).map((eTypeArr) => {
                                            return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
                                        })}
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography>Employment Record 1</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        name="placeOfEmployment"
                                        id="placeOfEmployment"
                                        label="Place of Employment"
                                        fullWidth
                                        value={placeOfEmployments[0]}
                                        onChange={(value) => handleEmploymentPlaceChange(value, 0)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    `<InputLabel id="employmentType">Employment Type</InputLabel>`
                                    <Select
                                        required
                                        onChange={(value) => handleEmploymentTypeChange(value, 0)}
                                        id="employmentType"
                                        name="employmentType"
                                        labelId="employmentType"
                                        fullWidth
                                        value={employmentTypes[0]}>

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
                                            value={employmentStartDates[0]}
                                            onChange={(value) => handleEmploymentStartDateChange(value, 0)}
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
                                            value={employmentStartDates[0]}
                                            onChange={(value) => handleEmploymentEndDateChange(value, 0)}
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
                                        value={comments[0]}
                                        onChange={(value) => updateComments(value, 0)}
                                    />

                                </Grid>
                                <hr className='separator h-1 border-1 w-12 my-12' />
                                <Grid item xs={12} sm={12}>
                                    <Typography>Employment Record 2</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        name="placeOfEmployment"
                                        id="placeOfEmployment"
                                        label="Place of Employment"
                                        fullWidth
                                        value={placeOfEmployments[1]}
                                        onChange={(value) => handleEmploymentPlaceChange(value, 1)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="employmentType">Employment Type</InputLabel>
                                    <Select
                                        required
                                        onChange={(value) => handleEmploymentTypeChange(value, 1)}
                                        id="employmentType"
                                        name="employmentType"
                                        labelId="employmentType"
                                        fullWidth
                                        value={employmentTypes[1]}>

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
                                            value={employmentStartDates[1]}
                                            onChange={(value) => handleEmploymentStartDateChange(value, 1)}
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
                                            value={employmentStartDates[1]}
                                            onChange={(value) => handleEmploymentEndDateChange(value, 1)}
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
                                        value={comments[1]}
                                        onChange={(value) => updateComments(value, 1)}
                                    />

                                </Grid>
                            </Grid>
                        </React.Fragment>
                        <hr className='separator h-1 border-1 w-12 my-12' />
                        <React.Fragment key={"Education History"}>

                            <Typography variant="h6" gutterBottom>
                                Education Form
                            </Typography>

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12}>
                                    <Typography>Education Record 1</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="educationLevel">Highest Education Level</InputLabel>
                                    <Select
                                        required
                                        name="educationLevel"
                                        id="education Level"
                                        labelId="educationLevel"
                                        fullWidth
                                        value={educationLevels[0]}
                                        onChange={(value) => handleEducationLevelChange(value, 0)}>
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
                                        value={institutions[0]}
                                        onChange={(value) => upDateInstitutions(value, 0)}
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="attainment">Award Conferred</InputLabel>
                                    <Select
                                        required
                                        id="attainment"
                                        labelId="attainment"

                                        fullWidth

                                        value={educationAttainmentss[0]}
                                        onChange={(value) => handleEducationAttainmentChange(value, 0)}
                                    >
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
                                            value={educationStartDates[0]}
                                            onChange={(value) => handleEducationStartDateChange(value, 0)}
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
                                            onChange={(value) => handleEducationEndDateChange(value, 0)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}

                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <hr className='separator h-1 border-1 w-12 my-12' />
                                <Grid item xs={12} sm={12}>
                                    <Typography>Employment Record 2</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="educationLevel">Highest Education Level</InputLabel>
                                    <Select
                                        required
                                        name="educationLevel"
                                        id="education Level"
                                        labelId="educationLevel"
                                        fullWidth
                                        value={educationLevels[1]}
                                        onChange={(value) => handleEducationLevelChange(value, 1)}>
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
                                        value={institutions[1]}
                                        onChange={(value) => upDateInstitutions(value, 1)}
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="attainment">Award Conferred</InputLabel>
                                    <Select
                                        required
                                        id="attainment"
                                        labelId="attainment"

                                        fullWidth

                                        value={educationAttainmentss[1]}
                                        onChange={(value) => handleEducationAttainmentChange(value, 1)}
                                    >
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
                                            value={educationStartDates[1]}
                                            onChange={(value) => handleEducationStartDateChange(value, 1)}
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
                                            value={educationEndDates[1]}
                                            onChange={(value) => handleEducationEndDateChange(value, 1)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}

                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="prospectiveEmpType">What type of jobs are you looking for?</InputLabel>
                                    <Select
                                        required
                                        name="prospectiveEmploymentType"
                                        id="prospectiveEmploymentType"
                                        labelId="prospectiveEmpType"
                                        fullWidth
                                        value={propectiveEmpType}
                                        onChange={(value) => handleProspectiveEmpTypeChange(value)}
                                    >
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
                        </React.Fragment>*
                    </form>
                </Paper>
            </main>
        </React.Fragment >
    );
}