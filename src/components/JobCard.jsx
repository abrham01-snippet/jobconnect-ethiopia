import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.type}</p>
      <p>{job.salary}</p>

      <Link to={`/jobs/${job.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default JobCard;