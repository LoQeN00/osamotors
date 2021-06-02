import React,{useState,useEffect,useContext} from 'react'
import classes from '../styles/HomePage/Contact.module.scss'
import {LangContext} from "../components/LangContext"
import {languages} from "../lang/lang.js"
import parse from "html-react-parser"

const Contact = () => {

    const {lang} = useContext(LangContext)

    const [actualLanguage,setActualLanguage] = useState("pl")

    useEffect(() => {

        setActualLanguage(lang)
        
    },[lang])


    return (
        <section className={classes.contact} id='contact'>
            <h2 className={classes.contact__title}>{parse(languages[actualLanguage].navContact)}</h2>
            <div className={classes.contact__wrapper}>

                <div className={classes.contact__wrapper__content}>
                    <a className={classes.fixCursor} href="tel:501413307"><img className={classes.contact__wrapper__content__img} src="/HomePageImages/icon2.png" alt="icon" /></a>
                    <p className={classes.contact__wrapper__content__text}>Telefon:</p>
                    <p className={classes.contact__wrapper__content__text}>501&nbsp;413&nbsp;307</p>
                </div>

                <div className={classes.contact__wrapper__content}>
                    <a className={classes.fixCursor} target="_blank" href="https://www.google.com/maps/place/Osa+Motors+PORSCHE+BMW+AUDI+SERWIS/@52.1105553,20.8838894,17z/data=!3m1!4b1!4m5!3m4!1s0x47193135f05311ab:0x152b41b89b4c6666!8m2!3d52.110552!4d20.8860781?hl=pl-PL"><img className={classes.contact__wrapper__content__img} src="/HomePageImages/icon1.png" alt="icon" /></a>
                    <p className={classes.contact__wrapper__content__text}>Starowiejska 3</p>
                    <p className={classes.contact__wrapper__content__text}>05-090 Sękocin Stary</p>
                    <p className={classes.contact__wrapper__content__text}>Województwo&nbsp;mazowieckie</p>
                </div>

                <div className={classes.contact__wrapper__content}>
                    <a className={classes.fixCursor} target="_blank" href="https://www.facebook.com/OsaMotorsPorsche/"><img className={classes.contact__wrapper__content__img} src="/HomePageImages/icon3.png" alt="icon" /></a>
                    <p className={classes.contact__wrapper__content__text}>Facebook</p>
                    <p className={classes.contact__wrapper__content__text}>Osa&nbsp;Motors&nbsp;Porsche</p>
                </div>
            </div>
        </section>
    )
}


export default Contact
