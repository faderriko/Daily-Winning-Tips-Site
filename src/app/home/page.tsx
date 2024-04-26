"use client";

import React from 'react'
import { Card } from '../../components/Card'
import { Table } from '../../components/Table'
import Hero from "../../components/Hero"
import { useState, useEffect } from 'react'


export default function HomePage() {
  const [packages, setpackages] = useState<any>([]);
  const [results, setResults] = useState<any>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch("https://faderriko.github.io/WebTips/plans.json");
      const response2 = await fetch("https://faderriko.github.io/WebTips/prediction_results.json");
      const data = await response.json();
      const data2 = await response2.json();
      setpackages(data.plans);
      setResults(data2.predictionResults);
      setLoading(false);
    } catch (error) {
      setError(error as any);
      setLoading(false);
    }
  }
  fetchData();
  // useEffect(() => {
    
  // }, []);

  return (
    <section>
      <Hero name={"DAILY WINNING TIPS"}/>
      <div className='flex flex-wrap justify-center mt-6'>
        {packages!.map((item: any, index: any) => (
          <Card key = {index} title={item.name} date={item.ticketDate} index={index}/>
        ))}
      </div>
      <div>
        <div className="relative flex pt-10 items-center">
          <div className="flex-grow"></div>
          <span className="flex-shrink mx-4 card-title">OUR WINNING HISTORY</span>
          <div className="flex-grow"></div>
        </div>
        {results.map((item: any,index: any) => (
          
          <div key = {index} className="p-5 overflow-x-auto">
            <p className="card-title">{item.date}</p>
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
                <Table key = {index} tableData={listItem} index={index}/>
              ))}
            </table>
          </div>
        ))}

      </div>
    </section>
  )
}


