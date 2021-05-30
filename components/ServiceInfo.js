import React,{useState,useEffect,useContext} from 'react'
import classes from '../styles/HomePage/Offers.module.scss'
import {LangContext} from "./LangContext"
import parse from "html-react-parser"
import {languages} from "../lang/lang.js"


const ServiceInfo = ({service,back}) => {

    const {lang} = useContext(LangContext)

    const [actualLanguage,setActualLanguage] = useState("pl")

    const {content,title,img} = service

    useEffect(() => {

        setActualLanguage(lang)
        
    },[lang])

    console.log(service)

    return (
        <section id='offers' className={classes.service}>
            <h2 className={classes.service__title}>{parse(languages[actualLanguage][title])}</h2>
            <span className={classes.service__text}>{parse(languages[actualLanguage][content])}</span>
            <button className={classes.service__button} onClick={() => back("")}>Wróć</button>
            <div className={classes.service__wrapper}>
                <img className={classes.service__wrapper__img} src={img} alt="img" />
            </div>
        </section>
    )
}

export default ServiceInfo
