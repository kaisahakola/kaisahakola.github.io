import "./App.scss";
import MainPage from "./pages/mainPage/MainPage.tsx";
import ProjectList from "./components/projects/ProjectList";
import Contacts from "./components/Contacts/Contacts";
import AboutMe from "./components/aboutMe/AboutMe";
import Navigation from "./components/Navbar/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
