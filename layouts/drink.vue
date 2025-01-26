<script setup lang="ts">

</script>

<template>
  <div class="layout-drink">
    <div class="layout-drink__row">
      <div class="layout-drink__name">
        <slot name="name" />
      </div>
    </div>
    <div class="layout-drink__row">
      <div class="layout-drink__info">
        <div class="layout-drink__category">
          <div class="layout-drink__slot-title">
            Category:
          </div>
          <div class="drinks-page__value">
            <slot name="category" />
          </div>
        </div>
        <div class="layout-drink__alcoholic">
          <div class="layout-drink__slot-title">
            Alcoholic:
          </div>
          <div class="layout-drink__alcoholic-value">
            <slot name="alcoholic" />
          </div>
        </div>
        <div class="layout-drink__glass">
          <div class="layout-drink__slot-title">
            Glass:
          </div>
          <div class="layout-drink__glass-value">
            <slot name="glass" />
          </div>
        </div>
        <div class="layout-drink__instructions">
          <slot name="instructions" />
        </div>
      </div>
      <div class="layout-drink__thumb">
        <slot name="thumb" />
      </div>
    </div>
    <div class="layout-drink__row">

    </div>
  </div>
</template>

<style lang="scss">
.layout-drink {
  width: 100%;

  &__row {
    display: flex;
  }

  &__name {
    font-size: 36px;
    border-bottom: 1px solid rgb(214, 214, 214);
    margin-bottom: 20px;
    width: 100%;
  }

  &__info {
    font-size: 18px;
    flex-grow: 1;
    margin-right: 20px;
  }

  &__category,
  &__alcoholic,
  &__glass {
    display: grid;
    grid-template-columns: 100px auto;
    margin-bottom: 6px;
  }

  &__slot {
    &-title {
      color: rgb(138, 138, 138)
    }
  }

  &__thumb {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 350px;
    min-width: 350px;
    overflow: hidden;
    border-radius: 20px;
  }
}
</style>
