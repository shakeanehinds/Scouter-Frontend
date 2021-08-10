

//PRIMARY CONSTANTS
export const BASE_URL = "http://scouter.point876solutions.com";

export const POST_REQUEST_HEADERS = {
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Postman-Token': '<calculated when request is sent>',
        'Content-Length': '<calculated when request is sent>',
        'Host': '<calculated when request is sent>',
        'User-Agent': 'PostmanRuntime/7.28.3',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
};

export const GET_REQUEST_HEADERS = {
    headers: {
        'Cache-Control': 'no-cache',
        'Postman-Token': '<calculated when request is sent>',
        'Host': '<calculated when request is sent>',
        'User-Agent': 'PostmanRuntime/7.28.3',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
};

export const signupAsApplicant = (applicant) => {
    console.log('applicant from form ', applicant);
    // applicant = {
    //     "firstName": "Giordanne",
    //     "middleName": "kjkj",
    //     "lastName": "Dale",
    //     "dateOfBirth": "2008-04-23",
    //     "nationality": "Jamaican",
    //     "taxRegistrationNumber": "3325673582",
    //     "applicantAddress": [{
    //         "addressType": "MAILING",
    //         "streetNumber": "7",
    //         "streetName": "South Street",
    //         "city": "May Pen",
    //         "parish": "Clarendon",
    //         "county": "Middlesex",
    //         "country": "Jamaica"
    //     }],
    //     "employmentProfile": {
    //         "listOfEmployment": [{
    //             "placeOfEmployment": "Surefix Software Solutions",
    //             "employmentType": "PART_TIME",
    //             "employmentStartDate": "2011-01-03",
    //             "employmentEndDate": "2013-04-05",
    //             "remarks": "It was a good working experience"
    //         }],
    //         "employmentStatus": "EMPLOYED"

    //     },
    //     "eductionProfile": {
    //         "listOfEducation": [
    //             {
    //                 "level": "UNIVERSITY",
    //                 "institution": "University College of the Caribbean",
    //                 "attainment": "BACHELOR",
    //                 "startDate": "2003-01-03",
    //                 "endDate": "2005-07-07"
    //             }
    //         ]

    //     }
    // }

    const fetchOptions = {
        method: 'POST',
        ...POST_REQUEST_HEADERS,
        body: JSON.stringify(applicant)
    }

    const path = '/applicant';

    const responseData = fetchJSON(path, fetchOptions);
    return responseData.status === 201;
}

export const fetchJSON = (path, fetchOptions, positiveStatus, resolveErrorFunc) => {
    fetch(`${BASE_URL}${path}`, fetchOptions).then(
        response => {

            if (!response.status === 201) {

                const err = new Error(`Failed to fetch ${path ?? 'no-url'} with status: ${response.status ?? 'no-status'} and message: ${response.message}`);
                if (resolveErrorFunc) {
                    return resolveErrorFunc(err);
                } else {
                    throw err;
                }
            }
            return response;
        });
};


// export const fetchApplicantJobApplications = (applicantId) => {
//     console.log('applicantId from form ', applicantId);
//     applicantId = 5;

//     const fetchOptions = {
//         method: 'POST',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = `/application?applicantId=${applicantId}`;

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData; //Rreturns list of applications with 200
// }

// export const submitApplication = (applicantId, companyId, jobPostId) => {
//     console.log(`applying \n applicant ${applicantId} \n companyId ${companyId} \n jobPostId ${jobPostId}`);
//     const fetchOptions = {
//         method: 'POST',
//         ...POST_REQUEST_HEADERS
//     }

//     const path = `/application?applicantId=${applicantId}&companyId=${companyId}&jobPostId=${jobPostId}`;

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData.status === 200;
// }

// export const fetchJobRecommendations = (applicantId) => {
//     console.log('applicantId from form ', applicantId);
//     applicantId = 5;

//     const fetchOptions = {
//         method: 'GET',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = `/applicant/dashbaord/${applicantId}`;

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData; //returns dashboard data with 200
// }

// export const fetchApplicationStatus = (applicantId) => {
//     console.log('applicantId from form ', applicantId);
//     applicantId = 5;

//     const fetchOptions = {
//         method: 'GET',
//         ...GET_REQUEST_HEADERS
//     }

//     const path = `/applicant/dashbaord/${applicantId}`;

//     const responseData = fetchJSON(path, fetchOptions);
//     return responseData; //returns dashboard data with 200
// }

