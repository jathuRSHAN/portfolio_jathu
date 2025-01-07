import React from 'react'
import { project } from '../data/dummydata'
import CountUp from 'react-countup'
//import Heading from '../common/Heading'

export default function Counter() {
    return (
        <>
            <div className=" counter">
                <div className="contaner grid3 grid4">
                    {project.map((item, i) => (
                        <div className="box">
                            {/* <i>{item.icon}</i> */}
                            <h1 className='heading'>
                                <CountUp enableScrollSpy duration={2} end={item.num} />
                            </h1>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


