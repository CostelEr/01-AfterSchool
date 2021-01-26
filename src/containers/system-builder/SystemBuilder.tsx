import React from "react";
import { SystemComponent } from "./SystemComponent";
import { SystemBuilderComponentProps } from "./SystemComponent";

export interface SystemBuilderProps {
  data: SystemBuilderComponentProps[];
}

export const SystemBuilder = (props: SystemBuilderProps) => {
  return (
    <div>
      <h1 className="bg-red-900 text-center pt-6 text-blue-300">
        SELECT YOUR COMPONENTS
      </h1>
      <div className="min-h-screen flex items-center bg-red-900">
        <div className="flex-1 max-w-4xl mx-auto p-10">
          <ul className="grid justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {props.data.map((component) => (
              <li className="bg-white shadow-2xl">
                <SystemComponent
                  icon={component.icon}
                  title={component.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
