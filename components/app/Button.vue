<script setup lang="ts">

</script>

<template>
  <button class="app-button">
    <slot />
  </button>
</template>

<style lang="scss">
.app-button {
  border: none;
  padding: 6px 10px;
  background-color: rgb(180, 240, 188);
  border-radius: 6px;
}
</style>
