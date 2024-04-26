
"use client";

import React from 'react'
import Link from 'next/link'

export const PlanItemCard = (data: any) => {
    let value
    value = localStorage.getItem(data.id) || ""
    return (
        <div className='p-2'>
            <div className="card w-80 bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <h1 className="card-title">{data.title}</h1>
                    <p className="text-base">Odds {data.odds}</p>
                    <p className="text-base">Ksh {data.amount}</p>
                    <div className="card-actions">
                        <Link href={data.id != value ? 
                        `/howToPay/${encodeURIComponent(data.id)}/${encodeURIComponent(data.amount)}/${encodeURIComponent(data.title)}` : 
                        `premium/${encodeURIComponent(data.id)}/${encodeURIComponent(data.title)}`} 
                        className="btn btn-wide btn-primary">
                            {data.id == value ? "View" : "Buy"}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
