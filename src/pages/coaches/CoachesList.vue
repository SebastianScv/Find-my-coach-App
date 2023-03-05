<template>
  <section><CoachFilter @change-filter="setFilters" /></section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        />
      </ul>
      <h3 v-else>No Coaches found</h3>
    </base-card>
  </section>
</template>

<script setup>
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";

import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const activeFilters = ref({
  frontend: true,
  backend: true,
  career: true,
});

const filteredCoaches = computed(() => {
  const coaches = store.getters["CoachesModule/coaches"];
  return coaches.filter((coach) => {
    if (activeFilters.value.frontend && coach.areas.includes("frontend")) {
      return true;
    }

    if (activeFilters.value.backend && coach.areas.includes("backend")) {
      return true;
    }

    if (activeFilters.value.career && coach.areas.includes("career")) {
      return true;
    }

    return false;
  });
});
const hasCoaches = computed(() => {
  return store.getters["CoachesModule/hasCoaches"];
});

const isCoach = computed(() => {
  return store.getters["CoachesModule/isCoach"];
});

const setFilters = (updatedFilters) => {
  activeFilters.value = updatedFilters;
};
</script>

<style scoped>
ul {
  @apply m-0 p-0 list-none;
}

.controls {
  @apply flex justify-between;
}
</style>
