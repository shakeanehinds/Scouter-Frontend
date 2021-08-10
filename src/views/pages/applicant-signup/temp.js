// const getStepContent = (step) => {
//     switch (step) {
//         //Personal Details
//         case 0:
//             return (
//                 <React.Fragment>
//                     <Typography variant="h6" gutterBottom>
//                         Personal Details
//                     </Typography>
//                     <Grid container spacing={3}>
//                         <Grid item xs={12} sm={4}>
//                             <Controller
//                                 name="firstName"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateName(value);
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         id="firstName"
//                                         label="First name"
//                                         fullWidth
//                                         required
//                                         {...field}
//                                     />
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <Controller
//                                 name="middleName"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     validate: (value) => {
//                                         return validateName(value);
//                                     }
//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         id="middleName"
//                                         label="Middle name"
//                                         fullWidth

//                                         {...field}
//                                     />
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <Controller
//                                 name="lastName"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateName(value);
//                                     }
//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         required
//                                         id="lastName"
//                                         label="Last name"
//                                         fullWidth

//                                         {...field}
//                                     />
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 name="dateOfBirth"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                                         <KeyboardDatePicker
//                                             required
//                                             margin="normal"
//                                             id="dob"
//                                             label="Date of Birth"
//                                             format="MM/dd/yyyy"
//                                             value={selectedDate}
//                                             onChange={() => handleDateChange}
//                                             KeyboardButtonProps={{
//                                                 'aria-label': 'change date',
//                                             }}
//                                             {...field}
//                                         />
//                                     </MuiPickersUtilsProvider>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 name="nationality"
//                                 control={control}
//                                 defaultValue="Jamaican"
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <Select
//                                         required
//                                         label="Nationality"
//                                         value={field.value}
//                                         {...field}
//                                         options={NATIONALITIES_LIST}
//                                         renderValue={(value) => `${value}`}>
//                                         {NATIONALITIES_LIST.map((nationality) => {
//                                             return <MenuItem value={nationality}>{nationality}</MenuItem>
//                                         })}
//                                     </Select>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Controller
//                                 name="trn"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateTRN(value);
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         required
//                                         id="trn"
//                                         label="Tax Registration Number / Social Security Number"
//                                         fullWidth
//                                         {...field}
//                                     />
//                                 } />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Controller

//                                 name="streetNumber"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateString(value);
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         required
//                                         id="streetNumber"
//                                         label="Address line 1"
//                                         fullWidth

//                                         {...field}
//                                     />
//                                 } />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Controller
//                                 name="streetName"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateString();
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         label="Address line 2"
//                                         fullWidth
//                                         {...field}
//                                     />
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 name="city"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateString();
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         required
//                                         id="city"
//                                         label="City"
//                                         fullWidth
//                                         {...field}
//                                     />
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 control={control}
//                                 name="parish"
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateString();
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         id="parish"
//                                         label="Parish"
//                                         fullWidth
//                                         {...field}
//                                     />
//                                 } />

//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 required
//                                 control={control}
//                                 name="country"
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateString();
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         id="country"
//                                         label="Country"
//                                         fullWidth
//                                         {...field}
//                                     />
//                                 } />

//                         </Grid>

//                     </Grid>
//                 </React.Fragment >
//             );
//         //Employment Details                   
//         case 1:
//             return (
//                 <React.Fragment>

//                     <Typography variant="h6" gutterBottom>
//                         Employment History
//                     </Typography>
//                     <div id="employmentContainer">

//                         {/* <Grid item xs={12} sm={12}>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 onClick={handleAddWorkHistory}>
//                                 <Icon color="primary">add</Icon>
//                                 Add New Work History
//                             </Button>
//             </Grid>*/}
//                     </div>
//                     <Grid container spacing={3}>
//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 name="employmentStatus"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <Select
//                                         required
//                                         id="employmnetStatus"
//                                         label="Employment Status"
//                                         fullWidth
//                                         onChange={() => handleEmploymentStatusChange(field.value, field.id)}
//                                         {...field}
//                                         value={field.value}
//                                         renderValue={(value) => `${value}`}>
//                                         {Object.entries(EMPLOYMENT_STATUS).map((eTypeArr) => {
//                                             return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
//                                         })}
//                                     </Select>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={12}>
//                             <Controller
//                                 control={control}
//                                 name="placeOfEmployment"
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateString();
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         required
//                                         id="placeOfEmployment"
//                                         label="Place of Employment"
//                                         fullWidth
//                                     />
//                                 } />
//                         </Grid>

