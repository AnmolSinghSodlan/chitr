import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Box minHeight="95vh">
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="55vh"
    >
      <CircularProgress style={{ color: "var(--color-gradient)" }} />
    </Stack>
  </Box>
);

export default Loader;
