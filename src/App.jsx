import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/about" element={<About />} />
  <Route path="/users/:userId" element={<UserPage />} />
</Routes>