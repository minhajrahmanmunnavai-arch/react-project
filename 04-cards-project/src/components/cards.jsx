import React from 'react';

const JobCard = (props) => {

    return (
            <div className="job-card">

                <div className="card-top">
                    <div className="company-logo">
                        <img src={props.brandlogo} alt="Google"/>
                    </div>

                    <span className="saved">Saved 🔖</span>
                </div>

                <div className="job-info">
                    <div className="company-name">
                        {props.companyName}
                        <span className="posted">{props.timeAgo}</span>
                    </div>

                    <h2>{props.post}</h2>

                    <div className="tags">
                        <span>{props.tag1}</span>
                        <span>{props.location}</span>
                        <span>{props.tag2}</span>
                    </div>
                </div>

                <div className="card-bottom">

                    <div className="salary">
                        <strong>{props.salary}</strong>
                    </div>

                    <button className="apply-btn">Apply now</button>

                </div>

            </div>
    )
};

export default JobCard;