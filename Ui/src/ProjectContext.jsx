import { useState } from "react";
import { ProjectContext } from "./ProjectCrete";

import Project from './Data/Projects.json';
export const ProjectProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  // Filtered data based on activeCategory
  const filteredData =
    activeCategory === "All"
      ? Project
      : Project.filter((proj) => proj.ProjectType === activeCategory);
  return (
    <ProjectContext.Provider value={{ activeCategory, setActiveCategory, filteredData }}>
      {children}
    </ProjectContext.Provider>
  );
};
