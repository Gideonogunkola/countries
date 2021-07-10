<template>
  <div class="w-11/12 lg:max-w-screen-xl m-auto">
    <div>
      <Form />
    </div>
    <div class="countries">
      <div v-for="country in allCountries" :key="country.id" class="country">
        {{ country.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["allCountries"])
};
</script>

<style></style>
