<script setup lang="ts">
import type { PropType } from 'vue';
import type { IInstructions } from '~/types/drinks';

const props = defineProps({
  instructions: {
    type: Object as PropType<IInstructions>,
    required: true,
  }
})
const selectedLocale = ref('EN')
const locales = Object.keys(props.instructions) || [];
</script>

<template>
  <div class="drink-instructions">
    <app-locale-buttons
      v-model="selectedLocale"  
      class="drink-instructions__buttons"
      :locales="locales"
  />
  <div class="drink-instructions__text">
    {{ instructions[selectedLocale] }}  
  </div>
    
  </div>
</template>

<style lang="scss">
.drink-instructions {
  &__buttons {
    margin-bottom: 8px;
  }
}
</style>
