import { FC } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import { Menu } from "@mui/icons-material";

export const RAppBar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
