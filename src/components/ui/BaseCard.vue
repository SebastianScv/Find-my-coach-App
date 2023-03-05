<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  @apply rounded p-[1rem] my-[2rem] mx-auto max-w-[40rem];
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
