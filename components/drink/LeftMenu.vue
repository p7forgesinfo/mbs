<script setup lang="ts">
const props = defineProps({
  selected: {
    type: String as PropType<string>,
    default: ''
  }
})
const router = useRouter();

const items = ['margarita', 'mojito', 'a1', 'kir']

const searchString = ref(items.includes(props.selected) ? '' : props.selected);

const isItemActive = (item: string) => props.selected === item && searchString.value === '';

const onInputKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && searchString.value) {
    router.push(`/drinks/${searchString.value}`)
  }
}
</script>

<template>
  <div class="left-menu">
    <div
      v-for="item in items"
      :key="item"
      class="left-menu__item"
      :class="{ 'left-menu__item_active':  isItemActive(item) }"
    >
      <NuxtLink class="left-menu__item-link" :to="`/drinks/${item}`">{{ item }}</NuxtLink>
    </div>
    <input
      v-model="searchString"
      type="text"
      class="left-menu__item left-menu__input"
      :class="{ 'left-menu__item_active':  searchString !== '' }"
      @keypress="onInputKeyPress"
    >
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

  &__input {
    border: none;
    padding: 6px 14px;
    outline: none;
    width: 200px;
  }
}
</style>
