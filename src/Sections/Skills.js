import React from "react"
import styled from "styled-components"
import wave from "../images/waves/skills.svg"
import wave2 from "../images/waves/skills2.svg"
import Skill from "../components/Skill"
import beautiful from "../images/skills/beautiful.svg"

const Container = styled.div`
    margin-top: 5rem;
    padding: 2rem 0 15rem;
    height: auto;
    display: block;
    position: relative;
    clip-path: polygon(0 0, 100% 8rem, 100% 100%, 0 100%);

    @media ${props => props.theme.bp.smallest} {
        padding-bottom: 8rem;
    }

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
            height: 110%;
        }
    }

    &:after {
        content: "";
        position: absolute;
        top: 40%;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${wave2});
        background-size: cover;
        z-index: 1;
        height: 120vh;
        transform: scaleX(-1);

        @media ${props => props.theme.bp.larger} {
            height: 85%;
        }

        @media ${props => props.theme.bp.large} {
            height: 85%;
        }
    }
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 8rem;
    max-width: 135rem;
    margin: 0 auto;
    z-index: 3;
    position: relative;

    @media ${props => props.theme.bp.medium} {
        max-width: 92%;
    }

    @media ${props => props.theme.bp.small} {
        flex-direction: column;
        align-items: center;
    }
`

const Bloco = styled.div`
    flex: 1;

    @media ${props => props.theme.bp.large} {
        margin-right: 4rem;
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

const Subtitle = styled.span`
    font-size: 5rem;
    color: #fff;
    font-weight: 500;
    display: block;
    margin-top: 4rem;
    line-height: 1.5;
    text-shadow: var(--text-shadow);

    @media ${props => props.theme.bp.smallest} {
        font-size: 3rem;
    }
`

const Description = styled.span`
    font-size: 2.8rem;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 400;
    line-height: 1.5;
    max-width: 20em;
    display: block;
    margin-top: 4rem;
    text-shadow: var(--text-shadow);

    @media ${props => props.theme.bp.smallest} {
        font-size: 2.4rem;
    }
`

const ContainerImage = styled.div`
    width: 50rem;
    height: 40rem;

    @media ${props => props.theme.bp.large} {
        width: 45rem;
    }

    @media ${props => props.theme.bp.smallest} {
        width: 35rem;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const StyledSkills = styled.div`
    display: flex;
    align-items: flex-end;
    max-width: 135rem;
    margin: 14rem auto 0;
    z-index: 3;
    position: relative;

    @media ${props => props.theme.bp.medium} {
        max-width: 92%;
    }

    @media ${props => props.theme.bp.small} {
        flex-direction: column;
        align-items: center;
    }

    @media ${props => props.theme.bp.smallest} {
        margin-top: 4rem;
    }
`

const Skills = () => {
    return (
        <Container id="skills">
            <Info>
                <Bloco>
                    <Title>Skills</Title>
                    <Subtitle>I like to make things look beautiful</Subtitle>
                    <Description>
                        Throughout my career I have embraced various methods of work, leading me to acquire knowledge in
                        several areas.
                    </Description>
                </Bloco>
                <ContainerImage>
                    <Image src={beautiful} alt="Man Coding" />
                </ContainerImage>
            </Info>
            <StyledSkills>
                <Skill blocoEsquerda />
                <Skill blocoMeio />
                <Skill blocoDireita />
            </StyledSkills>
        </Container>
    )
}

export default Skills
