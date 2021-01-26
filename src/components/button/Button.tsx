import React from "react";

export interface ButtonProps {
  label?: string;
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconright?: JSX.Element;
  iconleft?: JSX.Element;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { type, iconleft, label, iconright, ...buttonProps } = props;

  return (
    <button type={type || "submit"} {...buttonProps}>
      <div className="flex items-center">
        {iconleft && <div className="mx-1">{iconleft}</div>}
        <div className="mx-1">{label}</div>
        {iconright && <div className="mx-1">{iconright}</div>}
      </div>
    </button>
  );
}
