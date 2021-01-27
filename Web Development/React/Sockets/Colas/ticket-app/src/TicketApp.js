import React from 'react'
import { UiProvider } from './context/UiContext'
import { RouterScreen } from './screens/RouterScreen'

export const TicketApp = () => {
    return (
        <UiProvider>
            <RouterScreen />      
        </UiProvider>
    )
}
