import React from 'react'
import { home } from '../data/dummydata'
import Typewriter from 'typewriter-effect'

export default function Hero() {
    return (
        <>
            <section className="hero">
                {home.map((val, i) => (
                    <div className="heroContainer">
                        <h3> {val.text}</h3>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                                    autoStart: true, loop: true
                                }} />
                        </h1>
                        <p>{val.desc}</p>
                        <button className="primaryBtn">Download resume</button>
                    </div>
                ))}
            </section>
        </>
    )
}
