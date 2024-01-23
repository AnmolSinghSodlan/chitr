import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          whiteSpace: "nowrap",
          background:
            category.name === selectedCategory && "var(--gradient-background)",
          color:
            category.name === selectedCategory &&
            "var(--color-background-primary)",
        }}
        key={category.name}
      >
        <span
          className="category-btn-icon"
          style={{
            color:
              category.name === selectedCategory &&
              "var(--color-background-primary)",
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Categories;
