import React from "react"
import styled from "styled-components"
import html from "../images/skills/html.svg"
import javascript from "../images/skills/javascript.svg"
import react from "../images/skills/react.svg"
import sass from "../images/skills/sass.svg"
import redux from "../images/skills/redux.png"
import styled_comp from "../images/skills/styled_comp.png"
import node from "../images/skills/node.png"
import express from "../images/skills/express.svg"
import graphql from "../images/skills/graphql.png"
import mongo from "../images/skills/mongo.png"
import mysql from "../images/skills/mysql.svg"
import photoshop from "../images/skills/photoshop.svg"
import sketch from "../images/skills/sketch.png"
import figma from "../images/skills/figma.png"
import xd from "../images/skills/xd.png"

const StyledSkill = styled.div`
    display: inline-block;
    flex: 1;
    height: 100%;
    margin-right: 4rem;
    box-shadow: var(--shadow-dark), var(--shadow-light);
    padding: 4rem;
    background: var(--bg-1);
    border-radius: 4px;
    transition: all 0.4s;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        transform: translateY(-0.4rem);
    }

    @media ${props => props.theme.bp.small} {
        width: 60%;
        margin-right: 0;

        &:not(:last-child) {
            margin-bottom: 4rem;
        }
    }

    @media ${props => props.theme.bp.smallest} {
        width: 100%;
    }
`

const ContainerTechs = styled.div`
    display: flex;
    flex-direction: column;
`

const Tech = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;

    &:not(:last-child) {
        margin-bottom: 3rem;
    }
`

const ContainerImage = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 2rem;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const TechTitle = styled.span`
    font-size: 1.8rem;
    color: var(--text-1);
    transition: all 0.4s;

    ${Tech}:hover & {
        color: var(--primary-1);
    }
`

const Skill = props => {
    return (
        <StyledSkill>
            {props.blocoEsquerda && (
                <ContainerTechs>
                    <Tech>
                        <ContainerImage>
                            <Image src={html} alt="HTML5" title="HTML5" />
                        </ContainerImage>
                        <TechTitle>HTML5</TechTitle>
                    </Tech>
                    <Tech href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                        <ContainerImage>
                            <Image src={sass} alt="SASS/SCSS" title="SASS/SCSS" />
                        </ContainerImage>
                        <TechTitle>SASS/SCSS</TechTitle>
                    </Tech>
                    <Tech href="https://styled-components.com/" target="_blank" rel="noreferrer">
                        <ContainerImage>
                            <Image src={styled_comp} alt="Styled Components" title="Styled Components" />
                        </ContainerImage>
                        <TechTitle>Styled Components</TechTitle>
                    </Tech>
                    <Tech>
                        <ContainerImage>
                            <Image src={javascript} alt="React" title="React" />
                        </ContainerImage>
                        <TechTitle>Javascript</TechTitle>
                    </Tech>
                    <Tech href="https://reactjs.org/" target="_blank" className="tech" rel="noreferrer">
                        <ContainerImage>
                            <Image src={react} alt="React Native" title="React Native" />
                        </ContainerImage>
                        <TechTitle>React & React Native</TechTitle>
                    </Tech>
                    <Tech href="https://redux.js.org/" target="_blank" rel="noreferrer">
                        <ContainerImage>
                            <Image src={redux} alt="Redux" title="Redux" />
                        </ContainerImage>
                        <TechTitle>Redux</TechTitle>
                    </Tech>
                </ContainerTechs>
            )}
            {props.blocoMeio && (
                <ContainerTechs>
                    <Tech>
                        <ContainerImage>
                            <Image src={node} alt="Node.js" title="Node.js" />
                        </ContainerImage>
                        <TechTitle>Node.js</TechTitle>
                    </Tech>
                    <Tech href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                        <ContainerImage>
                            <Image src={express} alt="Express.js" title="Express.js" />
                        </ContainerImage>
                        <TechTitle>Express.js</TechTitle>
                    </Tech>
                    <Tech href="https://styled-components.com/" target="_blank" rel="noreferrer">
                        <ContainerImage>
                            <Image src={graphql} alt="GraphQL" title="GraphQL" />
                        </ContainerImage>
                        <TechTitle>GraphQL</TechTitle>
                    </Tech>
                    <Tech>
                        <ContainerImage>
                            <Image src={mongo} alt="MongoDB" title="MongoDB" />
                        </ContainerImage>
                        <TechTitle>MongoDB</TechTitle>
                    </Tech>
                    <Tech href="https://reactjs.org/" target="_blank" className="tech" rel="noreferrer">
                        <ContainerImage>
                            <Image src={mysql} alt="MySQL" title="MySQL" />
                        </ContainerImage>
                        <TechTitle>MySQL</TechTitle>
                    </Tech>
                </ContainerTechs>
            )}
            {props.blocoDireita && (
                <ContainerTechs>
                    <Tech>
                        <ContainerImage>
                            <Image src={photoshop} alt="Adobe Photoshop" title="HTMAdobe PhotoshopL5" />
                        </ContainerImage>
                        <TechTitle>Adobe Photoshop</TechTitle>
                    </Tech>
                    <Tech href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                        <ContainerImage>
                            <Image src={sketch} alt="Sketch" title="Sketch" />
                        </ContainerImage>
                        <TechTitle>Sketch</TechTitle>
                    </Tech>
                    <Tech href="https://styled-components.com/" target="_blank" rel="noreferrer">
                        <ContainerImage>
                            <Image src={figma} alt="Figma" title="Figma" />
                        </ContainerImage>
                        <TechTitle>Figma</TechTitle>
                    </Tech>
                    <Tech>
                        <ContainerImage>
                            <Image src={xd} alt="Adobe XD" title="Adobe XD" />
                        </ContainerImage>
                        <TechTitle>Adobe XD</TechTitle>
                    </Tech>
                </ContainerTechs>
            )}
        </StyledSkill>
    )
}

export default Skill
