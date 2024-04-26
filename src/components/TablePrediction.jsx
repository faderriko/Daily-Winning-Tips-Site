"use client";


import React from 'react'

export const TablePrediction = (data) => {
  return (
    <tbody>
      <tr>
      {/* <th>{data.index + 1}</th> */}
      <td>{data.predictions.date}</td>
        <td>{data.predictions.prediction}</td>
        <td>{data.predictions.fixture}</td>
        {/* <p className="text-bold">{data.tableData.results}</p> */}
      </tr>
    </tbody>

  )
}
