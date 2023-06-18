import React from "react";

const InfoTable = ({ pokemon }) => {
  const { habitat, height, weight, catchRate, species } = pokemon;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-400 dark:text-gray-400 transition-all duration-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-indigo-950 dark:text-gray-300 transition-all duration-300">
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
          <tr className="border-b bg-gray-50 dark:bg-blue-950 dark:border-blue-950 transition-all duration-300">
            <th
              scope="row"
              className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
            >
              Species
            </th>
            <td className="px-6 py-4">{species}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-blue-900 dark:border-blue-950 transition-all duration-300">
            <th
              scope="row"
              className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
            >
              Habitat
            </th>
            <td className="px-6 py-4">{habitat}</td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-blue-950 dark:border-blue-950 transition-all duration-300">
            <th
              scope="row"
              className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
            >
              Height
            </th>
            <td className="px-6 py-4">{height}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-blue-900 dark:border-blue-950 transition-all duration-300">
            <th
              scope="row"
              className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
            >
              Weight
            </th>
            <td className="px-6 py-4">{weight}</td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-blue-950 dark:border-blue-950 transition-all duration-300">
            <th
              scope="row"
              className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
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
