import { defineStore } from 'pinia';

const parseDrink = (drink: IDrinkRaw): IDrink => {
  const parsed: IDrink = {
    id: drink.idDrink,
    name: drink.strDrink || 'Untitled',
    category: drink.strCategory || 'Uncategorized',
    drinkAlternate: drink.strDrinkAlternate || 'There are no alternatives',
    alcoholic: drink.strAlcoholic || 'Unknown',
    glass: drink.strGlass || 'Other',
    IBA: drink.strIBA || 'Unknown',
    tags: drink.strTags || '',
    video: drink.strVideo || '',
    CreativeCommonsConfirmed: drink.strCreativeCommonsConfirmed || 'Unknown',
    thumb: drink.strDrinkThumb || '',
    measures: [],
    instructions: {}
  };

  Object.keys(drink).forEach((key: string) => {
    const newMeasure: IMeasure = {
      measure: '',
      ingredients: '',
    };

    if (key.includes('strIngredient')) {
      const index: string = key.split('strIngredient')[1];
      const measureKey: string = `strMeasure${index}`;

      if (drink[key] || drink[measureKey]) {
        newMeasure.measure = drink[measureKey] || 'to taste';
        newMeasure.ingredients = drink[key] || '';
        parsed.measures.push(newMeasure);
      }
    } else if (key.includes('strInstructions')) {
      if (drink[key]) {
        const locale: string = key.split('strInstructions')[1] || 'EN';
        parsed.instructions[locale] = drink[key];
      }
    }
  });

  return parsed;
};

export const useDrinksStore = defineStore('drinks', {
  state: (): IDrinksState => (
    {
      drinks: {},
      lastSearchStr: '',
      isDrinksFetching: false,
      isDrinksFetchingError: false,
    }
  ),

  getters: {
    list: (state) => state.drinks[state.lastSearchStr],
    isFetching: (state) => state.isDrinksFetching,
    isError: (state) => state.isDrinksFetchingError,
  },

  actions: {
    async fetch(searchStr: string) {
      this.lastSearchStr = searchStr;

      if (!this.drinks[searchStr]) {
        this.isDrinksFetching = true;
        $fetch(`/search.php?s=${searchStr}`, { baseURL: import.meta.env.VITE_DRINKS_URL, server: false })
          .then((res) => {
            const drinks = ((res as IDataResponse).drinks);
            if (drinks) {
              this.drinks[searchStr] = {};
              drinks.forEach((drink: IDrinkRaw) => this.drinks[searchStr][drink.idDrink] = parseDrink(drink));
            }
          })
          .catch(() => this.isDrinksFetchingError = true)
          .finally(() => this.isDrinksFetching = false);
      }
    }
  }
});