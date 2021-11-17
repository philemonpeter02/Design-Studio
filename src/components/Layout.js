import React from 'react'
import { GlobalStyle } from "./Styles/GlobalStyles"

function Layout({ children }) {
    return (
        <>
        <GlobalStyle />
            <main>{children}</main>
        </>
    )
}

export default Layout
