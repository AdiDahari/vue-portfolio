<script setup>
import Project from "@/components/Project.vue";
import usePortfolio from "@/composables/portfolio";
import { onMounted } from "vue";

const {
  skills,
  projects,
  getSkills,
  getProjects,
  selectedSkill,
  filteredProjects,
  filterProjects,
} = usePortfolio();

onMounted(getSkills);
onMounted(getProjects);
</script>

<template>
  <div
    class="container mx-auto"
    v-motion="{
      initial: {
        y: 100,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
      },
    }"
  >
    <nav
      class="relative w-full overflow-x-auto mb-12 border-b-2 border-light-tale-100 dark:text-dark-navy-100"
    >
      <ul class="inline-flex">
        <li class="cursor-pointer capitalize m-4">
          <button
            @click="filterProjects('all')"
            :class="[
              selectedSkill == 'all'
                ? 'bg-accent'
                : 'bg-light-tale-500 dark:bg-dark-navy-100',
            ]"
            class="w-32 text-center px-5 py-2 hover:bg-accent text-white rounded-md transition"
          >
            All
          </button>
        </li>
        <li
          v-for="skill in skills"
          :key="skill.id"
          class="cursor-pointer capitalize m-4"
        >
          <button
            @click="filterProjects(skill.id)"
            :class="[
              selectedSkill == skill.id
                ? 'bg-accent'
                : 'bg-light-tale-500 dark:bg-dark-navy-100',
            ]"
            class="w-32 text-center px-5 py-2 hover:bg-accent text-white rounded-md transition"
          >
            {{ skill.name }}
          </button>
        </li>
      </ul>
    </nav>
    <section
      class="grid gap-y-12 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-4"
    >
      <Project
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        :selectedSkill="selectedSkill"
      />
    </section>
  </div>
</template>
