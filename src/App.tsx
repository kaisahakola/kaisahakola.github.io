import "./App.css";
import Header from "./components/header/Header";
import ProjectList from "./components/projects/ProjectList";
import Contacts from "./components/contacts/Contacts";
import AboutMe from "./components/aboutMe/AboutMe";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const heading = {
    header: "kaisa hakola",
    subtitle: "Software Developer",
  };

  const padding = {
    padding: 10,
  };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/about-me">
          about me
        </Link>
        <Link style={padding} to="/projects">
          projects
        </Link>
        <Link style={padding} to="/contacts">
          contacts
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Header heading={heading} />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
