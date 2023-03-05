<template>
  <form @submit.prevent="submitForm">
    <base-input
      label="First name"
      type="text"
      id="firstname"
      :valid="firstName.isValid"
      v-model.trim="firstName.val"
    ></base-input>

    <base-input
      label="Last name"
      type="text"
      id="lastname"
      :valid="lastName.isValid"
      v-model.trim="lastName.val"
    ></base-input>

    <base-text
      label="Description"
      type="text"
      id="description"
      :valid="description.isValid"
      rows="5"
      v-model.trim="description.val"
    />

    <base-input
      label="Hourly Rate"
      type="number"
      id="rate"
      :valid="rate.isValid"
      v-model.trim="rate.val"
    ></base-input>

    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
        />
        <label for="frontend"> Frontend Developement</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
        />
        <label for="backend"> Backend Developement</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" />
        <label for="career"> Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">At least one expertise must be selected</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["save-data"]);

const firstName = ref({ val: "", isValid: true });
const lastName = ref({ val: "", isValid: true });
const description = ref({ val: "", isValid: true });
const rate = ref({ val: null, isValid: true });
const areas = ref({ val: [], isValid: true });
const formIsValid = ref(true);

const validateForm = () => {
  formIsValid.value = true;
  if (firstName.value.val === "") {
    firstName.value.isValid = false;
    formIsValid.value = false;
  }
  if (lastName.value.val === "") {
    lastName.value.isValid = false;
    formIsValid.value = false;
  }
  if (description.value.val === "") {
    description.value.isValid = false;
    formIsValid.value = false;
  }
  if (!rate.value.val || rate.value.val < 0) {
    rate.value.isValid = false;
    formIsValid.value = false;
  }
  if (areas.value.val.length === 0) {
    areas.value.isValid = false;
    formIsValid.value = false;
  }
};

const clearValidity = (input) => {
  debugger;
  [input].val = true;
};

const submitForm = () => {
  validateForm();

  if (!formIsValid.value) {
    return;
  }

  const formData = {
    first: firstName.value.val,
    last: lastName.value.val,
    desc: description.value.val,
    rate: rate.value.val,
    areas: areas.value.val,
  };
  emit("save-data", formData);
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
