import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {
  const [light, setLight] = useState(true);

  useEffect(
    function () {
      if (light) {
        document.documentElement.style.setProperty("--color-text", "#353536");
        document.documentElement.style.setProperty(
          "--color-background-primary",
          "#f6f6f6"
        );
        document.documentElement.style.setProperty(
          "--color-background-secondary",
          "rgba(255, 255, 255, 0.5)"
        );
        document.documentElement.style.setProperty(
          "--color-border",
          "rgba(0, 0, 0, 0.2)"
        );
      } else {
        document.documentElement.style.setProperty("--color-text", "#f6f6f6");
        document.documentElement.style.setProperty(
          "--color-background-primary",
          "#353536"
        );
        document.documentElement.style.setProperty(
          "--color-background-secondary",
          "rgba(255, 255, 255, 0.15)"
        );
        document.documentElement.style.setProperty(
          "--color-border",
          "rgba(255, 255, 255, 0.15)"
        );
      }
    },
    [light]
  );

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "var(--color-background-primary)" }}>
        <Navbar light={light} setLight={setLight} />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/searchTerm/" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
