import { useContext, useEffect } from 'react'
import { UIContext } from '../context/UiContext';

export const useHideMenu = (hidden) => {

    const { showBarMenu, hideBarMenu } = useContext(UIContext);

    useEffect(() => {
        if (hidden) {
            hideBarMenu();
        }
        else {
            showBarMenu();
        }
    }, [hidden, hideBarMenu, showBarMenu]);
}
