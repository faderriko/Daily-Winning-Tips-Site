import React from 'react'

const TableHead = () => {
  return (
    <div className="overflow-x-auto">
        <table className="table table-xs">
        <thead>
          <tr className="text-left">
            <th>Fixture</th>
            <th>Odds</th>
            <th>Prediction</th>
            <th>Results</th>
          </tr>
        </thead>
        </table>
    </div>
  )
}

export default TableHead
