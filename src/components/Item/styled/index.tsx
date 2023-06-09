import { flexCenter, imgCenter } from "@styled/index.styled"
import styled from "styled-components"
import mail from "@img/mail.png"
import web from "@img/web.png"
import KKT from "@img/KKT.png"
import kakao from "@img/kakao.png"
import { IconProps } from "@type/index"

export const ItemBox = styled.div`
    width: 75rem;
    height: 14rem;
    ${flexCenter}
    border-radius: 3rem;
    justify-content: space-around;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) inset;
    &:nth-child(3) {
        height: 50rem;
    }
    & > .mail {
        ${imgCenter}
        background-size: 70% !important;
        background-image: url(${mail});
    }
    & > .web {
        ${imgCenter}
        background-size: 70% !important;
        background-image: url(${web});
    }
    & > .kakao {
        ${imgCenter}
        background-position: 50% 60%;
        background-size: 70% !important;
        background-image: url(${KKT});
    }
    & + & {
        margin-top: 6rem;
    }
    &:hover {
        background: linear-gradient(to right, #ffc10778, #ffc1074c);
    }
`
export const IconImg = styled.div<IconProps>`
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    background-color: #67aaab;
    &:hover {
        border: 0.1rem solid #fff;
        background-color: #377b7c;
    }
`
export const ItemText = styled.div<IconProps>`
    font-size: 2.4rem;
    width: 60%;
    ${(props) => (props.pic === "kakao" ? "height: 45rem;" : "")}
    text-align: left;
    font-weight: 500;
    ${(props) => (props.pic === "kakao" ? `background-image: url(${kakao});` : "")}
    ${imgCenter}
    background-size : 100% 100%;
`
