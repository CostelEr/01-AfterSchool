import React from 'react'

export interface TableComponentProps {
  fotoElev?: string
  numeElev?: string
  dataNasterii?: string
  coreClock?: string
  boostClock?: string
  tdp?: string
  integratedGraphics?: string
  raiting?: string
  nrContact?: string
}

export const TableComponent = (props: TableComponentProps) => {
  return (
    <div>
      <div>{props.fotoElev}</div>
      <div>{props.numeElev}</div>
      <div>{props.dataNasterii}</div>
      <div>{props.coreClock}</div>
      <div>{props.boostClock}</div>
      <div>{props.tdp}</div>
      <div>{props.integratedGraphics}</div>
      <div>{props.raiting}</div>
      <div>{props.nrContact}</div>
    </div>
  )
}
