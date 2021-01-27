import { createContext, useState } from "react"

export const UIContext = createContext();

export const UiProvider = ({ children }) => {

    const [ hideMenu, setHideMenu ] = useState(false);

    const showBarMenu = () => {
        setHideMenu(false);
    }

    const hideBarMenu = () => {
        setHideMenu(true);
    }

    return (
        <UIContext.Provider
            value={{
                hideMenu,
                showBarMenu,
                hideBarMenu
            }}
        >
            { children }
        </UIContext.Provider>
    )
}
