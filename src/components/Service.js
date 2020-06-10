import React from "react"
import styled from "styled-components"

const StyledService = styled.div`
    margin-top: 2rem;
    margin-right: 2rem;
    box-shadow: var(--shadow-dark), var(--shadow-light);
    padding: 4rem;
    border-radius: 4px;
    transition: transform 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--bg-1);
    height: 100%;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        transform: translateY(-0.7rem);
    }

    @media ${props => props.theme.bp.medium} {
        margin-right: 0;
    }
`

const ContainerImage = styled.div`
    width: 30rem;
    height: 25rem;

    @media ${props => props.theme.bp.smallest} {
        width: 25rem;
        height: 20rem;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Title = styled.h5`
    color: var(--primary-1);
    font-size: 2.8rem;
    margin-top: 2rem;
    text-align: center;
    font-weight: 500;
`

const Description = styled.span`
    color: var(--text-2);
    font-size: 2.4rem;
    display: block;
    margin-top: 1rem;
    line-height: 1.4;
    max-width: 15em;
`

const Service = props => {
    return (
        <StyledService>
            <ContainerImage>
                <Image src={props.imagem} alt={props.titulo} />
            </ContainerImage>
            <Title>{props.titulo}</Title>
            <Description>{props.descricao}</Description>
        </StyledService>
    )
}

export default Service
