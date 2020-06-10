import React from "react"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"

const StyledToggle = styled.li`
    margin-left: 10rem;

    @media ${props => props.theme.bp.small} {
        margin-left: 0;
        margin-top: 3rem;
    }

    .check {
        display: none;
    }

    .toggle {
        cursor: pointer;
        display: inline-block;
        position: relative;
        width: 3.8rem;
        height: 2.2rem;
        background-color: var(--primary-3);
        border-radius: 5rem;
        transition: background-color 0.2s;
        margin-bottom: 0;
    }

    .light {
        position: absolute;
        background-color: #fff;
        transition: all 0.3s;
        border-radius: 50%;
    }

    .light1 {
        top: 4px;
        left: 1.3rem;
        z-index: 0;
        width: 1.8rem;
        height: 2px;
    }

    .light2 {
        top: 1rem;
        left: 1.4rem;
        z-index: 1;
        width: 2.4rem;
        height: 2px;
    }

    .light3 {
        top: 1.6rem;
        left: 1.2rem;
        z-index: 0;
        width: 2.2rem;
        height: 2px;
    }

    .light4 {
        top: 1.4rem;
        left: 0.9rem;
        z-index: 0;
        width: 2px;
        height: 2px;
        transform: translate3d(3px, 0, 0);
        opacity: 0;
        transition: all 0.3s;
    }

    .light5 {
        top: 3rem;
        left: 1.5rem;
        z-index: 0;
        width: 3px;
        height: 3px;
        transform: translate3d(3px, 0, 0);
        opacity: 0;
        transition: all 0.3s;
    }

    .light6 {
        top: 3.4rem;
        left: 2.6rem;
        z-index: 0;
        width: 2px;
        height: 2px;
        transform: translate3d(3px, 0, 0);
        opacity: 0;
        transition: all 0.3s;
    }

    .container-dark {
        display: inline-block;
        position: relative;
        z-index: 1;
        top: 3px;
        left: 1px;
        width: 1.6rem;
        height: 1.6rem;
        background-color: #fabd42;
        border-radius: 5rem;
        box-shadow: 0 2px 0.6rem rgba(0, 0, 0, 0.3);
        transition: all 0.4s;
        transform: translate3d(1px, 0px, 0px) rotate(0deg);

        .dark {
            position: absolute;
            background-color: #d4c99e;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            border-radius: 100%;
        }

        .dark1 {
            top: 4px;
            left: 1rem;
            width: 4px;
            height: 4px;
        }

        .dark2 {
            top: 0.8rem;
            left: 3px;
            width: 3px;
            height: 3px;
        }

        .dark3 {
            top: 1rem;
            left: 1rem;
            width: 0.5rem;
            height: 0.5rem;
        }
    }

    .check {
        &:checked {
            + .toggle {
                background-color: #205081;

                &:before {
                    color: #205081;
                }

                &:after {
                    color: #fff;
                }

                .container-dark {
                    background-color: #f9e498;
                    transform: translate3d(1.8rem, 0, 0) rotate(0);

                    .dark {
                        opacity: 1;
                    }
                }

                .light1 {
                    width: 2px;
                    height: 2px;
                    transform: translate3d(-3px, 0, 0);
                }

                .light2 {
                    width: 4px;
                    height: 4px;
                    transform: translate3d(-1px, -2px, 0);
                }

                .light3 {
                    width: 2px;
                    height: 2px;
                    transform: translate3d(1px, 0, 0);
                }

                .light4 {
                    opacity: 1;
                    transform: translate3d(-2px, 0, 0);
                    transition: all 0.3s;
                }
            }
        }
    }
`

const ToggleMode = () => {
    const darkMode = useDarkMode(false)

    return (
        <StyledToggle>
            <input type="checkbox" className="check" id="check" onChange={darkMode.toggle} checked={darkMode.value} />
            <label for="check" className="toggle">
                <div className="container-dark">
                    <span className="dark dark1"></span>
                    <span className="dark dark2"></span>
                    <span className="dark dark3"></span>
                </div>
                <span className="light light1"></span>
                <span className="light light2"></span>
                <span className="light light3"></span>
                <span className="light light4"></span>
                <span className="light light5"></span>
                <span className="light light6"></span>
            </label>
        </StyledToggle>
    )
}

export default ToggleMode
