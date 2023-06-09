import styled from "styled-components"
import terminus from "@img/terminus.gif"
import wallet from "@img/wallet.gif"
import second from "@img/second.png"
import first from "@img/first.gif"
import { imgCenter } from "@styled/index.styled"

export const ProjectWrap = styled.div`
    width: 97%;
    height: 600rem;
    margin-top: 60rem;
    display: flex;
    justify-content: space-between;
    &:nth-child(2) > div:nth-child(1) {
        background-image: url(${terminus});
    }
    &:nth-child(3) > div:nth-child(1) {
        background-image: url(${wallet});
    }
    &:nth-child(4) > div:nth-child(1) {
        background-image: url(${second});
    }
    &:nth-child(5) > div:nth-child(1) {
        background-image: url(${first});
    }
`
export const ProjectImage = styled.div`
    width: 60%;
    position: sticky;
    top: 30rem;
    height: 70rem;
    ${imgCenter}
    background-size: contain;
`
export const ProjectSubject = styled.div`
    width: 40%;
    height: 70rem;
    top: 30rem;
    position: sticky;
    border-radius: 4rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) inset;
    padding: 7rem 4rem;
`
