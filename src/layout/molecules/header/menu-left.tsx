import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Badge, Box, List, ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useSelector, useDispatch } from "react-redux";
import { open_menu_action } from "../../../db/actions/open_menu_action";
import { item_list } from "./header";
import { useNavigate } from "react-router-dom";

export default function Drawer(props: any) {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((store: any) => {
    return store.save_favorite;
  });

  const menu_status: any = useSelector((state: any) => {
    return state.open_menu;
  });
  function addContent(type: string) {
    if (type === "My favorites") {
      return favorites.length;
    }
  }

  function menu_handle() {
    dispatcher(open_menu_action(menu_status.menu ? "close" : "open"));
  }

  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        open={menu_status.menu}
        onClose={menu_handle}
        onOpen={menu_handle}
      >
        <Box>
          <List>
            {item_list.map((item, index) => (
              <ListItem
                onClick={() => {
                  navigate(item.to);
                }}
                key={index}
                disablePadding
              >
                <ListItemButton>
                  <Badge badgeContent={addContent(item.item)} color="error">
                    <ListItemText primary={item.item} />
                  </Badge>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
