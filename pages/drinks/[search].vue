<script setup lang="ts">
const { search } = useRoute().params

const searchStr: string = Array.isArray(search) ? search[0] : search; // no repeatable parameters ;)

const drinks = useDrinksStore()
drinks.fetch(searchStr)

const layoutDrinks = 'desktop-drinks';
const layoutDrink = 'desktop-drink';

const tags = (tags: string) => tags.length ? tags.split(',').map((tag: string) => `#${tag}`) : [];

const onRefreshClick = () => drinks.fetch(searchStr);
</script>

<template>
  <div class="drinks-page">
    <NuxtLayout :name="layoutDrinks">
      <template #menu>
        <drink-left-menu :selected="searchStr" />
      </template>
      <div class="drinks-page__list">
        <app-spinner v-if="drinks.isFetching" />
        <template v-else-if="drinks.isError">
          Something wrong
          <app-button @click="onRefreshClick">Update</app-button>
        </template>
        <template v-else-if="drinks.list">
          <NuxtLayout v-for="drink in drinks.list" :key="drink.id" :name="layoutDrink">
            <template #name>{{ drink.name}}</template>
            <template #category>{{ drink.category }}</template>
            <template #alternate>{{ drink.drinkAlternate }}</template>
            <template #alcoholic>{{ drink.alcoholic }}</template>
            <template #glass>{{ drink.glass }}</template>
            <template #iba>{{ drink.IBA }}</template>
            <template #ccConfirmed>{{ drink.CreativeCommonsConfirmed }}</template>
            <template #tags>
              <span
                v-for="(tag, index) in tags(drink.tags)"
                :key="`tag${index}`"
                class="drinks-page__tag"
              >
                  {{ tag }}
              </span>
            </template>
            <template #thumb><app-image :thumb="drink.thumb" /></template>
            <template #instructions><drink-instructions :instructions="drink.instructions"/></template>
            <template #measures><drink-measures :measures="drink.measures" /></template>
          </NuxtLayout>
        </template>
        <drink-not-found v-else />
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.drinks-page {
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  &__tag {
    color: rgb(94, 94, 255);
    cursor: pointer;
    border-bottom: 1px dotted rgb(94, 94, 255);
    margin-right: 6px;
    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
