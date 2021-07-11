<template>
  <div class=" bg-lightMode-bg dark:bg-darkMode-element shadow-md">
    <div class=" w-11/12 lg:max-w-screen-xl m-auto py-4 flex justify-between">
      <div>
        <nuxt-link to="/">
          <p class="text-xl lg:text-3xl font-bold cursor-pointer">
            Where in the world?
          </p>
        </nuxt-link>
      </div>
      <div class="flex items-center cursor-pointer" @click="changeMode">
        <font-awesome-icon :icon="['fas', 'moon']" />
        <p class="pl-2">Dark Mode</p>
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
