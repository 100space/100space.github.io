import { flexCenter } from "@styled/index.styled"
import styled from "styled-components"

export const SubWrap = styled.div`
    width: 100%;
    height: fit-content;
    position: sticky;
    top: 30vh;
    margin: 0 0 40rem 0;
    font-size: 4rem;
    ${flexCenter}
    flex-direction: column;
    & > div {
        width: 26vw;
        top: -10vh !important;
    }
    & > div:nth-child(1) {
        margin-bottom: 0.5vh;
    }
    & > div:nth-child(2) {
        margin-top: 0.5vh;
        text-align: right;
    }
    & > div:nth-child(3) {
        margin-top: 3vh;
        text-shadow: none !important;
    }
`
