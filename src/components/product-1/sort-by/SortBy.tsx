import React from 'react'

export function SortBy() {
  return (
    <select
      id="sortBy"
      name="sortBy"
      className="mt-1 block py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option>Name</option>
      <option>Price</option>
      <option>Number of cores</option>
    </select>
  )
}
