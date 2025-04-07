import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppRovider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    const openSideBar = () => {
        setIsSideBarOpen(true)
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }

    return <AppContext.Provider value={{isSideBarOpen, openSideBar, closeSideBar}}>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => useContext(AppContext)

