<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <CoachFrom @save-data="saveData" />
    </base-card>
  </section>
</template>

<script setup>
import CoachFrom from "@/components/coaches/CoachFrom.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const saveData = (formData) => {
  store.dispatch("CoachesModule/registerCoach", formData);
  router.replace("/coaches");
};


</script>
