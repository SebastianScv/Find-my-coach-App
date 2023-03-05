<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }} / hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now</h2>
        <base-button link :to="coachContactLink"> Contact </base-button>
      </header>
      <RouterView />
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      />

      <p>
        {{ description }}
      </p>
    </base-card>
  </section>
</template>

<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const props = defineProps(["id"]);

const selectedCoach = ref({});
onBeforeMount(() => {
  selectedCoach.value = store.getters["CoachesModule/coaches"].find(
    (coach) => coach.id === props.id
  );
});

const fullName = computed(() => {
  return selectedCoach.value.firstName + " " + selectedCoach.value.lastName;
});

const coachContactLink = computed(() => {
  return `${route.path}/contact`;
});

const areas = computed(() => {
  return selectedCoach.value.areas;
});

const rate = computed(() => {
  return selectedCoach.value.rate;
});

const description = computed(() => {
  return selectedCoach.value.description;
});
</script>
