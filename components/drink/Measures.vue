<script setup lang="ts">
defineProps({
  measures: {
    type: Array as PropType<IMeasure[]>,
    required: true,
  }
})
</script>

<template>
  <div class="drink-measures">
    <div v-for="(item, index) in measures" :key="index" class="drink-measures__list">
      <div class="drink-measures__ingredients">
        {{ item.ingredients }}
      </div>
      <div class="drink-measures__measure">
        {{ item.measure }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.drink-measures {
  &__list{
    display: grid;
    grid-template-columns: repeat(2, 1fr) ;
  }
}
</style>
