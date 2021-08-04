import { fetchJSON } from './main-api';
import REQUEST_HEADERS from './main-api';

export const signupAsApplicant = (applicant) => {
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

export const createCompany = (applicant) => {
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

export const fetchApplicantJobApplicants = (applicant) => {
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

export const fetchCompany = (applicant) => {
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

export const fetchApplicantApplication = (applicant) => {
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

export const submitApplication = (applicant) => {
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

export const fetchApplicant = (applicant) => {
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