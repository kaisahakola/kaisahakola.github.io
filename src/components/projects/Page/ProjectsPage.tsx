import SecondaryHeader from "../../shared/SecondaryHeader/SecondaryHeader";
import ProjectList from "../ProjectList/ProjectList";
import "./ProjectsPage.scss";

interface ProjectsPageprops {
    title: string;
}

const ProjectsPage = ({ title }: ProjectsPageprops) => {
    return (
        <div className="wrapper-projects-page">
            <SecondaryHeader title={title} />
            <ProjectList />
        </div>
    )
}

export default ProjectsPage
