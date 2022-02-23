import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BasketItem = ({ removeFromOrder, name, id, price, quantity }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ListItem>
      <Typography variant={matches ? "body1" : "body2"}>
        {name} {price} USD x{quantity}
      </Typography>

      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
