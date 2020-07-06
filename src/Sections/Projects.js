import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Project from "../components/Project";

const Container = styled.div`
    background: var(--bg-1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 10rem;
    transition: all 0.4s;
    position: relative;
    max-width: 135rem;
    margin: 0 auto;

    @media ${props => props.theme.bp.medium} {
        max-width: 92%;
    }
`;

const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const BlocoInfo = styled.div`
    display: block;
    margin-bottom: 8rem;
`;

const Title = styled.h1`
    font-size: 6rem;
    color: var(--text-1);
    font-weight: 600;
    letter-spacing: 3px;

    @media ${props => props.theme.bp.smallest} {
        font-size: 4rem;
    }
`;

const Description = styled.span`
    font-size: 2.8rem;
    color: var(--text-2);
    line-height: 1.6;
    max-width: 75em;
    display: block;
    margin-top: 2rem;
`;

const Listagem = styled.div`
    @media ${props => props.theme.bp.large} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Projects = () => {
    const { allFile: items } = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    sourceInstanceName: { eq: "content" }
                    extension: { eq: "md" }
                    relativeDirectory: { regex: "/projects/" }
                }
                sort: { fields: [id] }
            ) {
                edges {
                    node {
                        id
                        childMarkdownRemark {
                            frontmatter {
                                title
                                link
                                source
                                stack
                                image {
                                    childImageSharp {
                                        fluid(maxWidth: 800, quality: 80) {
                                            ...GatsbyImageSharpFluid_tracedSVG
                                        }
                                    }
                                }
                            }
                            html
                        }
                    }
                }
            }
        }
    `);

    return (
        <Container id="projects">
            <StyledProjects>
                <BlocoInfo>
                    <Title>Projects</Title>
                    <Description>Give me a sneak peek at my work</Description>
                </BlocoInfo>
                <Listagem>
                    {items.edges.map(item => (
                        <Project
                            key={item.node.id}
                            proj={item.node.childMarkdownRemark}
                        />
                    ))}
                </Listagem>
            </StyledProjects>
        </Container>
    );
};

export default Projects;
