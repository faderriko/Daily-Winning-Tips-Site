"use client";


import React from 'react'

export const TablePrediction = (data) => {
  return (
    <tbody>
      <tr>
     
      <td>{data.predictions.date}</td>
        <td>{data.predictions.fixture}</td>
        <td>{data.predictions.prediction}</td>
        {/* <p className="text-bold">{data.tableData.results}</p> */}
      </tr>
    </tbody>

  )
}
