<template>
  <div class="mt-10">
    <div
      class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 justify-between relative"
    >
      <div class=" col-span-2">
        <input
          type="search"
          class="w-full lg:w-4/6 h-14 rounded bg-white shadow dark:bg-darkMode-element border-0 focus:border-transparent focus:ring-0 px-14"
        />
        <font-awesome-icon
          class="absolute top-5 left-8"
          :icon="['fas', 'search']"
        />
      </div>
      <div class="lg:justify-self-end">
        <select
          class=" h-14 rounded bg-white shadow dark:bg-darkMode-element border-0 focus:border-transparent focus:ring-0"
        >
          <option value="" disabled selected hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">AEurope</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
