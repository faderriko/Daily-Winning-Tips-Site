
"use client";
import React from 'react'
import { useParams } from 'next/navigation'

import { TablePrediction } from "../../../../components/TablePrediction"
import Hero from "../../../../components/Hero"
import { useState, useEffect } from 'react'

export default function Premium() {
  const params: any = useParams()
  const [predictions, setPredictions] = useState<any>([]);
  const [name, setName] = useState<any>("");
  const [id, setId] = useState<any>("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {

      const response = await fetch("https://faderriko.github.io/WebTips/predictions.json");
      const data = await response.json();
      const name = params.premiumName.split('%20').join(' ')
      const id = params.premiumId

      if (params.premiumId == "golden_draw_one") {
        setPredictions(data.golden_draw_one)
        }

        if (params.premiumId == "golden_draw_two") {
          setPredictions(data.golden_draw_two)

        }
        if (params.premiumId == "golden_draw_three") {
          setPredictions(data.golden_draw_three)

        }

        if (params.premiumId == "sportpesa_mega_jackpot") {
          setPredictions(data.sportpesa_mega_jackpot)

        }

        if (params.premiumId == "sportpesa_mid_week_jackpot") {
          setPredictions(data.sportpesa_mid_week_jackpot)

        }

        if (params.premiumId == "betika_jackpot") {
          setPredictions(data.betika_jackpot)

        }

        if (params.premiumId == "mozzart_jackpot") {
          setPredictions(data.mozzart_jackpot)

        }

        if (params.premiumId == "correct_score_one") {
          setPredictions(data.correct_score_one)

        }

        if (params.premiumId == "correct_score_two") {
          setPredictions(data.correct_score_two)

        }

        if (params.premiumId == "correct_score_three") {
          setPredictions(data.correct_score_three)

        }
        if (params.premiumId == "seven_days_running_bets") {
          setPredictions(data.seven_days_running_bets)

        }
        if (params.premiumId == "fourteen_days_running_bets") {
          setPredictions(data.fourteen_days_running_bets)

        }
        if (params.premiumId == "thirty_days_running_bets") {
          setPredictions(data.thirty_days_running_bets)

        }

        setName(name)
        setId(id)
        setLoading(false);
      } catch (error) {
        setError(error as any);
        setLoading(false);
      }
    }
    fetchData();
  
  return (
    <section>
      <Hero name={name} />

      <div className="pt overflow-x-auto">
        <p className="card-title"></p>
        <table className="table bg-base-200">
          {/* head */}
          <thead>
            <tr>
              <th></th>
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
      </div>
    </section>
  )
}
