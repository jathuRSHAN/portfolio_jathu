import React, { useState } from 'react'
import { portfolio } from '../data/dummydata'
// import { Visibility } from '@mui/icons-material'
import Heading from '../common/Heading'

export default function Portfolio() {
    const [list] = useState(portfolio)
    return (
        <>
            <article>
                <div className="container">
                    <div className="titel">
                        <Heading title="portfolio" />
                    </div>
                    {/* <div className="catButton">
                        taxt
                    </div> */}
                    <div className="content grid3">
                        {list.map((item, i) => (
                            <div className="box">
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className="overlay">
                                    <h3>{item.title}</h3>
                                    <span>{item.name}</span>
                                    {/* <Visibility /> */}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </article>
        </>

    )
}
