import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
    width: 80%;
    height: 32rem;
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
`

const Description = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    @media ${props => props.theme.bp.smallest} {
        flex-direction: column;
    }
`

const ContainerImage = styled.div`
    width: 100%;
`

const Image = styled(Img)`
    height: 100%;
`

const Info = styled.div`
    flex: 0 0 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 2rem 4rem;

    @media ${props => props.theme.bp.smallest} {
        width: 100%;
    }
`

const InfoAdicional = styled.div`
    display: block;
    z-index: 2;
`

const ProjTitle = styled.span`
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--text-1);
    font-size: 2.8rem;
    display: block;
`

const ProjDesc = styled.span`
    display: block;
    font-weight: 500;
    line-height: 1.5;
    font-size: 2rem;
    color: var(--text-2);
    text-align: left;
`

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
    z-index: 2;
`

const Code = styled.span`
    color: var(--primary-1);
    font-size: 1.15rem;
    text-transform: uppercase;
    margin: 0.5rem 0;
    font-weight: 600;
    letter-spacing: 0.8px;
`

const Demo = styled.div`
    display: block;
    z-index: 2;
    position: absolute;
    bottom: 4rem;

    @media ${props => props.theme.bp.smallest} {
        position: initial;
        bottom: 0;
        margin-top: 2rem;
        padding-bottom: 2rem;
    }
`

const OutsideLink = styled.a`
    color: #fff;
    font-size: 1.3rem;
    text-transform: uppercase;
    background: var(--primary-1);
    padding: 0.7rem;
    font-weight: 600;
    border-radius: 4px;
    text-decoration: none;
    display: block;
    width: 10rem;
    text-align: center;
    text-shadow: var(--text-shadow);

    &:hover {
        background: var(--primary-2);
        transition: background-color 0.5s linear;
    }
`

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
`

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
`

const Project = ({ proj }) => {
    const { title, link, stack, image } = proj.frontmatter

    return (
        <Container>
            <Description>
                <ContainerImage>
                    <Image fluid={image.childImageSharp.fluid} />
                </ContainerImage>
                <Info>
                    <InfoAdicional>
                        <ProjTitle>{title}</ProjTitle>
                        <ProjDesc dangerouslySetInnerHTML={{ __html: proj.html }} />
                    </InfoAdicional>
                    <Tags>
                        <Code>{stack}</Code>
                    </Tags>
                    <Demo>
                        <OutsideLink href={link} target="_blank" rel="noreferrer">
                            Visit
                        </OutsideLink>
                    </Demo>
                    <BoxSkew />
                    <BoxSkewInverted />
                </Info>
            </Description>
        </Container>
    )
}

export default Project
