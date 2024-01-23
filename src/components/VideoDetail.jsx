import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: { xs: "96vw", md: "100%" },
              position: "sticky",
              top: "75px",
              ml: "2vw",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="var(--color-text)"
              variant="h6"
              fontWeight="bold"
              fontSize="1rem"
              p={0.5}
            >
              {title}
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              gap={{ xs: "5px", md: "0px" }}
              sx={{ color: "var(--color-text)" }}
              py={0.5}
              px={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  // variant={{ sm: "subtitle1", md: "h6" }}
                  color="gray"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction={{ xs: "column", md: "row" }}
                gap={{ xs: "0px", md: "15px" }}
                alignItems="flex-start"
              >
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, fontSize: { xs: "13px", md: "16px" } }}
                >
                  <strong>{parseInt(viewCount).toLocaleString()}</strong> views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, fontSize: { xs: "13px", md: "16px" } }}
                >
                  <strong>{parseInt(likeCount).toLocaleString()}</strong> likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          pl={{ md: 5, xs: 2 }}
          pr={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <Videos videos={videos} direction={{ xs: "row", md: "column" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
