import { fetchJSON } from './main-api';
import { GET_REQUEST_HEADERS } from './main-api';

export const fetchDashbaordData = (applicantId) => {
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