import React from 'react'
import { Button } from '../../button/Button'
import { PlusIcon } from '../../icons/plus-icon/PlusIcon'
import { StarIcon } from '../../icons/star-icon/StarIcon'
import { ItemsPerPage } from '../items-per-page/ItemsPerPage'
import { PaginationBottom } from '../pagination-bottom/PaginationBottom'
import { PaginationTop } from '../pagination-top/PaginationTop'
import { Search } from '../search/Search'
import { SortBy } from '../sort-by/SortBy'
import {
  TableComponent,
  TableComponentProps,
} from '../../product/table/TableComponent'

export interface TableProps {
  data: TableComponentProps[]
}

export function Table(props: TableProps) {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">CPUs</h2>
        </div>
        <div className="my-2 flex items-center sm:flex-row flex-col justify-between">
          <Search />
          <SortBy />
          <ItemsPerPage />
          <PaginationTop />
        </div>

        <div>
          {props.data.map((component) => (
            <div className="flex items-center justify-items-center">
              <div className="flex w-9/12 items-center">
                <div className="m-2 w-1/5">
                  {
                    <img
                      className="w-24"
                      src={component.imageSrc}
                      alt={component.name}
                    ></img>
                  }
                </div>
                <div className="w-4/5 mb-3 mt-2">
                  <div className="mx-1 text-base font-bold">
                    <TableComponent name={component.name} />
                  </div>
                  <div className="flex mx-1 text-base">
                    {/* <TableComponent raiting={'Raiting: ' + component.raiting} /> */}
                    <StarIcon className="text-yellow-500 fill-current w-4" />
                    <StarIcon className="text-yellow-500 fill-current w-4" />
                    <StarIcon className="text-yellow-500 fill-current w-4" />
                    <StarIcon className="text-yellow-500 fill-current w-4" />
                    <StarIcon className="text-yellow-500 fill-current w-4" />
                  </div>
                  <div className="flex">
                    <div className="mx-1 text-base w-1/3 justify-start">
                      <div className="text-gray-600"># of Cores</div>
                      <TableComponent numOfCores={component.numOfCores} />
                    </div>
                    <div className="mx-1 text-base w-1/3 justify-start">
                      <div className="text-gray-600">Core Clock</div>
                      <TableComponent coreClock={component.coreClock} />
                    </div>

                    <div className="mx-1 text-base w-1/3 justify-start">
                      <div className="text-gray-600">Boost Clock</div>
                      <TableComponent boostClock={component.boostClock} />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mx-1 text-base w-1/3 justify-start">
                      <div className="text-gray-600">Tdp</div>
                      <TableComponent tdp={component.tdp} />
                    </div>

                    <div className="mx-1 text-base w-2/3 justify-start">
                      <div className="text-gray-600">Integrated Graphics</div>
                      <TableComponent
                        integratedGraphics={component.integratedGraphics}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-3/12 justify-center">
                <div className="mx-1 text-base font-bold text-center">
                  <TableComponent price={component.price} />
                </div>
                <div className="flex mx-1 text-base font-bold justify-center">
                  <Button
                    label="Select"
                    className="bg-yellow-500 text-sm py-1 pr-2 font-bold hover:bg-green-300"
                    iconleft={<PlusIcon className="mx-1 w-3" />}
                  ></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PaginationBottom />
    </div>
  )
}
