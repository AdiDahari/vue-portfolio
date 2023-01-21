<template>
  <section class="bg-light-tale-100 dark:bg-dark-navy-500 py-6">
    <div
      class="mx-auto max-w-7xl"
      v-motion="{
        initial: {
          y: 100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
        },
      }"
    >
      <div
        class="py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
      >
        <h2
          class="text-3xl font-bold tracking-tight text-light-tale-500 dark:text-dark-navy-100 sm:text-4xl"
        >
          <span class="block">Ready to dive in?</span>
          <span class="block text-black dark:text-white"
            >Check out my Github Repositories.</span
          >
        </h2>
        <div
          class="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center items-center"
        >
          <div class="inline-flex rounded-md shadow">
            <a
              href="https://github.com/AdiDahari"
              class="inline-flex items-center justify-center rounded-md border border-transparent bg-light-primary dark:bg-dark-primary px-5 py-3 text-base font-medium text-black dark:text-white hover:bg-light-secondary dark:hover:bg-dark-secondary"
              >Go To Github</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
