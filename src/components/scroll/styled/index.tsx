import styled, { keyframes } from "styled-components"

const wheel = keyframes`
    0% {
            transform: translate(0, 0);
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
        80% {
            transform: translate(0, 2rem);
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
`

export const ScrollSt = styled.div`
    display: block;
    margin: 0 auto;
    position: sticky;
    top: 95%;
    bottom: 5%;
    left: calc(50% - 2.5rem);
    width: 5rem;
    font-size: 1.8rem;
    text-align: center;
    ul {
        width: 5rem;
        position: absolute;
    }

    .scrollSpan {
        background-color: #ffffff00;
        position: absolute;
        bottom: 4rem;
        left: 50%;
        width: 3rem;
        height: 5rem;
        margin-left: -1.5rem;
        border: 2px solid #bbb;
        border-radius: 50px;
        box-sizing: border-box;
    }
    .wheel::before {
        position: absolute;
        bottom: 7rem;
        left: 50%;
        content: "";
        width: 0.6rem;
        height: 0.6rem;
        margin-left: -0.3rem;
        background-color: #bbb;
        border-radius: 100%;
        animation: ${wheel} 2s infinite;
        box-sizing: border-box;
    }
`
