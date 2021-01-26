import React from 'react'
import {
  TableComponent,
  TableComponentProps,
} from '../../product-1/table/TableComponent'
import { Search } from '../../product-1/search/Search'
import { Pagination } from '../pagination/Pagination'
import { SortBy } from '../../product-1/sort-by/SortBy'
import { Button } from '../../button/Button'
import { PlusIcon } from '../../icons/plus-icon/PlusIcon'
import { StarIcon } from '../../icons/star-icon/StarIcon'

export interface TableProps {
  data: TableComponentProps[]
}

export function Table(props: TableProps) {
  const getStar = (star: number) => {
    let content = []
    for (let i = 0; i < star; i++) {
      content.push(<StarIcon className="text-yellow-500 fill-current w-4" />)
    }
    return content
  }

  return (
    <div>
      <div className="sm:flex items-stretch block justify-between ">
        <div className="w-1/2">
          <Search />
        </div>
        <div className="sm:flex sm:items-center items-center">
          <div className="mx-2 text-gray-500 text-sm sm:mt-0 mt-2">Sort by</div>
          <SortBy />
        </div>
      </div>
      <ul>
        {props.data.map((component) => (
          <li className="mt-2">
            <div className="py-4 sm:px-6 border-b border-gray-300">
              <div className="sm:flex items-start justify-between">
                <div className="sm:flex items-start justify-start">
                  <div className="mr-2 sm:mt-0 mt-2">
                    {
                      <img
                        className="w-24"
                        src={component.fotoElev}
                        alt={component.numeElev}
                      ></img>
                    }
                  </div>
                  <div className="text-sm font-medium text-gray-900 hover:text-indigo-500 sm:mt-0 mt-2">
                    {component.numeElev}
                    <div className="flex w-full items-start">
                      {component.raiting &&
                        getStar(parseInt(component.raiting))}
                    </div>

                    <div className="flex w-full items-start">
                      <div className="mr-6 mt-1 block items-start text-sm text-gray-500">
                        <div className="text-xs text-gray-400">Data Nașterii</div>
                        <div>{component.dataNasterii}</div>

                        <div className="mt-2 text-xs text-gray-400">TDP</div>
                        <div>{component.tdp}</div>
                      </div>
                      <div className="mr-6 mt-1 block items-start text-sm text-gray-500">
                        <div className="text-xs text-gray-400">CORE CLOCK</div>
                        <div>{component.coreClock}</div>

                        <div className="mt-2 text-xs text-gray-400">
                          INTEGRATED GRAPHICS
                        </div>
                        <div>{component.integratedGraphics}</div>
                      </div>
                      <div className="mr-6 mt-1 block items-start text-sm text-gray-500">
                        <div className="text-xs text-gray-400">BOOST CLOCK</div>
                        <div>{component.boostClock}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-sm font-medium text-gray-900">
                  <div className="ml-4 sm:mt-0 mt-4">{component.nrContact}</div>

                  <div className="mr-6 mt-1 flex items-center text-sm text-gray-500">
                    <Button
                      label="Select"
                      className="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      iconleft={
                        <PlusIcon className="w-3 fill-current text-gray-700"></PlusIcon>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination></Pagination>
    </div>
  )
}
