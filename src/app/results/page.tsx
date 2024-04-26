"use client";
import { Table } from '@/components/Table';
import TableHead from '@/components/TableHead'
import React from 'react'
import { useState, useEffect } from 'react'

export default function Results() {
    const [results, setResults] = useState<any>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        try {
            const response = await fetch("https://faderriko.github.io/WebTips/prediction_results.json");
            const data = await response.json();
            console.log("response data", data.predictionResults)
            setResults(data.predictionResults);
            setLoading(false);
        } catch (error) {
            setError(error as any);
            setLoading(false);
        }
    }
    fetchData();
    return (
        <div>
            <div className="relative flex pt-10 items-center">
                <div className="flex-grow"></div>
                <span className="flex-shrink mx-4 card-title">OUR WINNING HISTORY</span>
                <div className="flex-grow"></div>
            </div>
            {results.map((item: any, index: any) => (
                <div key={index} className="pt-10 overflow-x-auto">
                    <p className="card-title">{item.date}</p>
                    <hr className="border-black" />
                    <table className="table bg-base-200">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Fixture</th>
                                <th>Odds</th>
                                <th>Predictions</th>
                                <th>Results</th>
                            </tr>
                        </thead>
                        {item.gamesList.map((listItem: any, index: any) => (
                            <Table key = {index} tableData={listItem} index={index} />
                        ))}
                    </table>
                </div>
            ))}

        </div>
    )
}
