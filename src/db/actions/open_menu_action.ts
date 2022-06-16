import { open_action } from "../reducers/open_menu";

/**
 * Open menu action for open or close left menu
 * @param action close or open menu
 * @returns object action
 */
export const open_menu_action = function (action: "close" | "open") {
  const handle: open_action = {
    type: "",
    payload: {},
  };

//   verify menu status
  if (action === "close") {
    handle.type = "CLOSE_MENU";
    handle.payload = { manu: false };
  } else {
    handle.type = "OPEN_MENU";
    handle.payload = { menu: true };
  }

  return handle;
};
