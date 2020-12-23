import React from 'react'
import Card from './Card/Index'
import MenuList from './MenuList/Index'
import NewCardMenu from './NewCardMenu/Index'

export function Task() {
    return (
        <main>
            <Card/>
            <NewCardMenu/>
            <MenuList/>
        </main>
    )
}

