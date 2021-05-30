import React,{useContext,useEffect,useState} from 'react'
import classes from '../styles/HomePage/AboutUs.module.scss'
import { Parallax,Background } from 'react-parallax';
import {LangContext} from "../components/LangContext"

import parse from "html-react-parser"

import {languages} from "../lang/lang.js"


const AboutUs = () => {

    const {lang} = useContext(LangContext)

    const [actualLanguage,setActualLanguage] = useState("pl")

    useEffect(() => {

        setActualLanguage(lang)
        
    },[lang])

    
    return (
        <>

            <section className={classes.aboutus}>
                <div className={classes.aboutus__info}>
                    <h2 className={classes.headingSecond}>
                        <span className={classes.firstLine}>{parse(languages[actualLanguage].firstLine)} </span>
                        <span className={classes.gold}>{parse(languages[actualLanguage].gold)}</span>
                    </h2>

                    <p className={classes.aboutus__text}>{parse(languages[actualLanguage].aboutUsText1)}</p>
                    <p className={classes.aboutus__text}>{parse(languages[actualLanguage].aboutUsText2)}</p>
                    <p className={classes.aboutus__text}>{parse(languages[actualLanguage].aboutUsText3)}</p>
                </div>
            </section>


        </>
    )   
}




export default AboutUs
