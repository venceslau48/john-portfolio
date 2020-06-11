import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Link } from "react-scroll"
import Logo from "./Logo"
import ToggleMode from "./ToggleMode"

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 8rem;
    background: var(--bg-1);
    z-index: 1;
    padding: 0.5rem 6rem;
    z-index: 300;
    box-shadow: var(--shadow-dark), var(--shadow-light);
    transition: all 0.4s;
    display: flex;
    align-items: center;

    @media ${props => props.theme.bp.small} {
        padding: 0.5rem 2rem;
    }
`

const Container = styled.div`
    max-width: 135rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    @media ${props => props.theme.bp.small} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        right: ${({ openNav }) => (openNav ? "0" : "-200%")};
        position: absolute;
        background: var(--bg-1);
        top: 8rem;
        height: 100vh;
        transition: all 0.6s ease-in-out;
    }

    @media ${props => props.theme.bp.smaller} {
        width: 75%;
    }

    @media ${props => props.theme.bp.smallest} {
        width: 100%;
    }
`

const ListItem = styled.li`
    margin-left: 5rem;

    @media ${props => props.theme.bp.small} {
        margin: 2rem 0;
    }
`

const ListLink = styled(Link).attrs({ activeClass: "active" })`
    text-decoration: none;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--text-2);
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid var(--primary-3);
        color: var(--primary-3);
        padding-bottom: 1rem;
        transition: all 0.4s;
    }

    &.active {
        border-bottom: 2px solid var(--primary-3);
        color: var(--primary-3);
        padding-bottom: 1rem;
    }

    @media ${props => props.theme.bp.small} {
        font-size: 2rem;
    }
`

const Burger = styled.div`
    display: none;
    cursor: pointer;

    span {
        display: block;
        width: 2.5rem;
        height: 3px;
        margin: 0.5rem;
        background: var(--primary-1);
        transition: all 0.4s;

        @media ${props => props.theme.bp.small} {
            ${({ openNav }) =>
                openNav &&
                css`
                    &:nth-child(1) {
                        transform: rotate(45deg) translateY(0.58rem);
                    }

                    &:nth-child(2) {
                        display: none;
                    }

                    &:nth-child(3) {
                        transform: rotate(-45deg) translateY(-0.58rem);
                    }
                `}
        }
    }

    @media ${props => props.theme.bp.small} {
        display: block;
    }
`

const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    return (
        <Nav>
            <Container>
                <Logo />
                <List openNav={mobile}>
                    <ListItem>
                        <ListLink to="home" spy={true} smooth={true} offset={-180} onClick={() => setMobile(false)}>
                            Home
                        </ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink to="about" spy={true} smooth={true} offset={-180} onClick={() => setMobile(false)}>
                            About
                        </ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink to="skills" spy={true} smooth={true} offset={-180} onClick={() => setMobile(false)}>
                            Skills
                        </ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink to="projects" spy={true} smooth={true} offset={-180} onClick={() => setMobile(false)}>
                            Projects
                        </ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink to="contact" spy={true} smooth={true} offset={-180} onClick={() => setMobile(false)}>
                            Contact
                        </ListLink>
                    </ListItem>
                    <ToggleMode />
                </List>
                <Burger onClick={() => setMobile(!mobile)} openNav={mobile}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Burger>
            </Container>
        </Nav>
    )
}

export default Navbar
