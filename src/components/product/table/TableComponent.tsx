import React from "react";

export interface TableComponentProps {
  imageSrc?: string;
  name?: string;
  numOfCores?: string;
  coreClock?: string;
  boostClock?: string;
  tdp?: string;
  integratedGraphics?: string;
  raiting?: string;
  price?: string;
}

export const TableComponent = (props: TableComponentProps) => {
  return (
    <div>
      <div>{props.imageSrc}</div>
      <div>{props.name}</div>
      <div>{props.numOfCores}</div>
      <div>{props.coreClock}</div>
      <div>{props.boostClock}</div>
      <div>{props.tdp}</div>
      <div>{props.integratedGraphics}</div>
      <div>{props.raiting}</div>
      <div>{props.price}</div>
    </div>
  );
};
