import Project from "../Project/Project";
import './ProjectList.scss'
import { WildHerb } from "../../../common/const/Projects";
import { Hockey } from "../../../common/const/Projects";
import { AndroidAndIos } from "../../../common/const/Projects";
import { AltZone } from "../../../common/const/Projects";
import LayoutWithSideMenu from "../../shared/LayoutWithSideMenu/LayoutWithSideMenu";

const ProjectList = () => {
  const defaultItem = <Project projectInfo={WildHerb} />

  return (
    <div className="wrapper-project-list">
      <LayoutWithSideMenu defaultItem={defaultItem} defaultTitle={WildHerb.title}>
          <Project projectInfo={WildHerb} />
          <Project projectInfo={AltZone} />
          <Project projectInfo={Hockey} />
          <Project projectInfo={AndroidAndIos} />
      </LayoutWithSideMenu>
    </div>
  );
};

export default ProjectList;
