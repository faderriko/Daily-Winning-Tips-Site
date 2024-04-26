"use client";


import React from 'react'

export const Table = (data) => {
  return (
    <tbody>
      <tr>
      <th>{data.index + 1}</th>
        <td>{data.tableData.fixture}</td>
        <td>{data.tableData.prediction}</td>
        <td>{data.tableData.odds}</td>
        <p className="text-bold">{data.tableData.results}</p>
      </tr>
    </tbody>

  )
}
