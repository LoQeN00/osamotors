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

                                <div onClick={() => handleClickOffer("card1Content","card1Title","/HomePageImages/25.jpg")} className={`${classes.card}`}>
                                    <span className={classes.card__title}>Doktor Porsche</span>
                                    <div className={classes.card__img}>
                                        <img src="/HomePageImages/25dark.jpg" alt="offer img" />
                                    </div>
                                </div>

                                <div onClick={() => handleClickOffer("card5Content","card5Title","/HomePageImages/43.jpg")} className={`${classes.card}`}>
                                    <div className={classes.card__title}>
                                    Warsztat
                                    </div>
                                    <div className={classes.card__img}>
                                        <img src="/HomePageImages/43dark.jpg" alt="offer img" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    <div className={`${classes.row}`}>
                        <div>
                            <h2 className="heading">Projekt Ivory Line</h2>
                        </div>
                        <div className="flex">
                            <div onClick={() => handleClickOffer("card2Content","card2Title","/HomePageImages/23.jpg")} className={`${classes.card}`}>
                                <div className={classes.card__title}>
                                Blue Line
                                </div>
                                <div className={classes.card__img}>
                                    <img src="/HomePageImages/23dark.jpg" alt="offer img" />
                                </div>
                            </div>
                            <div onClick={() => handleClickOffer("card3Content","card3Title","/HomePageImages/26.jpg")} className={`${classes.card}`}>
                                <div className={classes.card__title}>
                                Black Line
                                </div>
                                <div className={classes.card__img}>
                                    <img src="/HomePageImages/26dark.jpg" alt="offer img" />
                                </div>
                            </div>
                            <div onClick={() => handleClickOffer("card4Content","card4Title","/HomePageImages/31.jpg")} className={`${classes.card}`}>
                                <div className={classes.card__title}>
                                Red Line
                                </div>
                                <div className={classes.card__img}>
                                    <img src="/HomePageImages/31dark.jpg" alt="offer img" />
                                </div>
                            </div>
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
