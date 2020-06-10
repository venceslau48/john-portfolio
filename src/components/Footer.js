import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: block;
    padding: 4rem 0 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(4rem);
    z-index: 3;
`

const Description = styled.span`
    color: #fff;
    font-size: 1.6rem;
`

const Heart = styled.span`
    background-color: #ca1d1b;
    height: 1rem;
    width: 1rem;
    position: relative;
    display: inline-block;
    margin: 0 1.5rem;
    animation: beat 1.7s infinite;

    &:before {
        content: "";
        position: absolute;
        background: #ca1d1b;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        top: -0.6rem;
        left: 0;
    }

    &:after {
        content: "";
        position: absolute;
        background: #ca1d1b;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        top: 0;
        right: -0.6rem;
    }

    @keyframes beat {
        0% {
            transform: rotate(-45deg) scale(0.75);
        }
        20% {
            transform: rotate(-45deg) scale(1);
        }
        40% {
            transform: rotate(-45deg) scale(0.75);
        }
        60% {
            transform: rotate(-45deg) scale(1);
        }
        80% {
            transform: rotate(-45deg) scale(0.75);
        }
        100% {
            transform: rotate(-45deg) scale(0.9);
        }
    }
`

const Footer = () => {
    return (
        <Container>
            <Description>
                Made with <Heart /> by João
            </Description>
        </Container>
    )
}

export default Footer
