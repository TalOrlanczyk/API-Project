import React, { createContext } from "react";
export const ListItemContext = createContext({
  activeItem: "",
  handleClick: () => {}
});
