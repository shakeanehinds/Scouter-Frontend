import React from 'react';

import AddressCard from '../address_card';

export default function JobCard({ job }) {
  const baseUrl = 'https://scouterjm.herokuapp.com';

  const { company, jobPosting } = job;

  return (
    <div className="job_card">
      <div className={'flex items-center mb-10'}>
        <div className="logo">
          <a href={`${baseUrl}/company/${company.id}`}>
            <img
              className="w-32 h-auto"
              src={company.logo}
              alt="company-logo"
            />
          </a>
        </div>

        <div className="company_info">
          <div className="name text-sub mb-10">
            <a href={`${baseUrl}/company/${company.id}`}>
              {company.companyName}
            </a>
          </div>

          <div className="address">
            {company.companyAddress.length > 0 && (
              <AddressCard address={company.companyAddress[0]} />
            )}
          </div>

          <div className="website">
            <a href={company.website}>{company.website}</a>
          </div>
        </div>
      </div>

      <div>
        <div className="job_info">
          <div className="desc mb-10">
            <p className={'text-sub'}>Description: </p>
            <p>{jobPosting.description}</p>
          </div>

          <div className="position mb-10">
            <p className={'text-sub'}>Postion: </p>
            <p>{jobPosting.position}</p>
          </div>

          <div className="emp_type mb-10">
            <p className={'text-sub'}>Employment Type: </p>

            <p>{jobPosting.employmentType}</p>
          </div>
        </div>

        <a
          className="view_more"
          href={`${baseUrl}/jobPosting/${jobPosting.id}`}
        >
          View more
        </a>
      </div>
    </div>
  );
}
