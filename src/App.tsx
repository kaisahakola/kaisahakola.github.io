import "./App.css";
import Header from "./components/Header/Header";
import ProjectList from "./components/Projects/ProjectList";
import Contacts from "./components/Contacts/Contacts";
import AboutMe from "./components/AboutMe/AboutMe";
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
