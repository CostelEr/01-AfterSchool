import React from "react";

export function PaginationTop() {
  return (
    <div className="inline-flex xs:mt-0 items-center">
      <div className="text-base mx-4 text-gray-900">
        Showing 1 to 4 of 50 Entries
      </div>
      <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
        Prev
      </button>
      <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
        Next
      </button>
    </div>
  );
}
