import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { amber, deepOrange } from "@mui/material/colors";
import { FC } from "react";

type TrendingItemProps = {
  title: string;
  background: string;
};

const TrendingItem: FC<TrendingItemProps> = (props) => {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={{
        backgroundImage: props.background,

        height: "250px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography fontWeight="bold">{props.title}</Typography>
    </Button>
  );
};

const SeeMoreButton: FC = () => {
  return (
    <Button
      variant="text"
      color="inherit"
      sx={{
        height: "250px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>More</Typography>
    </Button>
  );
};

export const TrendingPage: FC = () => {
  return (
    <Box>
      <Stack spacing={4}>
        <Typography fontSize="x-large">Trending this week</Typography>

        <Box>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <TrendingItem
                title="Track #1"
                background={`linear-gradient(to bottom right, ${amber[200]}cc, ${deepOrange[200]}cc)`}
              />
            </Grid>
            {[2, 3, 4].map((index) => {
              return (
                <Grid item md={6} key={`placeholder-${index}`}>
                  <TrendingItem
                    title={`Track #${index}`}
                    background={`linear-gradient(to bottom right, ${amber[200]}cc, ${deepOrange[200]}cc)`}
                  />
                </Grid>
              );
            })}
            <Grid item md={6}>
              <SeeMoreButton />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};
