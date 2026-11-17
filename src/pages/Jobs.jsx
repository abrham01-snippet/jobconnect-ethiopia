import mockJobs from "../data/jobs.js";
import JobCard from "../components/JobCard.jsx";

function Jobs() {
  return (
    <>
      <h1>Available Jobs</h1>

      <div>
        {mockJobs.map((item) => (
          <JobCard key={item.id} job={item} />
        ))}
      </div>
    </>
  );
}

export default Jobs;