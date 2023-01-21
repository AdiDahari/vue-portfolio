<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";
import Promote from "./components/Promote.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Services from "./components/Services.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <!-- Header -->
  <Header />
  <main class="min-h-screen">
    <!-- Sections -->
    <Hero />

    <Promote />

    <About />

    <Skills />

    <Portfolio />

    <Services />

    <Contact />
  </main>

  <!-- Footer -->
  <Footer />
</template>
