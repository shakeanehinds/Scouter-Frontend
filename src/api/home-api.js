//interfactes
/*interface CompanyUser {
    companyName: String,
    companyEmail: String,
    companyContactFirstName: String,
    companyContactLastName: String,
    companyAddress?: String
}*/
import { useEffect } from 'react';


//signup functions
export const signupAsRecruiter = () => {
    console.log('signup as recruiter clicked');
}

/*export const fetchJSON = async (url, options) => {
    useEffect(() => {
        fetch(url, options).then(
            response => {
                console.log(response.status);
                if (!response.ok) {
                    console.log('Failed to fetch data');
                    throw Error(`Failed to fetch ${url} with status: ${response.status} and message: ${response.message}`);
                }
                return response.json();
        });
    });
}*/

export const signupAsApplicant = (applicant) => {
    console.log(applicant ?? 'no applicant');

    //temp
    applicant = {
        "firstName": "Maya",
        "middleName": "kjkj",
        "lastName": "Dale",
        "dateOfBirth": "2008-04-23",
        "nationality": "Jamaican",
        "taxRegistrationNumber": "2325673582",
        "applicantAddress": [{
            "addressType": "MAILING", "streetNumber": "7", "streetName": "South Street", "city": "May Pen", "parish": "Clarendon", "county": "Middlesex", "country": "Jamaica"

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
    };

    const url = "https://scouterjm.herokuapp.com/applicant";

    const fetchOptions = {
        method: 'POST',
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
        },
        body: JSON.stringify(applicant),
    };

    /* useEffect(() => {
         fetch(url, options).then(
             response => {
                 console.log(response.status);
                 if (!response.ok) {
                     console.log('Failed to fetch data');
                     throw Error(`Failed to fetch ${url} with status: ${response.status} and message: ${response.message}`);
                 }
                 return response.json();
             });
     });*/
}

const signupAsApplicant = (values) => {
    console.log(values ?? 'no applicant');
    const applicant = {
        "firstName": "Giordanne",
        "middleName": "kjkj",
        "lastName": "Dale",
        "dateOfBirth": "2008-04-23",
        "nationality": "Jamaican",
        "taxRegistrationNumber": "3325673582",
        "applicantAddress": [{
            "addressType": "MAILING", "streetNumber": "7", "streetName": "South Street", "city": "May Pen", "parish": "Clarendon", "county": "Middlesex", "country": "Jamaica"

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

    const url = "https://scouterjm.herokuapp.com/applicant";

    const fetchOptions = {
        method: 'POST',
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
        },
        body: JSON.stringify(applicant),
    };
    console.log('url', url);
    console.log('fetchOptions ', fetchOptions);
    console.log('fetch options headers ', fetchOptions.headers);

    fetch(url, fetchOptions).then(
        response => {
            console.log(response.status);
            if (!response.ok) {
                console.log('Failed to fetch data');
                throw Error(`Failed to fetch ${url} with status: ${response.status} and message: ${response.message}`);
            }
            return response.json();
        });

};


//loginfunctions
export const isAuthenticated = () => {
    loginAsApplicant();
    return true;
}
export const loginAsApplicant = () => {
    const user = {
        userName: 'jessicaj',
        firstName: 'Jessica',
        lastName: 'James',

    }

    localStorage.setItem('applicantUser', user);
    return user;
}

export const loginAsRecruiter = () => {
    const user = {
        companyName: 'MuffetEnterprises',
        companyEmail: 'muffetenterprises@gmail.com',
        firstName: 'Sherica',
        lastName: 'Jackson',
        companyAddress: '124 Slipe Road, Off CrossRoads, Kingston 2'
    }

    localStorage.set('companyUser', user);
    return user;
}