import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import wave from "../images/waves/home.svg";
import wave2 from "../images/waves/home2.svg";
import ScrollDown from "../components/Scrolldown";
import { ButtonProjects } from "../components/Buttons";
var ReactRotatingText = require("react-rotating-text");

const Container = styled.div`
    background: var(--bg-1);
    min-height: calc(var(--vh, 1vh) * 100);
    transition: all 0.4s;
    animation: transition 1.5s ease;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
        transform: scaleX(-1);

        @media ${props => props.theme.bp.larger} {
            height: 90%;
        }

        @media ${props => props.theme.bp.large} {
            height: 80%;
        }

        @media only screen and (max-width: 75em) {
            height: 100%;
        }

        @media ${props => props.theme.bp.small} {
            transform: scaleX(1);
            height: 95%;
        }

        @media ${props => props.theme.bp.smaller} {
            height: 105%;
        }

        @media ${props => props.theme.bp.smallest} {
            height: 102%;
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
        height: 120vh;
        transform: scaleX(-1);

        @media ${props => props.theme.bp.larger} {
            height: 100%;
        }

        @media ${props => props.theme.bp.large} {
            height: 95%;
        }

        @media only screen and (max-width: 75em) {
            height: 110%;
        }

        @media ${props => props.theme.bp.small} {
            transform: scaleX(1);
            height: 100%;
        }

        @media ${props => props.theme.bp.smaller} {
            height: 115%;
        }

        @media ${props => props.theme.bp.smallest} {
            height: 107%;
        }
    }

    @keyframes transition {
        0% {
            opacity: 0.4;
        }
        100% {
            opacity: 1;
        }
    }
`;

const Info = styled.div`
    width: 100%;
    max-width: 135rem;
    margin: 0 auto;
    position: relative;
    top: -10rem;
    z-index: 2;
    animation: moveUp 1.5s;

    @keyframes moveUp {
        from {
            opacity: 0;
            transform: translateX(-4rem);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media ${props => props.theme.bp.medium} {
        max-width: 92%;
    }

    @media ${props => props.theme.bp.small} {
        top: 1rem;
    }

    @media ${props => props.theme.bp.smaller} {
        top: -2.5rem;
    }
`;

const Bloco = styled.div`
    span {
        font-size: 3.2rem;
        color: #fff !important;
        font-weight: 500;
        text-shadow: var(--text-shadow);

        @media ${props => props.theme.bp.smaller} {
            font-size: 2.4rem;
        }

        @media ${props => props.theme.bp.smallest} {
            font-size: 2rem;
        }
    }
`;

const Titulo = styled.h1`
    font-size: 6rem;
    color: #fff;
    font-weight: 500;
    letter-spacing: 3px;
    text-shadow: var(--text-shadow);

    span {
        font-size: inherit;
        margin-left: 1.5rem;
    }

    @media ${props => props.theme.bp.large} {
        font-size: 6rem;
    }

    @media ${props => props.theme.bp.smaller} {
        font-size: 4.5rem;
    }

    @media ${props => props.theme.bp.smallest} {
        font-size: 4rem;
    }
`;

const Button = styled(Link)`
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background: var(--primary-3);
    color: #005c6e;
    width: 20rem;
    font-weight: 600;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
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

    @media ${props => props.theme.bp.smaller} {
        margin-top: 3rem;
    }

    svg {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.8rem;
    }
`;

const Home = () => {
    return (
        <Container id="home">
            <Info>
                <Bloco>
                    <Titulo>
                        Hi
                        <span role="img" aria-label="Cool hand emoji">
                            ✌🏼, I'm <strong>John</strong>
                        </span>
                    </Titulo>
                    <ReactRotatingText
                        items={[
                            "A passionate Front-end Developer",
                            "A proactive Web Designer",
                            "A Product Designer lover"
                        ]}
                    />
                    <Button
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-180}
                    >
                        <ButtonProjects />
                        Projects
                    </Button>
                </Bloco>
            </Info>
            <ScrollDown />
        </Container>
    );
};

export default Home;
