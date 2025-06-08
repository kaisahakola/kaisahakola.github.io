import Project from "../Project/Project";
import './ProjectList.scss'
import {
  WildHerb,
  Hockey,
  AndroidAndIos,
  AltZone,
  SpeedTestGame
} from "../../../common/const/Projects";
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
          <Project projectInfo={SpeedTestGame} />
      </LayoutWithSideMenu>
    </div>
  );
};

export default ProjectList;
