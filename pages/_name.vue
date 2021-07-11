<template>
  <div>
    <h1>Continent: {{ country }}</h1>
    <h2>Mountain: {{ country }}</h2>
    <p>Path: {{ $route.path }}</p>
    <NuxtLink to="/">Back to Mountains</NuxtLink>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    const country = await $axios.$get(
      `https://restcountries.eu/rest/v2/name/${params.name}?fullText=true`
    );
    return { country };
  }
};
</script>
