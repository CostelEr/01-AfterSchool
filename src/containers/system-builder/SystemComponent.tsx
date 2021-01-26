import React from "react";

export interface SystemBuilderComponentProps {
  id?: number;
  title: string;
  icon: JSX.Element;
}

export const SystemComponent = (props: SystemBuilderComponentProps) => {
  return (
    <li>
      <div className="border-none text-center w-32 mx-8 my-4">{props.icon}</div>
      <div className="text-center mb-4">{props.title}</div>
    </li>
  );
};
