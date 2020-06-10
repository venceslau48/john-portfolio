import React from "react"
import Layout from "../components/Layout"
import Home from "../sections/Home"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

const Index = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Layout>
    )
}

export default Index
