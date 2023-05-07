import { FC, Fragment, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Box,
  Container,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { Search } from "@mui/icons-material";

import { MoodPage } from "@pages/MoodPage";
import { FeaturedPage } from "@pages/FeaturedPage";
import { TrendingPage } from "@pages/TrendingPage";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App: FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="relative"
        sx={{ marginBottom: "1rem" }}
      >
        <Toolbar sx={{ marginY: "0.4rem", minHeight: "4rem" }}>
          <Grid container>
            <Grid item md={3} />
            <Grid item md={6}>
              <TextField
                variant="standard"
                placeholder="Search"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: <Search />,
                }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Stack spacing={4}>
              <Box>
                <List sx={{ marginLeft: "2rem" }} disablePadding>
                  {["Featured", "Trending", "Mood"].map(
                    (text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            setPageIndex(index);
                          }}
                        >
                          <ListItemText>
                            <Typography
                              sx={{
                                textDecoration:
                                  index === pageIndex
                                    ? "underline"
                                    : undefined,
                              }}
                            >
                              {text}
                            </Typography>
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                    ),
                  )}
                </List>
              </Box>
              <Box>
                <List sx={{ marginLeft: "2rem" }} disablePadding>
                  <ListSubheader>My resonance</ListSubheader>
                  {[
                    "Favorites",
                    "Tracks",
                    "Playlists",
                    "Composers",
                  ].map((text) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemText>{text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <List sx={{ marginLeft: "2rem" }} disablePadding>
                  <ListSubheader>Account</ListSubheader>
                  {["Settings", "Help & Support", "About"].map(
                    (text) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText>{text}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    ),
                  )}
                </List>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Container sx={{ paddingBottom: 2 }}>
              {pageIndex === 0 ? <FeaturedPage /> : <Fragment />}
              {pageIndex === 1 ? <TrendingPage /> : <Fragment />}
              {pageIndex === 2 ? <MoodPage /> : <Fragment />}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
