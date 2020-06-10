import React from "react"
import styled from "styled-components"
import cv from "../../static/curriculum.pdf"
import Service from "../components/Service"
import design from "../images/about/design.svg"
import creativity from "../images/about/creativity.svg"
import code from "../images/about/code.svg"

const Container = styled.div`
    background: var(--bg-1);
    display: flex;
    position: relative;
    padding: 6rem 0 10rem;
    transition: all 0.4s;

    @media ${props => props.theme.bp.large} {
        padding: 5rem 0;
    }
`

const Info = styled.div`
    position: relative;
    max-width: 135rem;
    margin: 0 auto;

    @media ${props => props.theme.bp.medium} {
        max-width: 92%;
    }
`

const Bloco = styled.div`
    width: 75%;

    @media ${props => props.theme.bp.small} {
        width: 100%;
    }
`

const Titulo = styled.h1`
    font-size: 6rem;
    color: var(--text-1);
    font-weight: 600;
    letter-spacing: 3px;

    @media ${props => props.theme.bp.smallest} {
        font-size: 4rem;
    }
`

const Description = styled.span`
    font-size: 2.8rem;
    color: var(--text-2);
    line-height: 1.6;
    max-width: 75em;
    display: block;
    margin-top: 2rem;

    @media ${props => props.theme.bp.smallest} {
        font-size: 2.5rem;
    }
`

const Controlos = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ButtonCV = styled.a`
    padding: 0.7rem 1rem;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
    background: var(--primary-1);
    color: white;
    font-weight: 600;
    width: 12rem;
    font-size: 1.4rem;
    display: block;
    margin-top: 4rem;
    text-align: center;
    text-decoration: none;
    transition: transform 0.4s;

    &:hover {
        transform: translateY(-0.4rem);
        box-shadow: 0.3rem 0.3rem 0.7rem rgba(46, 41, 78, 0.15);
    }

    &:focus,
    &:visited {
        outline: none;
    }
`

const ButtonLinkedin = styled(ButtonCV)`
    margin-left: 2rem;
    border: 2px solid var(--primary-1);
    background: transparent !important;
    color: var(--primary-1);
`

const Services = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    gap: 2rem;
    padding-top: 8rem;

    @media ${props => props.theme.bp.medium} {
        flex-direction: column;
        align-items: center;
    }

    @media ${props => props.theme.bp.smallest} {
        width: 100%;
    }
`

const About = () => {
    return (
        <Container id="about">
            <Info>
                <Bloco>
                    <Titulo>About me</Titulo>
                    <Description>
                        I work as a Web Developer, participating in the whole life of a project, from designing the idea
                        to publishing it on the server. My passion is to transform the ideas of my clients into
                        something special and unique.
                    </Description>
                    <Controlos>
                        <ButtonCV href={cv} target="_blank">
                            Curriculum
                        </ButtonCV>
                        <ButtonLinkedin
                            href="https://www.linkedin.com/in/darthvences/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </ButtonLinkedin>
                    </Controlos>
                </Bloco>
                <Services>
                    <Service
                        imagem={creativity}
                        titulo="Creativity"
                        descricao="I breathe in the small details to reach out to the great ideas."
                    />
                    <Service
                        imagem={design}
                        titulo="Web Design"
                        descricao="Experience in creating mockups, using the imagination to get the most creative ideas."
                    />
                    <Service
                        imagem={code}
                        titulo="Front-End"
                        descricao="Development of customer code in Javascript with the help of SASS in the assist of innovation."
                    />
                </Services>
            </Info>
        </Container>
    )
}

export default About
