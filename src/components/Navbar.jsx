import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import SearchBar from "./SearchBar";

const Navbar = ({ light, setLight }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1.5}
      sx={{
        position: "sticky",
        background: "var(--color-background-primary)",
        top: 0,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ display: "flex" }}>
        <div className="logo"></div>
        <Typography
          variant="h4"
          noWrap
          className="hover"
          sx={{
            display: { xs: "none", sm: "block" },
            fontFamily: "'Poppins', sans-serif",
            color: "var(--color-text)",
            fontSize: "1.85rem",
          }}
        >
          hitr
        </Typography>
      </Link>
      <SearchBar />
      <div
        className="mode hover"
        style={{ right: "1rem" }}
        onClick={() => setLight(!light)}
      >
        <div
          className={`mode-icon ${
            light ? "mode-icon-light" : "mode-icon-dark"
          }`}
        ></div>
      </div>
    </Stack>
  );
};
export default Navbar;