//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 name="employmentType"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <Select
//                                         required
//                                         onChange={() => handleEmploymentTypeChange(field.value, field.id)}
//                                         id="employmentType"
//                                         label="Employment Type"
//                                         fullWidth
//                                         {...field}
//                                         value={field.value}
//                                         renderValue={(value) => `${value}`}>
//                                         {Object.entries(EMPLOYMENT_TYPE).map((eTypeArr) => {
//                                             return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
//                                         })}
//                                     </Select>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Controller
//                                 name="employmentStartDate"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                                         <KeyboardDatePicker
//                                             required
//                                             margin="normal"
//                                             id="1"
//                                             label="Start Date"
//                                             format="MM/dd/yyyy"
//                                             value={field.value}
//                                             onChange={() => handleEmploymentStartDateChange(field.value, field.id)}
//                                             KeyboardButtonProps={{
//                                                 'aria-label': 'change date',
//                                             }}
//                                             {...field}
//                                         />
//                                     </MuiPickersUtilsProvider>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Controller
//                                 name="employmentEndDate"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                                         <KeyboardDatePicker
//                                             required
//                                             margin="normal"
//                                             id="1"
//                                             label="End Date"
//                                             format="MM/dd/yyyy"
//                                             value={field.value}
//                                             onChange={() => handleEmploymentEndDateChange(field.value, field.id)}
//                                             KeyboardButtonProps={{
//                                                 'aria-label': 'change date',
//                                             }}
//                                             {...field}
//                                         />
//                                     </MuiPickersUtilsProvider>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={12}>
//                             <Controller
//                                 name="remarks"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateName(value);
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         id="comment"
//                                         label="Comment"
//                                         fullWidth
//                                         required
//                                         {...field}
//                                     />
//                                 } />
//                         </Grid>
//                     </Grid>
//                 </React.Fragment>
//             );
//         //Education Details               
//         case 2:
//             return (
//                 <React.Fragment>
//                     <Typography variant="h6" gutterBottom>
//                         Education Form
//                     </Typography>
//                     <Grid container spacing={3}>
//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 name="educationLevel"
//                                 label="Highest Education Level"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <Select
//                                         required
//                                         id="education Level"
//                                         labelId="Highest Education Level"
//                                         fullWidth
//                                         {...field}
//                                         value={field.value}
//                                         onChange={() => handleEducationLevelChange(field.value, field.id)}
//                                         renderValue={(value) => `${value}`}>
//                                         {Object.entries(EDUCATION_LEVEL).map((eTypeArr) => {
//                                             return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
//                                         })}
//                                     </Select>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={12}>
//                             <Controller
//                                 name="institution"
//                                 control={control}
//                                 defaultValue=""
//                                 rules={{
//                                     required: true,
//                                     validate: (value) => {
//                                         return validateString(value);
//                                     }

//                                 }}
//                                 render={({ field }) =>
//                                     <TextField
//                                         required
//                                         id="institution"
//                                         label="Institution"
//                                         fullWidth
//                                         {...field}
//                                     />
//                                 } />

//                         </Grid>

//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 name="attainment"
//                                 label="Award Conferred"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <Select
//                                         required
//                                         id="attainment"
//                                         placeholder="Award Conferred"
//                                         fullWidth
//                                         {...field}
//                                         value={field.value}
//                                         onChange={() => handleEducationAttainmentChange(field.value, field.id)}
//                                         renderValue={(value) => `${value}`}>
//                                         {Object.entries(ATTAINMENT_TYPE).map((eTypeArr) => {
//                                             return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
//                                         })}
//                                     </Select>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Controller
//                                 name="educationStartDate"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                                         <KeyboardDatePicker
//                                             required
//                                             margin="normal"
//                                             id="1"
//                                             label="Start Date"
//                                             format="MM/dd/yyyy"
//                                             value={field.value}
//                                             onChange={() => handleEducationStartDateChange(field.value, field.id)}
//                                             KeyboardButtonProps={{
//                                                 'aria-label': 'change date',
//                                             }}
//                                             {...field}
//                                         />
//                                     </MuiPickersUtilsProvider>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Controller
//                                 name="educationEndDate"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                                         <KeyboardDatePicker
//                                             required
//                                             margin="normal"
//                                             id="1"
//                                             label="End Date"
//                                             format="MM/dd/yyyy"
//                                             value={field.value}
//                                             onChange={() => handleEducationEndDateChange(field.value, field.id)}
//                                             KeyboardButtonProps={{
//                                                 'aria-label': 'change date',
//                                             }}
//                                             {...field}
//                                         />
//                                     </MuiPickersUtilsProvider>
//                                 } />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Controller
//                                 name="prospectiveEmploymentType"
//                                 label="Prospective Employment Type"
//                                 control={control}
//                                 rules={{ required: true }}
//                                 render={({ field }) =>
//                                     <Select
//                                         required
//                                         id="prospectiveEmploymentType"
//                                         placeholder="Prospective Employment Type"
//                                         fullWidth
//                                         {...field}
//                                         value={field.value}
//                                         onChange={() => handleProspectiveEmpTypeChange(field.value, field.id)}
//                                         renderValue={(value) => `${value}`}>
//                                         {Object.entries(PROSPECTIVE_EMPLOYMENT_TYPE).map((eTypeArr) => {
//                                             return <MenuItem value={eTypeArr[1]}>{eTypeArr[1]}</MenuItem>
//                                         })}
//                                     </Select>
//                                 } />
//                         </Grid>
//                     </Grid>
//                 </React.Fragment>
//             );
//         default:
//             throw new Error('Ooops Something Went Wrong. Contact Customer Care');
//     }
// }