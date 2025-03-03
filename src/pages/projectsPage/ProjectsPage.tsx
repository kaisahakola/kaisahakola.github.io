import SecondaryHeader from "../../components/secondaryHeader/SecondaryHeader";
import ProjectList from "../../components/projects/ProjectList";

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
