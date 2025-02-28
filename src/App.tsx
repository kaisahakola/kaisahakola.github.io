import "./App.scss";
import MainPage from "./pages/mainPage/MainPage.tsx";
import ProjectList from "./components/projects/ProjectList";
import AboutMePage from "./pages/aboutMe/AboutMePage";
import Navigation from "./components/Navbar/Navigation";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/contactPage/ContactPage.tsx";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contacts" element={<ContactsPage title='Contacts' />} />
      </Routes>
    </div>
  );
}

export default App;
