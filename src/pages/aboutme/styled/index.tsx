import { flexCenter, imgCenter } from "@styled/index.styled"
import styled from "styled-components"
import gith from "@img/git_h.png"

export const ItemWrap = styled.div`
    display: flex;
    height: 100%;
    padding: 10rem;
    justify-content: space-around;
`

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 600%;
    padding-top: 80rem;
    &:nth-child(3) {
        height: 400%;
    }
    &:nth-child(4) {
        height: 1200%;
    }
    & > div:nth-child(1) {
        margin-bottom: 75rem;
    }
`
export const CardWrap = styled.div`
    height: 10%;
    position: sticky;
    margin-top: 250rem;
    top: 20rem;
    margin-bottom: 50rem;
`
export const GitWrap = styled.div`
    width: 50%;
    height: 15%;
    top: 10rem;
    position: sticky;
    display: flex;
    justify-content: flex-end;
    ${imgCenter}
    background-image: url(${gith});

    & > .yellow {
        /* background-color: yellow; */
        bottom: -2rem;
    }
    & > .green {
        /* background-color: green; */
        bottom: -10rem;
    }
    & > .pink {
        /* background-color: pink; */
        bottom: -18rem;
    }
`
export const MyData = styled.div`
    padding: 0.7rem 1.4rem;
    width: 100%;
    height: 8rem;
    position: absolute;
    font-size: 2.4rem;
    ${flexCenter}
    justify-content: start !important;
    line-height: 5rem;
    margin: 1rem 0;
`
