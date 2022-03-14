import React from "react"
import { ToggleMenuProvider } from "./src/contexts/ToggleMenu";

export const wrapRootElement = ({ element }) => (
  <ToggleMenuProvider>
    {element}
  </ToggleMenuProvider>
);
