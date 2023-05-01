import { Box, Button, Stack, Typography } from "@mui/material";
import {
  amber,
  blueGrey,
  deepOrange,
  grey,
  lightBlue,
  lime,
  pink,
  purple,
  yellow,
} from "@mui/material/colors";
import { FC } from "react";

type MoodItemProps = {
  title: string;
  colorA: string;
  colorB: string;
};

const MoodItem: FC<MoodItemProps> = (props) => {
  const { title, colorA, colorB } = props;

  return (
    <Button
      fullWidth
      sx={{
        backgroundImage: `linear-gradient(to bottom right, ${colorA}b0, ${colorB}b0)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "5rem",
      }}
    >
      <Typography fontWeight="bold" color="white">
        {title}
      </Typography>
    </Button>
  );
};

export const MoodPage: FC = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <MoodItem
          title="Happy"
          colorA={yellow[200]}
          colorB={pink[200]}
        />
        <MoodItem
          title="Energetic"
          colorA={lightBlue[200]}
          colorB={lime[200]}
        />
        <MoodItem
          title="Stellar"
          colorA={purple[200]}
          colorB={amber[200]}
        />
        <MoodItem
          title="Serene"
          colorA={lightBlue[200]}
          colorB={grey[200]}
        />
        <MoodItem
          title="Dramatic"
          colorA={deepOrange[200]}
          colorB={purple[200]}
        />
        <MoodItem
          title="Melancholic"
          colorA={blueGrey[200]}
          colorB={grey[700]}
        />
      </Stack>
    </Box>
  );
};
