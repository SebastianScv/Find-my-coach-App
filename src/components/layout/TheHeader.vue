<template>
  <header>
    <nav>
      <h1><RouterLink to="/">Find a Coach</RouterLink></h1>
      <ul>
        <li><RouterLink to="/coaches">All Coaches</RouterLink></li>
        <li><RouterLink to="/requests">Requests</RouterLink></li>
        <ThemeSelector />
      </ul>
    </nav>
  </header>
</template>

<script setup>
import ThemeSelector from "../theme/ThemeSelector.vue";
</script>

<style scoped>
header {
  @apply w-full h-[5rem] bg-primary dark:bg-primaryDark flex justify-center items-center;
}

header a {
  @apply no-underline text-accent dark:text-accentDark inline-block py-[0.75rem] px-[1.5rem] border border-solid border-transparent rounded;
}

a:active,
a:hover,
a.router-link-active {
  @apply border border-solid border-accent dark:border-accentDark;
}

h1 {
  @apply m-0;
}

h1 a {
  @apply m-0 text-accent dark:text-accentDark;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  @apply border-transparent;
}

header nav {
  @apply w-[90%] m-auto flex justify-between items-center;
}

header ul {
  @apply justify-center items-center flex p-0 m-0 list-none;
}

li {
  @apply my-[0] mx-[0.5rem];
}
</style>
