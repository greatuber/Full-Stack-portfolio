import { Wrapper } from "@/components/Main/Stack/Stack.style";
import ProjectsList from "@/components/Main/Projects/ProjectsList";
import SectionHeader from "@/components/SectionHeader";

export const ProjectsSection = () => {
  return (
    <Wrapper id="projetos">
      <SectionHeader changeH="h2" word="projetos" />
      <ProjectsList />
    </Wrapper>
  );
};

export default ProjectsSection;
