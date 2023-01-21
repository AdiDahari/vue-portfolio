import axios from "axios";
import { ref } from "vue";

export default function usePortfolio() {
  const skills = ref([]);
  const projects = ref([]);
  const filteredProjects = ref([]);

  const selectedSkill = ref("all");

  const getSkills = async () => {
    const response = await axios.get("skills");
    skills.value = response.data.data;
  };

  const getProjects = async () => {
    const response = await axios.get("projects");
    projects.value = response.data.data;
    filteredProjects.value = response.data.data;
  };

  const filterProjects = (skillId) => {
    if (skillId === "all") {
      filteredProjects.value = projects.value;
    } else {
      filteredProjects.value = projects.value.filter(
        (project) => project.skill.id === skillId
      );
    }
    selectedSkill.value = skillId;
  };

  return {
    skills,
    getSkills,
    projects,
    getProjects,
    selectedSkill,
    filteredProjects,
    filterProjects,
  };
}
