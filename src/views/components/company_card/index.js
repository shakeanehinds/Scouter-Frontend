import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CompanyCard({ company }) {
  return (
    <div
      className={
        'flex justify-between p-6 rounded items-center mb-2 bg-white border'
      }
    >
      <div className="logo w-20 h-auto">
        <img src={company.logo} alt="Company logo" className={'w-full'} />
      </div>

      <div>
        <p className={'text-2xl font-semibold text-gray-600'}>
          {company.companyName}
        </p>
      </div>

      <Link
        to={{
          pathname: `/company-details/${company.id}`,
        }}
      >
        <button
          href=""
          className={
            'bg-green-600 hover:bg-green-700 text-white p-3 rounded shadow-lg hover:shadow font-semibold'
          }
        >
          More details
        </button>
      </Link>
    </div>
  );
}
