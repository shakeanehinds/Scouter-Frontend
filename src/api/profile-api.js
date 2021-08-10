// import { fetchJSON } from './main-api';
// import { POST_REQUEST_HEADERS, GET_REQUEST_HEADERS } from './main-api';

// export const signupAsApplicant = (applicant) => {
//     console.log('applicant from form ', applicant);
//     // applicant = {
//     //     "firstName": "Giordanne",
//     //     "middleName": "kjkj",
//     //     "lastName": "Dale",
//     //     "dateOfBirth": "2008-04-23",
//     //     "nationality": "Jamaican",
//     //     "taxRegistrationNumber": "3325673582",
//     //     "applicantAddress": [{
//     //         "addressType": "MAILING",
//     //         "streetNumber": "7",
//     //         "streetName": "South Street",
//     //         "city": "May Pen",
//     //         "parish": "Clarendon",
//     //         "county": "Middlesex",
//     //         "country": "Jamaica"
//     //     }],
//     //     "employmentProfile": {
//     //         "listOfEmployment": [{
//     //             "placeOfEmployment": "Surefix Software Solutions",
//     //             "employmentType": "PART_TIME",
//     //             "employmentStartDate": "2011-01-03",
//     //             "employmentEndDate": "2013-04-05",
//     //             "remarks": "It was a good working experience"
//     //         }],
//     //         "employmentStatus": "EMPLOYED"

//     //     },
//     //     "eductionProfile": {
//     //         "listOfEducation": [
//     //             {
//     //                 "level": "UNIVERSITY",
//     //                 "institution": "University College of the Caribbean",
//     //                 "attainment": "BACHELOR",
//     //                 "startDate": "2003-01-03",
//     //                 "endDate": "2005-07-07"
//     //             }
//     //         ]

//     //     }
//     // }

//     const fetchOptions = {
//         method: 'POST',
//         ...POST_REQUEST_HEADERS,
//         body: JSON.stringify(applicant)
//     }

//     const path = '/applicant';

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData.status === 201;
// }

// export const createCompany = (company) => {
//     console.log('company from form ', company);
//     company = {
//         "companyName": "Surefix Software Solutions",
//         "companySize": "MEDIUM",
//         "companyAddress": [{ "streetNumber": "104", "streetName": "Princess Street", "city": "Kingston", "parish": "Kingston", "county": "Surrey", "country": "Jamaica" }]
//         ,
//         "taxRegistrationNumber": "6574321",
//         "logo": "https://yt3.ggpht.com/ytc/AKedOLTVR_eGUebw6r3jZXZEHB-PUw1C6wMgDJ10iLiy=s900-c-k-c0x00ffffff-no-rj",
//         "headOfCompany": "Pauline Fubsuyi",
//         "isPublicCompany": "False",
//         "companyEstablishedDate": "1998-05-07",
//         "website": "surefix-techsol.com",
//         "email": "info@surefix-techsol.com"
//     }


//     const fetchOptions = {
//         method: 'POST',
//         ...POST_REQUEST_HEADERS,
//         body: JSON.stringify(company)
//     }

//     const path = '/company';

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData.status === 201;
// }

// export const fetchCompany = (companyId) => {
//     console.log('companyId from form ', companyId);
//     companyId = 5;

//     const fetchOptions = {
//         method: 'GET',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = `/company/${companyId}`;

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData.status; //returns company data with 200
// }

// export const fetchAllCompanies = () => {

//     const fetchOptions = {
//         method: 'GET',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = '/company';

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData; //returns array of companies
// }

// export const fetchApplicant = (applicantId) => {
//     console.log('applicantId from form ', applicantId);
//     applicantId = 5;

//     const fetchOptions = {
//         method: 'POST',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = `/applicant/${applicantId}`;

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData; //returns applicant data with 200
// }





// export const createCompany = (company) => {
//     console.log('company from form ', company);
//     company = {
//         "companyName": "Surefix Software Solutions",
//         "companySize": "MEDIUM",
//         "companyAddress": [{ "streetNumber": "104", "streetName": "Princess Street", "city": "Kingston", "parish": "Kingston", "county": "Surrey", "country": "Jamaica" }]
//         ,
//         "taxRegistrationNumber": "6574321",
//         "logo": "https://yt3.ggpht.com/ytc/AKedOLTVR_eGUebw6r3jZXZEHB-PUw1C6wMgDJ10iLiy=s900-c-k-c0x00ffffff-no-rj",
//         "headOfCompany": "Pauline Fubsuyi",
//         "isPublicCompany": "False",
//         "companyEstablishedDate": "1998-05-07",
//         "website": "surefix-techsol.com",
//         "email": "info@surefix-techsol.com"
//     }


//     const fetchOptions = {
//         method: 'POST',
//         ...POST_REQUEST_HEADERS,
//         body: JSON.stringify(company)
//     }

//     const path = '/company';

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData.status === 201;
// }

// export const fetchCompany = (companyId) => {
//     console.log('companyId from form ', companyId);
//     companyId = 5;

//     const fetchOptions = {
//         method: 'GET',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = `/company/${companyId}`;

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData.status; //returns company data with 200
// }

// export const fetchAllCompanies = () => {

//     const fetchOptions = {
//         method: 'GET',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = '/company';

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData; //returns array of companies
// }

// export const fetchApplicant = (applicantId) => {
//     console.log('applicantId from form ', applicantId);
//     applicantId = 5;

//     const fetchOptions = {
//         method: 'POST',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = `/applicant/${applicantId}`;

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData; //returns applicant data with 200
// }
