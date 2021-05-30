import React from 'react'
import classes from '../styles/HomePage/Header.module.scss'
import { Parallax } from 'react-parallax';


const Header = () => {
    return (
        <>
            <Parallax className={classes.frontpageimg} bgImage="/HomePageImages/43dark.jpg"  strength={400}>
                    <header className={classes.header}>
                            <div className={classes.header__logo}>
                                <img src="/HomePageImages/logo.png" alt="logo" />
                            </div>
                    </header>
            </Parallax>
       </>
        
    )
}

export default Header
