<template>
  <app-box class="layout-drink">
    <div class="layout-drink__row">
      <div class="layout-drink__name">
        <slot name="name" />
      </div>
    </div>
    <div class="layout-drink__row">
      <div class="layout-drink__info">
        <div class="layout-drink__info-slot">
          <div class="layout-drink__info-slot-title">
            Category:
          </div>
          <div class="drinks-page__info-slot-value">
            <slot name="category" />
          </div>
        </div>
        <div class="layout-drink__info-slot">
          <div class="layout-drink__info-slot-title">
            Alternate:
          </div>
          <div class="drinks-page__info-slot-value">
            <slot name="alternate" />
          </div>
        </div>
        <div class="layout-drink__info-slot">
          <div class="layout-drink__info-slot-title">
            Alcoholic:
          </div>
          <div class="layout-drink__info-slot-value">
            <slot name="alcoholic" />
          </div>
        </div>
        <div class="layout-drink__info-slot">
          <div class="layout-drink__info-slot-title">
            Glass:
          </div>
          <div class="layout-drink__info-slot-value">
            <slot name="glass" />
          </div>
        </div>
        <div class="layout-drink__info-slot">
          <div class="layout-drink__info-slot-title">
            IBA:
          </div>
          <div class="layout-drink__info-slot-value">
            <slot name="iba" />
          </div>
        </div>
        <div class="layout-drink__info-slot">
          <div class="layout-drink__info-slot-title">
            <app-text-with-tooltip>
              <template #text>CCC:</template>
              <template #tooltip>Creative commons confirmed</template>
            </app-text-with-tooltip>
          </div>
          <div class="layout-drink__info-slot-value">
            <slot name="ccConfirmed" />
          </div>
        </div>
        <div class="layout-drink__info-slot">
          <div class="layout-drink__info-slot-title">
            Tags:
          </div>
          <div class="layout-drink__info-slot-value">
            <slot name="tags" />
          </div>
        </div>
      </div>
      <div class="layout-drink__thumb">
        <slot name="thumb" />
      </div>
    </div>
    <div class="layout-drink__row">
      <div class="layout-drink__recipe">
        <div class="layout-drink__recipe-slot">
          <div class="layout-drink__recipe-slot-title">
            Instructions:
          </div>
          <div class="layout-drink__recipe-slot-value">
            <slot name="instructions" />
          </div>
        </div>
        <div class="layout-drink__recipe-slot">
          <div class="layout-drink__recipe-slot-title">
            Ingredients:
          </div>
          <div class="layout-drink__recipe-slot-value">
            <slot name="measures" />
          </div>
        </div>
      </div>
    </div>
  </app-box>
</template>

<style lang="scss">
.layout-drink {
  &__row {
    display: flex;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0px;
    }

    @include device(sm) {
      flex-direction: column;
    }
    @include device(xs) {
      flex-direction: column;
    }
  }

  &__name {
    font-size: 36px;
    border-bottom: 1px solid rgb(214, 214, 214);
    width: 100%;
  }

  &__info {
    flex-grow: 1;
    margin-right: 20px;
    
    &-slot {
      display: grid;
      grid-template-columns: 100px auto;
      margin-bottom: 6px;

      &-title {
        color: rgb(138, 138, 138)
      }
    }
  }

  &__thumb {
    display: flex;
    justify-content: flex-end;
    min-height: 350px;
    min-width: 350px;
    overflow: hidden;
    border-radius: 20px;

    @include device(sm) {
      justify-content: center;
      height: auto;
      width: 100%;
    }

    @include device(xs) {
      justify-content: center;
      height: auto;
      width: 100%;
      min-height: 0px;
      min-width: 0px;
    }
  }

  &__recipe {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;

    &-slot-title {
      font-weight: 700;
      border-bottom: 1px solid rgb(214, 214, 214);
      margin-bottom: 8px;
    }

    @include device(md) {
      display: flex;
      flex-direction: column;
    }

    @include device(xs) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
