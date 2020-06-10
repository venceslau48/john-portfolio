import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Link = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
`

const StyledImage = styled(Img)``

const Logo = () => {
    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(height: 37, quality: 80) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <Link href="/">
            <StyledImage alt="Logo" title="Logo" fixed={logo.childImageSharp.fixed} />
        </Link>
    )
}

export default Logo
