import React from 'react'

const Hero = (name) => {
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">{name.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero