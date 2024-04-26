"use client";


import React from 'react'

export const Table = (data) => {
  return (
    <tbody>
      <tr>
      {/* <th>{data.index + 1}</th> */}
        <td>{data.tableData.fixture}</td>
        <td>{data.tableData.odds}</td>
        <td>{data.tableData.prediction}</td>
        <th>{data.tableData.results}</th>
        {/* <th>{data.index + 1}</th> */}
      </tr>
    </tbody>

  )
}
