import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Loader } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${id}`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  if (!videos?.snippet) return <Loader />;

  return (
    <Box p={1} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={{ xs: "500", sm: "900" }}
        fontSize={{ xs: "20px", sm: "27px", md: "33px" }}
        color="var(--color-text)"
        mb={3}
        ml={{ xs: "8px", sm: "40px" }}
      >
        Search Results for{" "}
        <span style={{ color: "var(--color-gradient)" }}>{id}</span>
      </Typography>
      <Box display="flex">
        <Box />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
