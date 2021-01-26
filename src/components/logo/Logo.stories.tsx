import React from "react";
import { Logo } from "./Logo";

export default {
  title: "components/Logo",
};

export const Red = () => (
  <Logo className="fill-current text-red-900 max-w-xs" />
);

export const Blue = () => (
  <Logo className="fill-current text-blue-900 max-w-xs" />
);

export const Black = () => (
  <Logo className="fill-current text-black max-w-xs" />
);
