import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        height: { sm: 43, xs: 40 },
        width: "50%",
        // marginLeft: { sm: "15%", xs: "5%" },
        borderRadius: 20,
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-background-secondary)",
        pl: 2.5,
        // mr: { sm: 1 },
        fontSize: "1.5rem",
        position: "relative",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0.3px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        style={{
          width: "80%",
          fontSize: "1.1rem",
          color: "var(--color-text)",
          backgroundColor: "transparent",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: { sm: "8.75px", xs: "7px" },
          color: "var(--color-gradient)",
          mr: "1px",
          position: "absolute",
          right: { sm: "0.15px", xs: "0.25px" },
          bottom: { sm: "1px", xs: "1px" },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
