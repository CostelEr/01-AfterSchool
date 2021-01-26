import React from "react";
import { Table } from "./Table";
import { cpuData } from "./CpuData";

export default {
  title: "components/product/Table",
};

export const Default = () => <Table data={cpuData} />;
