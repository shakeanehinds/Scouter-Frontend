import * as formApi from './form-api';
import * as profileApi from './profile-api';
import * as applicantApi from './application-api';

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

export const fetchJSON = (path, fetchOptions, positiveStatus, resolveErrorFunc) => {
    fetch(`${BASE_URL}${path}`, fetchOptions).then(
        response => {
            console.log(response.status);
            if (!response.ok) {
                console.log('Failed to complete request');
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

export { formApi, profileApi, applicantApi };