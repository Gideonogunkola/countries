<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.dark-mode {
  @apply bg-darkMode-bg text-white;
}

.light-mode {
  @apply bg-lightMode-bg text-lightMode-default;
}
</style>
