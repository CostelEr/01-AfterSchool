import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("is rendering without errors", () => {
  render(<App />);
});
