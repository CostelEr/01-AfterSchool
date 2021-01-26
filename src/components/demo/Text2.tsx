import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function Text2() {
  let query = useQuery();
  return (
    <div className="flex bg-gray-900">
      <div className="flex w-2/3 border border-white hover:bg-orange-900">
        <h1 className="text-gray-500 justify-start">
          <button className="bg-red-600 text-yellow-300 hover:bg-orange-300 hover:text-red-700 font-bold text-xl rounded-lg px-3 py-3">
            Simple Red Button
          </button>
          Text 1 {query.get("name")} {query.get("age")}
        </h1>
      </div>
      <div className="flex w-1/3 justify-center">
        <h1 className="flex text-white items-center">
          Text 2 {query.get("name")} {query.get("age")}
        </h1>
      </div>
    </div>
  );
}
