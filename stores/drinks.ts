import { defineStore } from 'pinia'

const parseDrink = (drink: IDrinkRaw): IDrink => {
  const parsed: IDrink = {
    id: drink.idDrink as string,
    thumb: drink.strDrinkThumb as string,
    measures: [],
    instructions: {}
  }

  Object.keys(drink).forEach((key: string) => {
    const newMeasure: IMeasure = {
      measure: null,
      ingredients: null,
    }

    if (key.includes('strIngredient')) {
      const index: string = key.split('strIngredient')[1];
      const measureKey: string = `strMeasure${index}`;

      if (drink[key] || drink[measureKey]) {
        newMeasure.measure = drink[measureKey];
        newMeasure.ingredients = drink[key];
        parsed.measures.push(newMeasure);
      }
    } else if (key.includes('strInstructions')) {
      if (drink[key]) {
        const locale: string = key.split('strInstructions')[1] || 'EN';
        parsed.instructions[locale] = drink[key];
      }
    } else if (!key.includes('strMeasure')) {
      parsed[key] = drink[key];
    }
  })

  return parsed;
}

export const useDrinksStore = defineStore('drinks', {
  state: (): IDrinksState => (
    {
      drinks: {},
      selectedDrink: '',
      isDrinksFetching: false,
      isDrinksFetchingError: false,
    }
  ),

  getters: {
    list: (state) => state.drinks[state.selectedDrink],
    isFetching: (state) => state.isDrinksFetching,
    isError: (state) => state.isDrinksFetchingError,
  },

  actions: {
    async fetch(drinkName: string) {
      if (!this.drinks[drinkName]) {
        this.isDrinksFetching = true;

        const { data, status, error } = await useAsyncData(
          `drinks:${drinkName}`,
          () => $fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
        )
        console.log('STATUS:', status.value);
        if (status.value === 'success') {

          const drinks = (data.value as IDataResponse).drinks;

          drinks.forEach((drink: IDrinkRaw) => {
            const parsedDrink: IDrink = parseDrink(drink);

            if (!this.drinks[drinkName]) {
              this.drinks[drinkName] = {}
            }
            this.drinks[drinkName][drink.idDrink] = parsedDrink
          });
        } else {
          console.error(drinkName, 'fetch error:', error.value); // TODO
          this.isDrinksFetchingError = true;
        }
        this.isDrinksFetching = false;
      }

      this.selectedDrink = drinkName;
    },
  },
})