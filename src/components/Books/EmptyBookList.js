import { Stack, Typography } from "@mui/material";
import empty from "../../assets/empty.jpeg";

function EmptyBookList() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <img
        style={{ borderRadius: "50%", width: "50%" }}
        alt="empty shelve"
        src={empty}
      />
      <Typography variant="h6" gutterBottom component="div">
        Oh no! There are no books!
      </Typography>
    </Stack>
  );
}

export default EmptyBookList;
