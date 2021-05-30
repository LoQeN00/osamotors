import React,{createContext,useState} from 'react'


export const LangContext = createContext()

const LangProvider = ({children}) => {

    const [lang,setLang] = useState("pl")

    const value = {
        lang,
        setLang
    }

    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
       
    )
}

export default LangProvider
