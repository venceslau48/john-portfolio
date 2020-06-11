import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import GlobalStyles from "../utils/globals"
import theme from "../utils/theme"
import SEO from "../utils/seo"
import Navbar from "./Navbar"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    color: var(--text-1);
    transition: all 0.4s;
`

const Container = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Layout = ({ children }) => {
    // Change the VH variable when the browser is resized
    useEffect(() => {
        const vh = typeof window !== "undefined" && window.innerHeight * 0.01
        typeof document !== "undefined" && document.documentElement.style.setProperty("--vh", `${vh}px`)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <SEO />
                <Navbar />
                <Container>{children}</Container>
                <GlobalStyles />
            </Wrapper>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
