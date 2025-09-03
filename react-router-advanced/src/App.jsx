import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

<Route 
  path="/profile/*" 
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  } 
/>



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Dynamic Route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Nested route for Profile (protected later) */}
        <Route path="/profile/*" element={<Profile />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
