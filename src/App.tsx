import "./App.scss";
import MainPage from "./components/mainPage/Page/MainPage.tsx.tsx";
import ProjectsPage from "./components/projects/Page/ProjectsPage.tsx";
import AboutMePage from "./components/aboutMe/Page/AboutMePage.tsx";
import Navigation from "./components/shared/Navbar/Navigation.tsx";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./components/contacts/Page/ContactPage.tsx";
import Footer from "./components/shared/Footer/Footer.tsx";

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
