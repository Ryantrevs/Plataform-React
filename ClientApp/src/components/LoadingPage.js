import React from 'react'
import Loader from 'react-loader-spinner'
export default function LoadingPage() {
    return (
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "background-color": "#fe4a55", "height": "100vh", "width": "100vw", "flex-direction": "column" }}>
            <h1><b>Carregando</b></h1>
            <Loader type="ThreeDots" color="#1a1a1a" height={100} width={200} />
        </div>
    )
}
