import React from 'react'
import Finance from './Page/index'
import {BalanceProvider} from '../../context/BalanceContext'

function Index() {
    return (
        <BalanceProvider>
            <Finance/>
        </BalanceProvider>
    )
}

export default Index
