export type Joke = {
  joke: string, 
  id: number,
  categories: string[],
}

export type jokesReducer = {
  jokeList: Joke[],
  isLoading: boolean,
  isLoadingFavorite: boolean,
  error: string,
  favorites: Joke[],
}
