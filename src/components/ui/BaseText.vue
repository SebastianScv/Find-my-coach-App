<template>
  <div class="form-control" :class="{ invalid: !isValid }">
    <label :for="id">{{ label }}</label>
    <textarea
      :type="type"
      :id="id"
      :value="modelValue"
      :rows="rows"
      @input="updateValue"
      @blur="blur"
    />
    <p v-if="!isValid">{{ label }} must not be empty</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps([
  "type",
  "id",
  "modelValue",
  "label",
  "valid",
  "rows",
]);

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};

watch(
  () => props.valid,
  (newValue) => {
    isValid.value = newValue;
  }
);

const isValid = ref(props.valid);

const blur = () => {
  isValid.value = true;
  console.log("blur");
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
