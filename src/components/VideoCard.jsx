import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    className="card"
    sx={{
      borderRadius: 4,
      backgroundColor: "var(--color-background-secondary)",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: "0px 1px 16px rgba(0, 0, 0, 0.5)",
      },
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: "100%", height: 180 }}
      />
    </Link>
    <CardContent className="card-text">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="var(--color-text)"
        >
          {snippet?.title.slice(0, 55) || demoVideoTitle.slice(0, 55)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "2px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
