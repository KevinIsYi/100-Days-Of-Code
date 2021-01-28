import React from 'react'
import { SocketProvider } from './context/SocketContext'
import { UiProvider } from './context/UiContext'
import { RouterScreen } from './screens/RouterScreen'

export const TicketApp = () => {
    return (
        <SocketProvider>
            <UiProvider>
                <RouterScreen />      
            </UiProvider>
        </SocketProvider>
    )
}
