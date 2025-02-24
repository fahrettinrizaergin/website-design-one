import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Layout from "./components/Layout";

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} /> 
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
