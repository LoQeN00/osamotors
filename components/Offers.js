import React,{useState,useEffect,useContext} from 'react'
import classes from '../styles/HomePage/Offers.module.scss'
import {LangContext} from "../components/LangContext"
import ServiceInfo from "../components/ServiceInfo"

import parse from "html-react-parser"

import {languages} from "../lang/lang.js"


const Offers = () => {
    const {lang} = useContext(LangContext)

    const [actualLanguage,setActualLanguage] = useState("pl")

    useEffect(() => {

        setActualLanguage(lang)
        
    },[lang])

    const [actualService,setActualService] = useState("")

    const handleClickOffer = (content,title,img) => {
       console.log(content, img, title )

       setActualService({content,title,img})

    }

    if (actualService=="") {
        return (
            <section id='offers' className={classes.offers}>
                <h2 className={classes.offers__title}>{parse(languages[actualLanguage].offerTitle)}</h2>
                <div className={classes.offers__wrapper}>
                    <div className={`${classes.row}`}>
                        <div className="flex">

                                <a href="#offers"><div onClick={() => handleClickOffer("card1Content","card1Title","/1920x1080/25_low.jpg")} className={`${classes.card}`}>
                                    <span className={classes.card__title}>Doktor Porsche</span>
                                    <div className={classes.card__img}>
                                        <img src="/HomePageImages/25dark.jpg" alt="offer img" />
                                    </div>
                                </div></a>

                               <a href="#offers"><div onClick={() => handleClickOffer("card5Content","card5Title","/1920x1080/13_low.jpg")} className={`${classes.card}`}>
                                    <div className={classes.card__title}>
                                    Warsztat
                                    </div>
                                    <div className={classes.card__img}>
                                        <img src="/HomePageImages/13dark.jpg" alt="offer img" />
                                    </div>
                                </div></a>

                            </div>
                        </div>
                    <div className={`${classes.row}`}>
                        <div>
                            <h2 className="heading">Projekt Ivory Line</h2>
                        </div>
                        <div className="flex">
                        <a href="#offers"><div onClick={() => handleClickOffer("card2Content","card2Title","/1920x1080/23_low.jpg")} className={`${classes.card}`}>
                                <div className={classes.card__title}>
                                Blue Line
                                </div>
                                <div className={classes.card__img}>
                                    <img src="/HomePageImages/23dark.jpg" alt="offer img" />
                                </div>
                            </div></a>
                            <a href="#offers"><div onClick={() => handleClickOffer("card3Content","card3Title","/1920x1080/26_low.jpg")} className={`${classes.card}`}>
                                <div className={classes.card__title}>
                                Black Line
                                </div>
                                <div className={classes.card__img}>
                                    <img src="/HomePageImages/26dark.jpg" alt="offer img" />
                                </div>
                            </div></a>
                            <a href="#offers"><div onClick={() => handleClickOffer("card4Content","card4Title","/1920x1080/31_low.jpg")} className={`${classes.card}`}>
                                <div className={classes.card__title}>
                                Red Line
                                </div>
                                <div className={classes.card__img}>
                                    <img src="/HomePageImages/31dark.jpg" alt="offer img" />
                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return <ServiceInfo back={setActualService} service={actualService} />
    }


    
}

export default Offers
