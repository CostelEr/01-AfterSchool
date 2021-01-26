import React from 'react'
import { Table } from './Table'
import { cpuData } from './CpuData'

export default {
  title: 'components/product-1/Table',
}

export const Default = () => <Table data={cpuData}></Table>
