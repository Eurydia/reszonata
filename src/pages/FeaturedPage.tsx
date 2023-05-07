import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { lightBlue, purple } from "@mui/material/colors";
import { FC } from "react";

type FeaturedItemProps = {
  title: string;
  background: string;
};

const FeaturedItem: FC<FeaturedItemProps> = (props) => {
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

export const FeaturedPage: FC = () => {
  return (
    <Box>
      <Stack spacing={4}>
        <Typography fontSize="x-large">Our resonance</Typography>
        <Box>
          <Grid container spacing={2}>
            {[1, 2, 3].map((index) => {
              return (
                <Grid item md={6} key={`placeholder-${index}`}>
                  <FeaturedItem
                    title={`Track #${index}`}
                    background={`linear-gradient(to bottom right, ${lightBlue[200]}cc, ${purple[200]}cc)`}
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
