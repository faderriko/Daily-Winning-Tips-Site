
"use client";

import React from 'react'
import Link from 'next/link'

export const Card = (data: any) => {
    return (
        <div className='p-2'>
            <div className="card w-80 bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <h1 className="card-title">{data.title}</h1>
                    <p className="text-base">{data.date}</p>
                    <div className="card-actions">
                        <Link href={`/${encodeURIComponent(data.index)}`} className="btn btn-wide btn-primary">
                            {data.index == 0 ? "View Free Games" : "View Packages" }                        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
