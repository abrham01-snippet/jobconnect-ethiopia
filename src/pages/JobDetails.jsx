import { useParams } from "react-router-dom";
import mockJobs from "../data/jobs.js";

function JobDetails() {
  const { id } = useParams();
  const job = mockJobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div>
        <h1>Job Details - {id}</h1>
        <h2>Job not found</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Job Details - {id}</h1>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>

      <h3>Responsibilities</h3>
      <ul>
        {job.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Qualifications</h3>
      <ul>
        {job.qualifications.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Skills</h3>
      <ul>
        {job.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p><strong>Deadline:</strong> {job.deadline}</p>
    </div>
  );
}

export default JobDetails;