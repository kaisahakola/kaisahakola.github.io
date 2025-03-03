import { ProjectItem } from "../../shared/types/ProjectTypes";
import LinkWithIcon from "../link/LinkWithIcon";
import "./Project.scss";
import ImageContainer from "../ImageContainer/ImageContainer";

interface ProjectProps {
  projectInfo: ProjectItem;
}

const Project = (props: ProjectProps) => {
  const { projectInfo } = props;
  return (
    <div className="wrapper-project-item">
      <h2>{projectInfo.title}</h2>

      <div className="link-container">
        {projectInfo.links.map((link, index) => (
          <div key={index}>
            <LinkWithIcon 
              url={link.url} 
              iconType={link.url.includes("github") ? "github" : "web"} 
              text={link.text} />
          </div>
        ))}
      </div>
      
      <div className="technologies-container">
        <p>Technologies used in this project:</p>
        <div className="technologies-list">
          {projectInfo.technologies.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
      </div>

      <div className="my-role-container">
        {projectInfo.myRole && (
          <div>
            <p>My role:</p>
            <p className="role">{projectInfo.myRole}</p>
          </div>
        )}
      </div>

      <div className="description-container">
        <p>{projectInfo.description}</p>
      </div>
      
      <div className="image-container">
        {/* Separate mobile and desktop images */}
        <div className="mobile-images">
          {projectInfo.images?.filter(image => image.type === "mobile").map((image, index) => (
            <ImageContainer 
              key={index}
              url={image.url}
              width={image.width}
              height={image.height}
              altText={`${projectInfo.title} image`}
              imageType={image.type} 
            />
          ))}
        </div>

        <div className="desktop-images">
          {projectInfo.images?.filter(image => image.type === "desktop").map((image, index) => (
            <ImageContainer 
              key={index}
              url={image.url}
              width={image.width}
              height={image.height}
              altText={`${projectInfo.title} image`}
              imageType={image.type} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
