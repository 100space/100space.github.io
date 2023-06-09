import styled from "styled-components"
import { flexCenter } from "./index.styled"

export const MainWrap = styled.div`
    width: 100vw;
    height: 100vh;
    ${flexCenter}
    flex-direction: column;
    background-color: #fff;
`
export const InnerWrap = styled.div`
    width: 100%;
    height: 400%;
    overflow-y: hidden;
    padding: 10rem 0;
    ${flexCenter}
    & > div:nth-child(1) {
        border-radius: 2rem;
    }
`
export const PageWrap = styled.div`
    background-color: #e8e8e8;
    width: 90%;
    height: 100%;
    overflow-y: scroll;
`
