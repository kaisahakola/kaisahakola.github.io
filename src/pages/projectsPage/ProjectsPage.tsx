import SecondaryHeader from "../../components/secondaryHeader/SecondaryHeader";

interface ProjectsPageprops {
    title: string;
}

const ProjectsPage = ({ title }: ProjectsPageprops) => {
    return (
        <div>
            <SecondaryHeader title={title} />
        </div>
    )
}

export default ProjectsPage