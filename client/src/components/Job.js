import React from 'react';

const Job = ({job}) => {
    return (
    <div className="job">
        <div className="job-title">
        {job.title}
        </div>
        <div className="job-company">
        {job.company}
        </div>
    </div>
    );
}
 
export default Job;