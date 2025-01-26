<template>
  <div class="layout-drinks">
    <div class="drinks-page__menu">
      <slot name="menu" />
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
.layout-drinks {
  display: flex;

  @include device(tablet) {
    flex-direction: column;
  }
}
</style>
