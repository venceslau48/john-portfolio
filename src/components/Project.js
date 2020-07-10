import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { ButtonGitHub, ButtonUrl } from "./Buttons";

const Container = styled.div`
    width: 100%;
    background: var(--bg-1);
    margin-bottom: 8rem;
    display: flex;
    box-shadow: var(--shadow-dark), var(--shadow-light);
    border-radius: 1rem;
    position: relative;
    transition: transform 0.4s;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        transform: translateY(-0.4rem);
    }

    @media ${props => props.theme.bp.medium} {
        width: 100%;
    }

    @media ${props => props.theme.bp.smallest} {
        height: auto;
    }
`;

const Description = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    @media ${props => props.theme.bp.smallest} {
        flex-direction: column;
    }
`;

const ContainerImage = styled.div`
    flex: 1;
`;

const Image = styled(Img)`
    height: 100%;
`;

const Info = styled.div`
    flex: 0 0 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 2rem 4rem;

    @media ${props => props.theme.bp.smallest} {
        width: 100%;
    }
`;

const InfoAdicional = styled.div`
    display: block;
    z-index: 2;
`;

const ProjTitle = styled.span`
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--text-1);
    font-size: 2.8rem;
    display: block;
`;

const ProjDesc = styled.span`
    display: block;
    font-weight: 500;
    line-height: 1.5;
    font-size: 2rem;
    color: var(--text-2);
    text-align: left;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem 0;
    z-index: 2;
`;

const Code = styled.span`
    color: var(--primary-1);
    font-size: 1.15rem;
    text-transform: uppercase;
    margin: 0.5rem 0;
    font-weight: 600;
    letter-spacing: 0.8px;
`;

const Demo = styled.div`
    display: block;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media ${props => props.theme.bp.smallest} {
        position: initial;
        bottom: 0;
        margin-top: 2rem;
        padding-bottom: 2rem;
    }
`;

const ButtonVisit = styled.a`
    padding: 0.6rem 1rem;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
    background: var(--primary-1);
    color: white;
    font-weight: 600;
    width: 12rem;
    font-size: 1.35rem;
    display: flex;
    justify-content: center;
    align-items: center;
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

    svg {
        width: 1.4rem;
        height: 1.4rem;
        margin-right: 0.5rem;
    }
`;

const ButtonSource = styled(ButtonVisit)`
    margin-left: 2rem;
    border: 2px solid var(--primary-1);
    background: transparent !important;
    color: var(--primary-1);
`;

const BoxSkew = styled.div`
    width: 100%;
    height: 100%;
    transform: skewX(20deg);
    position: absolute;
    top: 0;
    right: 0;
    background: var(--bg-1);
    z-index: 1;
    transition: all 0.4s;
`;

const BoxSkewInverted = styled.div`
    width: 100%;
    height: 100%;
    transform: skewX(340deg);
    position: absolute;
    top: 0;
    right: 0;
    background: var(--bg-1);
    z-index: 1;
    transition: all 0.4s;
`;

const Project = ({ proj }) => {
    const { title, link, source, stack, image } = proj.frontmatter;

    return (
        <Container>
            <Description>
                <ContainerImage>
                    {image && <Image fluid={image.childImageSharp.fluid} />}
                </ContainerImage>
                <Info>
                    <InfoAdicional>
                        <ProjTitle>{title}</ProjTitle>
                        <ProjDesc
                            dangerouslySetInnerHTML={{ __html: proj.html }}
                        />
                    </InfoAdicional>
                    <Tags>
                        <Code>{stack}</Code>
                    </Tags>
                    <Demo>
                        <ButtonVisit
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ButtonUrl />
                            Visit
                        </ButtonVisit>
                        <ButtonSource
                            href={source}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ButtonGitHub />
                            Source
                        </ButtonSource>
                    </Demo>
                    <BoxSkew />
                    <BoxSkewInverted />
                </Info>
            </Description>
        </Container>
    );
};

export default Project;
