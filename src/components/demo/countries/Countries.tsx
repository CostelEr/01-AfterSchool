import React from "react";
import { useGetCountriesQuery } from "./__graphql__/GetCountries";

export function Countries() {
  const { loading, error, data } = useGetCountriesQuery({
    variables: { search: "^A" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Capital
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {data?.countries.map(({ code, name, capital }: any) => (
          <tr className="bg-gray-100">
            <td className="w-1/6 text-left py-3 px-4">{code}</td>
            <td className="w-1/6 text-left py-3 px-4">{name}</td>
            <td className="w-4/6 text-left py-3 px-4">{capital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
