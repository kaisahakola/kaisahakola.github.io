import "./App.css";
import Header from "./components/header/Header";
import ProjectList from "./components/projects/ProjectList";
import Contacts from "./components/Contacts/Contacts";
import AboutMe from "./components/aboutMe/AboutMe";
import Navigation from "./components/Navbar/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {
  const heading = {
    header: "kaisa hakola",
    subtitle: "Software Developer",
  };

  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Header heading={heading} />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
