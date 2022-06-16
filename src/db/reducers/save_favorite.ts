export interface save_favorite {
  type: "SAVE FAVORITE" | "REMOVE FAVORITE";
  payload: any;
}

const initial_state: any[] = [];

export default function save_favorite_reducer(
  store: any = initial_state,
  action: save_favorite
) {
  switch (action.type) {
    case "SAVE FAVORITE":
      return [...store, action.payload];
    case "REMOVE FAVORITE":
      const new_store = store.filter(
        (favorite: any) => favorite.title !== action.payload
      );
      return new_store;
    default:
      return store;
  }
}
