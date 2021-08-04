import { fetchJSON } from './main-api';
import { POST_REQUEST_HEADERS, GET_REQUEST_HEADERS } from './main-api';

export const fetchApplicantJobApplications = (applicantId) => {
    console.log('applicantId from form ', applicantId);
    applicantId = 5;

    const fetchOptions = {
        method: 'POST',
        ...GET_REQUEST_HEADERS
    }

    const path = `/application?applicantId=${applicantId}`;

    const responseData = fetchJSON(path, fetchOptions);
    return responseData; //Rreturns list of applications with 200
}

export const fetchApplicantApplication = (applicantId) => {
    console.log('applicantId from form ', applicantId);
    applicantId = 5;

    const fetchOptions = {
        method: 'POST',
        ...GET_REQUEST_HEADERS
    }

    const path = `/application?applicantId=${applicantId}`;

    const responseData = fetchJSON(path, fetchOptions);
    return responseData; //Rreturns list of applications with 200;
} // on hold

export const submitApplication = (applicantId, companyId, jobPostId) => {
    console.log(`applying \n applicant ${applicantId} \n companyId ${companyId} \n jobPostId ${jobPostId}`);
    const fetchOptions = {
        method: 'POST',
        ...POST_REQUEST_HEADERS
    }

    const path = `/application?applicantId=${applicantId}&companyId=${companyId}&jobPostId=${jobPostId}`;

    const responseData = fetchJSON(path, fetchOptions);
    return responseData.status === 200;
}

export const fetchJobRecommendations = (applicant) => {
    applicant = {
        "firstName": "Giordanne",
        "middleName": "kjkj",
        "lastName": "Dale",
        "dateOfBirth": "2008-04-23",
        "nationality": "Jamaican",
        "taxRegistrationNumber": "3325673582",
        "applicantAddress": [{
            "addressType": "MAILING",
            "streetNumber": "7",
            "streetName": "South Street",
            "city": "May Pen",
            "parish": "Clarendon",
            "county": "Middlesex",
            "country": "Jamaica"
        }],
        "employmentProfile": {
            "listOfEmployment": [{
                "placeOfEmployment": "Surefix Software Solutions",
                "employmentType": "PART_TIME",
                "employmentStartDate": "2011-01-03",
                "employmentEndDate": "2013-04-05",
                "remarks": "It was a good working experience"
            }],
            "employmentStatus": "EMPLOYED"

        },
        "eductionProfile": {
            "listOfEducation": [
                {
                    "level": "UNIVERSITY",
                    "institution": "University College of the Caribbean",
                    "attainment": "BACHELOR",
                    "startDate": "2003-01-03",
                    "endDate": "2005-07-07"
                }
            ]

        }
    }

    const fetchOptions = {
        method: 'POST',
        ...REQUEST_HEADERS,
        body: JSON.stringify(applicant)
    }

    const path = '/applicant'

    const responseData = fetchJSON(path, fetchOptions);
    return responseData.status === 201;
}