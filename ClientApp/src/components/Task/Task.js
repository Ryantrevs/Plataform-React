import React from 'react'
import { MdCancel } from "react-icons/md";
import {
    Menu,
    CardBackground,
    CloseDiv
} from './Elements'

function Task() {
    return (
        <body>
            <Menu/>
            <CardBackground>
                <CloseDiv><MdCancel/></CloseDiv>
            </CardBackground>
        </body>
    )
}

export default Task
