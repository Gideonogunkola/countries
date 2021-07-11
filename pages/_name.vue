<template>
  <div class="w-11/12 lg:max-w-screen-xl m-auto">
    <div class="mt-10 lg:mt-16">
      <button
        class="py-4 px-8 bg-lightMode-bg dark:bg-darkMode-element shadow-lg rounded"
      >
        <font-awesome-icon class="" :icon="['fas', 'long-arrow-alt-left']" />
        <NuxtLink class="pl-2" to="/">Back</NuxtLink>
      </button>
    </div>

    <div class=" mt-10 lg:mt-16 grid gap-40 grid-cols-1 lg:grid-cols-2">
      <div>
        <img
          class="w-full h-full object-cover"
          :src="country[0].flag"
          alt="new image"
        />
      </div>
      <div class="self-center">
        <h2 class="text-3xl font-bold">{{ country[0].name }}</h2>
        <div class="mt-6 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p>
              <span class="font-medium">Native Name: </span>
              {{ country[0].nativeName }}
            </p>
            <p class=" pt-1">
              <span class="font-medium">Population: </span>
              {{ country[0].population }}
            </p>
            <p class=" pt-1">
              <span class="font-medium">Region: </span> {{ country[0].region }}
            </p>
            <p class=" pt-1">
              <span class="font-medium">Sub-Region: </span>
              {{ country[0].subregion }}
            </p>
            <p class=" pt-1">
              <span class="font-medium">Capital: </span>
              {{ country[0].capital }}
            </p>
          </div>
          <div>
            <p
              v-for="(domain, index) in country[0].topLevelDomain"
              :key="index"
            >
              <span class="font-medium">Top Level Domain: </span>{{ domain }}
            </p>
            <p class=" pt-1"><span class="font-medium">Currencies:</span></p>
            <p class=" pt-1">
              <span class="font-medium">Languages:</span>
              {{ country[0].Languages }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    const country = await $axios.$get(
      `https://restcountries.eu/rest/v2/name/${params.name}?fullText=true`
    );
    console.log(country);
    return { country };
  }
};
</script>
