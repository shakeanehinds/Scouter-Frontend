import JobCard from '../../components/job_card';
import React, { useState, useEffect } from 'react';

function JobsPage() {


  const [jobs, setJobs] = useState([])

  useEffect(() => {

    fetch("https://scouterjm.herokuapp.com/applicant/dashboard/75")
      .then(resp => resp.json())
      .then(data => setJobs(data))
      .catch(err => console.log(err))

  }, [])



  return (
    
    <div className={"container"}>
      
      {
        jobs.map((job, idx) => {
          
          return <JobCard job={job} key={idx} />
          
        })
      }
      
    </div>

  );
}

export default JobsPage;
