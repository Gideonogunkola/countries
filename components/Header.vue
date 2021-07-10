<template>
  <div class=" bg-lightMode-bg dark:bg-darkMode-element shadow-md">
    <div class=" w-11/12 lg:max-w-screen-xl m-auto py-4 flex justify-between">
      <div><p class="text-3xl font-bold">Where in the world?</p></div>
      <div class="flex items-center cursor-pointer" @click="changeMode">
        <font-awesome-icon :icon="['fas', 'moon']" />
        <p class="pl-4">Dark Mode</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    }
  }
};
</script>

<style></style>
