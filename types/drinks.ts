export type IDataResponse = {
  drinks: IDrinkRaw[] | null,
};

export type IDrinkRaw = {
  idDrink: string,
  [key: string]: string | null,
};

export type IMeasure = {
  measure: string,
  ingredients: string,
};

export type IInstructions = {
  [key: string]: string,
};

export type IDrink = {
  id: string,
  name: string,
  category: string,
  drinkAlternate: string,
  alcoholic: string,
  glass: string,
  IBA: string,
  tags: string,
  thumb: string,
  video: string,
  CreativeCommonsConfirmed: string,
  measures: IMeasure[],
  instructions: IInstructions,
};

export type IDrinks = {
  [key: string]: {
    [key: string]: IDrink,
  },
};

export type IDrinksState = {
  drinks: IDrinks,
  lastSearchStr: string,
  isDrinksFetching: boolean,
  isDrinksFetchingError: boolean,
};
