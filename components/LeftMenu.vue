<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  selected: {
    type: String as PropType<string>,
    default: ''
  }
})

const items = ['margarita', 'mojito', 'a1', 'kir']
</script>

<template>
  <div class="left-menu">
    <div
      v-for="item in items"
      :key="item"
      class="left-menu__item"
      :class="{ 'left-menu__item_active':  selected === item }"
    >
      <NuxtLink class="left-menu__item-link" :to="`/drinks/${item}`">{{ item }}</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.left-menu {
  padding-top: 20px;

  &__item {
    font-size: 24px;
    cursor: pointer;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: rgb(245, 245, 245);
    margin-bottom: 10px;

    &-link {
      display: inline-block;
      width: 100%;
      text-decoration: none;
      padding: 6px 14px;
      text-transform: capitalize;
      color: inherit;

      &:visited {
        color: inherit
      }
    }

    &_active {
      background-color: rgb(180, 240, 188);
    }
  }
}
</style>
