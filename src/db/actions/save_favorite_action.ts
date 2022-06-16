import { save_favorite } from "../reducers/save_favorite";

export default function save_favorite_action(item: string, save: boolean) {
  const action: save_favorite = {
    type: save ? "SAVE FAVORITE" : "REMOVE FAVORITE",
    payload: item,
  };
  return action;
}
