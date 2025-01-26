<script setup lang="ts">

</script>

<template>
  <div class = "spinner" />
</template>

<style lang="scss" scoped>
.spinner {
  width: 10em;
  height: 10em;
  border-top: 1em solid rgb(138, 138, 138);
  border-right: 1em solid transparent;
  border-radius: 50%;
  margin: auto;
  animation: spinner 2s linear infinite;
}
@keyframes spinner {
  100% { transform: rotate(360deg) }
}
</style>
