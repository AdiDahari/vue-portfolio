<script setup>
import usePortfolio from "@/composables/portfolio";
import { onMounted } from "vue";

const { skills, getSkills } = usePortfolio();

onMounted(() => {
  getSkills();
});
</script>
<template>
  <section class="bg-light-tale-100 dark:bg-dark-navy-500 py-24">
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
      <div class="grid grid-cols-8 md:grid-flow-col">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="flex items-center justify-center"
        >
          <img :src="skill.image" :alt="skill.name" class="lg:h-20" />
        </div>
      </div>
    </div>
  </section>
</template>
