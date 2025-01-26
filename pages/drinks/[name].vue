<script setup lang="ts">
const { name } = useRoute().params

const drinkName: string = name as string;

const drinks = useDrinksStore()
drinks.fetch(drinkName)

const layout = 'drink';
const selectedLocale = ref('EN')

const locales = (drink: IDrink) => Object.keys(drink.instructions) || [];
</script>

<template>
  <div class="drinks-page">
    <div class="drinks-page__menu">
      <left-menu :selected="drinkName"/>
    </div>
    <div class="drinks-page__list">
      <template v-if="drinks.isFetching">
        <app-spinner />
      </template>
      <template v-else>
        <template v-if="drinks.isError">
          Что-то пошло не так
        </template>
          <template v-else>
            <NuxtLayout v-for="drink in drinks.list" :key="drink.id" :name="layout">
              <template #name>{{ drink.strDrink}}</template>

              <template #category>{{ drink.strCategory }}</template>

              <template #alcoholic>{{ drink.strAlcoholic }}</template>
              <template #glass>{{ drink.strGlass }}</template>
              <template #instructions>
                <div class="drinks-page__instructions">
                  <div class="drinks-page__instructions-title">
                    Instruction:
                    <app-locale-buttons v-model="selectedLocale" :locales="locales(drink)"/>
                  </div>
                  <div class="drinks-page__instructions-title">
                    {{ drink.instructions[selectedLocale] }}  
                  </div>
                </div>
              </template>
              <template #thumb><app-image :src="drink.thumb" /></template>
            </NuxtLayout>
          </template>
      </template>
    </div>
  </div>


</template>

<style lang="scss">
.drinks-page {
  display: flex;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-direction: column;
    gap: 20px;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 20px;
    padding: 20px;
    width: 100%;
  }
}
</style>
