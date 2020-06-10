import React from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import wave from "../images/waves/home.svg"
import wave2 from "../images/waves/home2.svg"

const Container = styled.div`
    background: var(--bg-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    min-height: 70rem;
    height: 100%;
    transition: all 0.4s;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${wave});
        background-size: cover;
        z-index: 2;
        height: 110%;
        transform: scaleX(-1) rotate(180deg);

        @media ${props => props.theme.bp.smallest} {
            height: 110%;
        }
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${wave2});
        background-size: cover;
        z-index: 1;
        height: 90%;
        transform: scaleX(-1) rotate(180deg);

        @media ${props => props.theme.bp.smallest} {
            height: 85%;
        }
    }

    @media ${props => props.theme.bp.smallest} {
        min-height: 60rem;
    }
`

const Info = styled.div`
    display: block;
    margin-bottom: 8rem;
    text-align: center;
    position: relative;
    top: 36rem;
    z-index: 3;

    @media ${props => props.theme.bp.smallest} {
        top: 28rem;
    }

    @media only screen and (max-width: 20em) {
        top: 23rem;
    }
`

const Title = styled.h1`
    font-size: 6rem;
    color: #fff;
    font-weight: 600;
    letter-spacing: 3px;
    text-shadow: var(--text-shadow);

    @media ${props => props.theme.bp.smallest} {
        font-size: 4rem;
    }
`

const Description = styled.span`
    font-size: 2.8rem;
    color: #fff;
    line-height: 1.6;
    max-width: 75em;
    display: block;
    margin-top: 1rem;
    text-shadow: var(--text-shadow);
`

const SendMessage = styled.a`
    display: block;
    background: var(--primary-3);
    color: #005c6e;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 1rem 2rem;
    width: 30rem;
    font-size: 2rem;
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    transition: transform 0.4s;
    position: relative;
    z-index: 3;
    transform: translateY(33rem);

    &:hover {
        transform: translateY(32.6rem);
        box-shadow: var(--shadow-dark);
    }

    &:visited,
    &:focus {
        outline: none;
    }

    @media ${props => props.theme.bp.smallest} {
        transform: translateY(24rem);

        &:hover {
            transform: translateY(23.6rem);
        }
    }

    @media only screen and (max-width: 20em) {
        transform: translateY(18rem);

        &:hover {
            transform: translateY(17.6rem);
        }
    }
`

const Contact = () => {
    return (
        <Container id="contact">
            <Info>
                <Title>Get in touch</Title>
                <Description>Let's talk about the next project. Let's make it a success story.</Description>
            </Info>
            <SendMessage href="mailto:hello@johnvences.dev">Send me a message</SendMessage>
            <Footer />
        </Container>
    )
}

export default Contact
