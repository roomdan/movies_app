import { combineReducers, createStore } from "redux";
import open_menu from "./reducers/open_menu";
import select_movie_option from "./reducers/select_movie_option";
import loader from "./reducers/loader";
import save_favorite from "./reducers/save_favorite";

const reducers: any = combineReducers({
  open_menu,
  select_movie_option,
  loader,
  save_favorite,
});

export const store = createStore(reducers);
