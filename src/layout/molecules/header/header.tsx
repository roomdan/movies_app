import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../assets/layout/logo.png";
import Drawer from "./menu-left";
import { useSelector, useDispatch } from "react-redux";
import { open_menu_action } from "../../../db/actions/open_menu_action";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import { Badge } from "@mui/material";

export const item_list: any[] = [
  { to: "/", item: "home" },
  { to: "/categories", item: "Categories" },
  { to: "/favorites", item: "My favorites" },
];

export default function Header() {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((store: any) => {
    return store.save_favorite;
  });

  const menu_status: any = useSelector((state: any) => {
    return state.open_menu;
  });

  function menu_handle() {
    dispatcher(open_menu_action(menu_status.menu ? "close" : "open"));
  }

  function addContent(type: string) {
    if (type === "My favorites") {
      return favorites.length;
    }
  }

  return (
    <Box sx={{ flexGrow: 1, background: "black" }}>
      <AppBar sx={{ bgcolor: "black", px: 5, pt: 1 }} position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              onClick={() => {
                navigate("/");
              }}
              style={{ height: "50px", width: "142px" }}
              src={Logo}
              alt="app icon"
            />
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          {item_list.map((route: any) => (
            <Badge
              key={route.item}
              badgeContent={addContent(route.item)}
              color="error"
            >
              <Button
                className="d-btn"
                sx={{ color: "white", textTransform: "capitalize" }}
                onClick={() => {
                  navigate(route.to);
                }}
              >
                {route.item}
              </Button>
            </Badge>
          ))}
          <MenuIcon className="hmg-menu" onClick={menu_handle} />
        </Toolbar>
      </AppBar>
      <Drawer></Drawer>
    </Box>
  );
}
