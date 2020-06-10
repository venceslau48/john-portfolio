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
    background: var(--background);
    color: var(--text);
    transition: color 0.2s ease-out, background 0.2s ease-out;
`

const Container = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Layout = ({ notOnePageSection, children, selectTheme_1, selectTheme_2, selectTheme_3 }) => {
    // FIX VH ON MOBILE
    const changeVhVariable = () => {
        const vh = typeof window !== "undefined" && window.innerHeight * 0.01
        typeof document !== "undefined" && document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    // Change the VH variable when the browser is resized
    useEffect(() => {
        changeVhVariable()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <SEO />
                <Navbar
                    notOnePageSection={notOnePageSection}
                    selectTheme_1={selectTheme_1}
                    selectTheme_2={selectTheme_2}
                    selectTheme_3={selectTheme_3}
                />
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
