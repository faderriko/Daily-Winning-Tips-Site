"use client";

import React from 'react'
import Hero from "../../../../../components/Hero"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function HowToPay({ params }: { params: { gameId: any, amount: any, title: any } }) {
    const [message, setMessage] = useState<any>("")
    const [error, setError] = useState<any>("")
    const router = useRouter()

    const validateMessage = () => {
        if (message.length < 30) {
            setError("Valid M-PESA message Required")
            return
        }

        var messageArry = message.split(" ");
        let mpesaCode
        mpesaCode = localStorage.getItem(messageArry[0]) || ""
        var splited = messageArry[2].split(".", 2)
        var amount = splited[0].split('Ksh').join('')
        var packageAmount = params.amount.replace("%20", "")

        if (mpesaCode == messageArry[0]) {
            setError("Valid M-PESA message Required")
            return
        }

        if (packageAmount != amount) {
            setError("Valid M-PESA message Required")
            return
        }


        setError("")
        localStorage.setItem(params.gameId, params.gameId)
        localStorage.setItem(messageArry[0], messageArry[0])
        console.log("id", amount, params.gameId)
        router.back()
    }
    const onMessage = (event: any) => {
        setMessage(event.target.value)
    }
    return (
        <section>
            <Hero name={"HOW TO PAY "} />
            <div className='flex flex-wrap justify-center'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title items-center text-center">Pay / Validate Payments</h2>
                        <hr></hr>
                        <h2 className="card-title items-center text-center">Package Details</h2>
                        <p className="text-base">Name: <span className='text-bold'>{params.title.replace("%20", " ").replace("%20", " ").replace("%20", " ")}</span></p>
                        <p className="text-base">Amount: <span className='text-bold'>{params.amount.replace("%20", " ")}</span></p>
                        <hr></hr>
                        <p className="text-base text-bold">1.Go to M-PESA</p>
                        <p className="text-base">2. Select Lipa na M-PESA</p>
                        <p className="text-base">3. Select Buy Goods</p>
                        <p className="text-base">4. Enter Till No: 5150225</p>
                        <p className="text-base">5. Enter amount {params.amount.replace("%20", " ")}</p>
                        <p className="text-base">6. After you have paid, you will receive a payment confirmation message from M-PESA</p>
                        <p className="text-base">7. Copy and paste the message below and validate</p>
                        <div className="card-actions">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Paste M-PESA Message</span>
                                </div>
                                <textarea onChange={onMessage} className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                            </label>
                            <p className="text-base text-red-600/100">{error}</p>
                            <button className="btn btn-primary" onClick={validateMessage}>Validate Payments</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
