import React from 'react'
import { useGetContinetsQuery } from './__graphql__/GetContinents'

export function Continents() {
  const { loading, error, data } = useGetContinetsQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <table className="bg-white">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
            Code
          </th>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
            Name
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {data?.continents.map(({ code, name }) => (
          <tr className="bg-gray-100">
            <td className="w-1/6 text-left py-3 px-4">{code}</td>
            <td className="w-1/6 text-left py-3 px-4">{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
