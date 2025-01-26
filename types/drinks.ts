export interface IDataResponse {
  drinks: IDrinkRaw[]
}

export interface IDrinkRaw {
  idDrink: string;
  [key: string]: string | null;
}

export interface IMeasure {
  measure: string | null,
  ingredients: string | null,
}

export interface ILocales {
  [key: string]: string
}

export interface IDrink {
  [key: string]: string | null | ILocales | IMeasure[];
  id: string,
  thumb: string;
  measures: IMeasure[],
  instructions: ILocales,
}

export interface IDrinks {
  [key: string]: {
    [key: string]: IDrink
  }
}

export interface IDrinksState {
  drinks: IDrinks;
  selectedDrink: string,
  isDrinksFetching: boolean;
  isDrinksFetchingError: boolean;
}
