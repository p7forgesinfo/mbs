<script setup lang="ts">
import type { PropType } from 'vue';
import NoImageIcon from '~/assets/icons/no-image.svg';

const props = defineProps({
  thumb: {
    type: String as PropType<string>,
    required: true,
  }
})
const isError = ref(!props.thumb.length)
</script>

<template>
  <NuxtImg
    v-slot="{ src, isLoaded, imgAttrs }"
    class="app-image"
    :custom="true"
    :src="thumb"
    @error="isError = true"
  >
    <img 
      v-if="isLoaded" 
      v-bind="imgAttrs" 
      :src="src"
    >
    <no-image-icon v-else-if="isError" class="app-image__no-image"/>
    <app-spinner v-else/>
  </NuxtImg>
</template>

<style lang="scss">
.app-image {
  max-height: 350px;
  max-width: 350px;
  border-radius: 20px;

  &__no-image {
    height: 350px;
    width: 284px;
    border-radius: 20px;
  }
}
</style>
