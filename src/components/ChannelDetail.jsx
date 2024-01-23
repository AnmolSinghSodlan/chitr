import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  if (!channelDetail?.snippet) return <Loader />;

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "250px",
            background: "var(--gradient-background)",
            zIndex: 10,
          }}
        />
        {/* <ChannelCard channelDetail={channelDetail} marginTop="-125px" /> */}
        <Box
          sx={{
            boxShadow: "none",
            borderRadius: "20px",
            // border: "2px solid var(--color-background)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "356px", md: "320px" },
            height: "326px",
            margin: "auto",
            marginTop: "-125px",
          }}
        >
          <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                // fontWeight: "700",
                color: "var(--color-text)",
              }}
            >
              <CardMedia
                image={
                  channelDetail?.snippet?.thumbnails?.high?.url ||
                  demoProfilePicture
                }
                alt={channelDetail?.snippet?.title}
                sx={{
                  borderRadius: "50%",
                  height: "180px",
                  width: "180px",
                  mb: 1.5,
                  // border: "5px solid var(--color-background)",
                }}
              />
              <Typography variant="h6">
                {channelDetail?.snippet?.title}
                <CheckCircleIcon
                  sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                />
              </Typography>
              {channelDetail?.statistics?.subscriberCount && (
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px", color: "gray" }}
                >
                  {parseInt(
                    channelDetail?.statistics?.subscriberCount
                  ).toLocaleString("en-US")}{" "}
                  Subscribers
                </Typography>
              )}
            </CardContent>
          </Link>
        </Box>
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "0px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
