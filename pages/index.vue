<template>
  <div class="w-11/12 lg:max-w-screen-xl m-auto">
    <div>
      <Form />
    </div>
    <h1 v-if="getFetchLoading" class="mt-20 text-xl lg:text-3xl text-center">
      Loading.....
    </h1>
    <div v-else class="flex justify-center lg:justify-between flex-wrap">
      <div v-for="country in allCountries" :key="country.id" class="mt-14">
        <div>
          <nuxt-link :to="country.name">
            <div
              class="w-72 h-96 bg-lightMode-bg dark:bg-darkMode-element shadow-md rounded"
            >
              <img
                class=" rounded-t h-44 object-cover w-full"
                :src="country.flag"
                alt="country-flag"
              />
              <div class="pt-6 pl-6">
                <h3 class=" text-xl font-medium">{{ country.name }}</h3>
                <p class="pt-4">Population: {{ country.population }}</p>
                <p class="pt-1">Region: {{ country.region }}</p>
                <p class="pt-1">Capital: {{ country.capital }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("fetchCountries");
  },
  computed: mapGetters(["allCountries", "getFetchLoading"])
};
</script>

<style></style>
