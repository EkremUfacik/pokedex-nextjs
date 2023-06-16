import React from "react";

const InfoTable = ({ pokemon }) => {
  const { habitat, height, weight, catchRate, species } = pokemon;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th
              scope="col"
              colSpan={2}
              className="p-2 text-xl tracking-wider text-center"
            >
              Pokemon Info
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Species
            </th>
            <td className="px-6 py-4">{species}</td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Habitat
            </th>
            <td className="px-6 py-4">{habitat}</td>
          </tr>
          <tr className="border-b bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Height
            </th>
            <td className="px-6 py-4">{height}</td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Weight
            </th>
            <td className="px-6 py-4">{weight}</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Catch Rate
            </th>
            <td className="px-6 py-4">{catchRate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
