import React from "react";
import { CaseIcon } from "../../components/icons/case-icon/CaseIcon";
import { CpuCoolerIcon } from "../../components/icons/cpu-cooler-icon/CpuCoolerIcon";
import { CpuIcon } from "../../components/icons/cpu-icon/CpuIcon";
import { MemoryRamIcon } from "../../components/icons/memory-ram-icon/MemoryRamIcon";
import { MotherboardIcon } from "../../components/icons/motherboard-icon/MotherboardIcon";
import { OperatingSystemIcon } from "../../components/icons/operating-system-icon/OperatingSystemIcon";
import { PowerSupplyIcon } from "../../components/icons/power-supply-icon/PowerSupplyIcon";
import { StorageIcon } from "../../components/icons/storage-icon/StorageIcon";
import { VideoCardIcon } from "../../components/icons/video-card-icon/VideoCardIcon";
import { SystemBuilder } from "./SystemBuilder";
import { SystemBuilderComponentProps } from "./SystemComponent";

let data: SystemBuilderComponentProps[] = [
  {
    id: 1,
    title: "CPU",
    icon: <CpuIcon />,
  },
  {
    id: 2,
    title: "Motherboard",
    icon: <MotherboardIcon />,
  },
  {
    id: 3,
    title: "Memory",
    icon: <MemoryRamIcon />,
  },
  {
    id: 4,
    title: "Video Cards",
    icon: <VideoCardIcon />,
  },
  {
    id: 5,
    title: "Case",
    icon: <CaseIcon />,
  },
  {
    id: 6,
    title: "Power Supply",
    icon: <PowerSupplyIcon />,
  },
  {
    id: 7,
    title: "Storage",
    icon: <StorageIcon />,
  },
  {
    id: 8,
    title: "CPU Cooler",
    icon: <CpuCoolerIcon />,
  },
  {
    id: 9,
    title: "Operating System",
    icon: <OperatingSystemIcon />,
  },
];

export default {
  title: "containers/SystemBuilder",
};

export const SingleElement = () => {
  return <SystemBuilder data={[data[1]]} />;
};

export const MultipleElements = () => {
  return <SystemBuilder data={data} />;
};
