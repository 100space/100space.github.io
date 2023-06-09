import styled from "styled-components"

export const H1 = styled.div`
    font-size: 6rem;
    font-weight: 700;
    color: #67aaab;
    text-shadow: #377b7c 0.2rem 0.3rem;
    height: fit-content;
    position: sticky;
    top: 10rem;
    margin: 0 0 0 10rem;
`

export const H2 = styled.div`
    font-size: 2.6rem;
    font-weight: 700;
    color: #67aaab;
    text-align: start;
    height: fit-content;
    margin-bottom: 3rem;

    & > p {
        display: inline-block;
        width: 25rem;
        margin-bottom: 1rem;
    }
    & > span {
        font-size: 2rem;
        color: #555;
        text-align: start;
        & > span {
            display: inline-block;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5) inset;
            width: fit-content;
            height: fit-content;
            padding: 0.7rem 1.4rem;
            border-radius: 1rem;
            margin-right: 1rem;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`
