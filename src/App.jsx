import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import Apply from "./pages/Apply.jsx";
import MyApplications from "./pages/MyApplications.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/jobs/:id/apply" element={<Apply />} />
        <Route path="/my-applications" element={<MyApplications />} />
      </Routes>
    </>
  );
}

export default App;