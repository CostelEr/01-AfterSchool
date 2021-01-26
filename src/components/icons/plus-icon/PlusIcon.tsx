import React from "react";

interface PlusIconProps {
  className?: string;
}
export const PlusIcon = (props: PlusIconProps) => (
  <svg className={props.className} viewBox="0 0 24 24">
    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
  </svg>
);
