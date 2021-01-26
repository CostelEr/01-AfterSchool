import React from 'react'
import { SearchIcon } from '../../icons/search-icon/SearchIcon'

export function Search() {
  return (
    <div className="block relative">
      <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon className="h-4 w-4 fill-current text-gray-400" />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="mt-1 pl-7 py-1 border focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        placeholder="Search"
      ></input>
    </div>
  )
}
