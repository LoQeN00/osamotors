import React,{useState,useEffect,useContext,useCallback} from 'react'
import classes from '../styles/HomePage/Navigation.module.scss'
import {LangContext} from "../components/LangContext"
import {languages} from "../lang/lang.js"
import parse from "html-react-parser"



const Navigation = () => {

    const {lang,setLang} = useContext(LangContext)
   

    const [toggleNav,setToggleNav] = useState(false)

    const handleClick = useCallback(() => setToggleNav(!toggleNav), [toggleNav])

    const [scrollDir, setScrollDir] = useState("scrolling up");

    const closeNav = () => setToggleNav(false)
    

    const handleLangChange = e => {
      setLang(e.target.value)
    }


    const [actualLanguage,setActualLanguage] = useState("pl")

    useEffect(() => {

        setActualLanguage(lang)
        
    },[lang])

  

useEffect(() => {
  const threshold = 0;
  let lastScrollY = window.pageYOffset;
  let ticking = false;

  const updateScrollDir = () => {
    const scrollY = window.pageYOffset;

    if (Math.abs(scrollY - lastScrollY) < threshold) {
      ticking = false;
      return;
    }
    setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
    lastScrollY = scrollY > 0 ? scrollY : 0;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollDir);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll);
  console.log(scrollDir);

  return () => window.removeEventListener("scroll", onScroll);
}, [scrollDir]);


    return (
        <nav className={scrollDir == "scrolling down" ? `${classes.navbar} hidden`: classes.navbar}>
            <div className={classes.brandTitle}>OSAMOTORS</div>
                <button href="#" onClick={handleClick} className={classes.toggleButton}>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                </button>
                <div className={toggleNav ? `${classes.navbarLinks} active` : classes.navbarLinks}>
                <ul>
                    <li><a onClick={closeNav} href="#aboutus">{parse(languages[actualLanguage].navAboutUs)}</a></li>
                    <li><a onClick={closeNav} href="#offers">{parse(languages[actualLanguage].navOffers)}</a></li>
                    <li><a onClick={closeNav} href="#gallery">{parse(languages[actualLanguage].navGallery)}</a></li>
                    <li><a onClick={closeNav} href="#contact">{parse(languages[actualLanguage].navContact)}</a></li>
                    <li>
                    <select className={classes.lang} value={lang} onChange={handleLangChange}>
                            <option  value="pl">PL</option>
                            <option  value="cz">CZ</option>
                            <option  value="de">DE</option>
                            <option  value="hs">HS</option>
                            <option  value="en">EN</option>
                      </select>
                    </li>
                </ul>
            </div>
      </nav>
    )
}

export default Navigation
