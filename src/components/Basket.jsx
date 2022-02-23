import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import BasketItem from "./BasketItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Basket = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const {
    cartOpen,
    closeCart = Function.prototype,
    order = [],
    removeFromOrder,
  } = props;

  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List style={{ width: matches ? "400px" : "150px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Basket" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Basket is empty</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem
                key={item.key}
                removeFromOrder={removeFromOrder}
                {...item}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Total cost:{" "}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{" "}
                USD.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
