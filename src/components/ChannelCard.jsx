import React from "react";
import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    className="card"
    sx={{
      borderRadius: 4,
      backgroundColor: "var(--color-background-secondary)",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: "0px 1px 16px rgba(0, 0, 0, 0.5)",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--color-text)",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 1.5,
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircleIcon
            sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
          />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant="body2" sx={{ fontSize: "13px", color: "gray" }}>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString("en-US")}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
