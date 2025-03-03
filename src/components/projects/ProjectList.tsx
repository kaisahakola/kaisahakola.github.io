import Project from "./Project";
import './ProjectList.scss'
import { WildHerb } from "../../shared/const/Projects";
import { Hockey } from "../../shared/const/Projects";
import { AndroidAndIos } from "../../shared/const/Projects";
import { AltZone } from "../../shared/const/Projects";
import LayoutWithSideMenu from "../LayoutWithSideMenu/LayoutWithSideMenu";

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
