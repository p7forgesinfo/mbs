<script setup lang="ts">
defineProps({
  locales: {
    type: Array as PropType<string[]>,
    required: true,
  }
})
const selectedLocale = defineModel<string>();

const onLocaleClick = (locale: string) => selectedLocale.value = locale;
</script>

<template>
  <div class="locale-buttons">
    <div
      v-for="locale in locales"
      :key="locale"
      class="locale-buttons__button"
      :class="{ 'locale-buttons__button_active': locale === selectedLocale }"
      @click="onLocaleClick(locale)"
    >
      {{ locale }}
    </div>
  </div>
</template>

<style lang="scss">
.locale-buttons {
  display: flex;
  color: rgb(214, 214, 214);

  &__button {
    display: flex;
    justify-content: center;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 4px;
    padding: 2px;
    min-width: 30px;
    margin-right: 4px;
    user-select: none;
    cursor: pointer;

    &:hover {
      color: rgb(180, 240, 188);
      border-color: rgb(180, 240, 188);
    }

    &:last-child {
      margin-right: 0px;
    }

    &_active {
      color: rgb(180, 240, 188);
      border-color: rgb(180, 240, 188);
    }
  }
}
</style>
