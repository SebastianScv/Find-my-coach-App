<template>
  <div>
    <TheHeader />
    <RouterView />
  </div>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  height: 100%;
  @apply bg-secondary dark:bg-secondaryDark dark:text-white text-black;
}

input {
  color: black;
}

textarea {
  color: black;
}
</style>
