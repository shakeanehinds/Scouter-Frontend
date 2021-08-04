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

export const fetchJobRecommendations = (applicantId) => {
    console.log('applicantId from form ', applicantId);
    applicantId = 5;

    const fetchOptions = {
        method: 'GET',
        ...GET_REQUEST_HEADERS
    }

    const path = `/applicant/dashbaord/${applicantId}`;

    const responseData = fetchJSON(path, fetchOptions);
    return responseData; //returns dashboard data with 200
}

export const fetchApplicationStatus = (applicantId) => {
    console.log('applicantId from form ', applicantId);
    applicantId = 5;

    const fetchOptions = {
        method: 'GET',
        ...GET_REQUEST_HEADERS
    }

    const path = `/applicant/dashbaord/${applicantId}`;

    const responseData = fetchJSON(path, fetchOptions);
    return responseData; //returns dashboard data with 200
}