"use client";

import React from 'react'
import { PlanItemCard } from '../../components/PlanItemCard'
import { TablePrediction } from "../../components/TablePrediction"
import Hero from "../../components/Hero"
import { useState, useEffect } from 'react'


export default function Plan({ params }: { params: { planIndex: any } }) {
  const [packages, setpackages] = useState<any>([]);
  const [predictions, setPredictions] = useState<any>([]);
  const [name, setName] = useState<any>("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch("https://faderriko.github.io/WebTips/plans.json");
      const response2 = await fetch("https://faderriko.github.io/WebTips/predictions.json");

      const data = await response.json();
      const data2 = await response2.json();

      if (params.planIndex == 0) {
        setPredictions(data2.free_tips)
      }

      setpackages(data.plans[params.planIndex].productsList);
      setName(data.plans[params.planIndex].name)

      setLoading(false);
    } catch (error) {
      setError(error as any);
      setLoading(false);
    }
  }
  fetchData();


  return (
    <section className=''>
      <Hero name={name} />

      {params.planIndex != 0 ?
        <div className='flex flex-wrap justify-center mt-6'>
          {packages!.map((item: any, index: any) => (
            <PlanItemCard key = {index}
            title={item.name} date={item.date} index={index} id={item.id} odds={item.odds} name={name} amount={item.amount.split('Ksh').join('')} />
          ))}
        </div> : <div></div>
      }

      {params.planIndex == 0 ?
        <div className="overflow-x-auto">
          <p className="card-title"></p>
          <table className="table bg-base-200">
            {/* head */}
            <thead>
              <tr>
                <th>Date</th>
                <th>Fixture</th>
                <th>Predictions</th>
                {/* <th>Odds</th> */}
              </tr>
            </thead>
            {predictions.map((listItem: any, index: any) => (
              <TablePrediction key = {index} predictions={listItem} index={index} />
            ))}
          </table>
        </div> : <div></div>
      }
    </section>
  )
}
