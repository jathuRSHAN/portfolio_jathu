import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../data/images/logo.png"
import { navlink } from '../data/dummydata'
// import { Menu } from '@mui/icons-material'

export default function Header() {
    const [responsive, setresponsive] = useState(false)
    return (
        <><header>
            <div className="container flexsb">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className={responsive ? "hideMenu" : "nav"}>
                    {navlink.map((links, i) => (
                        <Link to={links.url} key={i}>
                            {links.text}
                        </Link>
                    ))}
                </div>
                <button className='toggle' onClick={() => setresponsive(!responsive)}>
                    {/* <Menu className='icon'></Menu> */}
                </button>
            </div>

        </header>
        </>
    )
}
