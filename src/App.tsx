import "./App.scss";
import MainPage from "./pages/mainPage/MainPage.tsx";
import ProjectsPage from "./pages/projectsPage/ProjectsPage.tsx";
import AboutMePage from "./pages/aboutMe/AboutMePage";
import Navigation from "./components/Navbar/Navigation";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/contactPage/ContactPage.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage title="Projects" />} />
        <Route path="/contacts" element={<ContactsPage title='Contacts' />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
