import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

const Container = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    bottom: 6rem;
    left: 50%;
    margin-bottom: 3rem;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-out;
    z-index: 20;

    &:hover {
        transform: translate(-50%, -3px);
    }

    &:active {
        transform: translate(-50%, 1px);
    }

    @media ${props => props.theme.bp.small} {
        bottom: -8rem;
    }

    @media ${props => props.theme.bp.smaller} {
        display: none;
    }
`

const Mouse = styled.div`
    display: block;
    position: absolute;
    margin: 0 auto;
    width: 2.5rem;
    height: 4.5rem;
    border-radius: 1.3rem;
    border: 2px solid var(--primary-3);
    bottom: 2rem;
    left: 50%;
    margin-left: -1.3rem;

    span {
        display: block;
        margin: 0.6rem auto;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: var(--primary-3);
        border: 1px solid transparent;
        animation: scroll 1s infinite both;

        @keyframes scroll {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(16px);
            }
        }
    }
`

const ScrollDown = () => (
    <Container>
        <Link to="about" spy={true} smooth={true} offset={-100}>
            <Mouse>
                <span />
            </Mouse>
        </Link>
    </Container>
)

export default ScrollDown
