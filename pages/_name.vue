<template>
  <div class="w-11/12 lg:max-w-screen-xl m-auto">
    <div class="mt-10 lg:mt-16">
      <button
        class="py-2 px-8 bg-lightMode-bg dark:bg-darkMode-element shadow-lg rounded"
      >
        <NuxtLink to="/">
          <font-awesome-icon class="" :icon="['fas', 'long-arrow-alt-left']" />
          Back</NuxtLink
        >
      </button>
    </div>

    <div
      class=" mt-10 lg:mt-16 grid gap-y-10 lg:gap-x-40 grid-cols-1 lg:grid-cols-2"
    >
      <div>
        <img
          class="w-full h-full object-cover"
          :src="country[0].flag"
          alt="new image"
        />
      </div>
      <div class="self-center">
        <h2 class="text-2xl lg:text-3xl font-bold">{{ country[0].name }}</h2>
        <div class="mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div>
              <p>
                <span class="font-medium pr-1">Native Name: </span>
                {{ country[0].nativeName }}
              </p>
            </div>

            <div>
              <p class=" pt-1">
                <span class="font-medium pr-1">Population: </span>
                {{ country[0].population }}
              </p>
            </div>

            <div>
              <p class=" pt-1">
                <span class="font-medium pr-1">Region: </span>
                {{ country[0].region }}
              </p>
            </div>

            <div>
              <p class=" pt-1">
                <span class="font-medium pr-1">Sub-Region: </span>
                {{ country[0].subregion }}
              </p>
            </div>

            <div>
              <p class=" pt-1">
                <span class="font-medium pr-1">Capital: </span>
                {{ country[0].capital }}
              </p>
            </div>
          </div>
          <div>
            <div>
              <p
                v-for="(domain, index) in country[0].topLevelDomain"
                :key="index"
              >
                <span class="font-medium pr-1">Top Level Domain: </span
                >{{ domain }}
              </p>
            </div>

            <div class="pt-1">
              <p>
                <span class="font-medium pr-1">Currencies:</span>
                {{ country[0].currencies[0].symbol }}
                {{ country[0].currencies[0].name }}
              </p>
            </div>

            <div class="flex items-center pt-1">
              <p class="pr-1">
                <span class="font-medium">Languages:</span>
              </p>
              <ul
                v-for="(lang, index) in country[0].languages"
                :key="index"
                class="flex"
              >
                <li class="pl-2">{{ lang.name }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-24 flex items-center">
          <p><span class="font-medium pr-3">Border Countries:</span></p>
          <div
            v-for="(border, index) in country[0].borders"
            :key="index"
            class="flex"
          >
            <div
              class=" mr-3 py-1 px-4 bg-lightMode-bg dark:bg-darkMode-element shadow-lg rounded"
            >
              {{ border }}
            </div>
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
