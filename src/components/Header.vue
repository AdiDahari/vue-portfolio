<script setup>
import { ref, onMounted } from "vue";

const MobileNavOpen = ref(false);
const scrollBg = ref(false);

const navigation = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

const setScrollBg = (value) => {
  scrollBg.value = value;
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    return window.scrollY > 50 ? setScrollBg(true) : setScrollBg(false);
  });
});
</script>

<template>
  <header>
    <nav
      class="w-full fixed z-20 border-gray-200 px-2 sm:px-4 py-2.5 rounded"
      :class="[
        scrollBg
          ? 'bg-light-primary dark:bg-dark-primary'
          : 'bg-white dark:bg-gray-900',
      ]"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="https://github.com/AdiDahari" class="flex items-center">
          <img
            src="@/assets/img/my_logo.png"
            class="h-6 mr-3 sm:h-9"
            alt="Github Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Adi Dahari</span
          >
        </a>
        <button
          @click="MobileNavOpen = !MobileNavOpen"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class="w-full md:block md:w-auto"
          :class="MobileNavOpen || 'hidden'"
        >
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700"
          >
            <template v-for="nav in navigation" :key="nav.link">
              <li>
                <a
                  :href="nav.link"
                  class="block py-2 pl-3 pr-4 text-black dark:text-white hover:text-light-tale-100 dark:hover:text-dark-navy-500 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                  >{{ nav.name }}</a
                >
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
