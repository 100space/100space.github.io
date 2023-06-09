import styled from "styled-components"
import html from "@img/Html.png"
import css from "@img/css3.png"
import js from "@img/JS.png"
import mysql from "@img/Mysql.png"
import linux from "@img/Linux.png"
import github from "@img/Github.png"
import git from "@img/Git.png"
import ts from "@img/TS.png"
import React from "@img/React.png"
import Jest from "@img/Jest.png"
import Eth from "@img/Eth.png"
import Node from "@img/Node.png"
import query from "@img/Query.png"
import redux from "@img/Redux.png"
import recoil from "@img/Recoil.png"
import { imgCenter } from "@styled/index.styled"

export const SkillBoxWrap = styled.div`
    width: 50vw;
    height: 70rem;
    display: grid;
    position: sticky;
    right: 0;
    top: 20%;
    margin-top: 50rem;
    margin-left: 25%;
    padding: 3rem;
    grid-gap: 2rem;
    grid-template-areas:
        "a b c d"
        "e f g h"
        "i j k l";
    & > div {
        margin: auto;
        width: 90%;
        height: 90%;
        background-size: 40% !important;
        border-radius: 3rem;
        background-color: #f2f2f2;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) inset;
        ${imgCenter}
    }
    & > div:nth-child(1) {
        grid-area: a;
        background-image: url(${React});
        background-size: 45% !important;
    }
    & > div:nth-child(2) {
        grid-area: b;
        background-size: 45% !important;
        background-image: url(${ts});
    }
    & > div:nth-child(3) {
        grid-area: c;
        background-size: 50% !important;
        background-image: url(${github});
    }
    & > div:nth-child(4) {
        grid-area: d;
        background-size: 60% !important;
        background-image: url(${git});
    }
    & > div:nth-child(5) {
        grid-area: e;
        background-image: url(${redux});
    }
    & > div:nth-child(6) {
        grid-area: f;
        background-image: url(${query});
    }
    & > div:nth-child(7) {
        grid-area: g;
        background-image: url(${Eth});
        background-size: 35% !important;
    }
    & > div:nth-child(8) {
        grid-area: h;
        background-image: url(${recoil});
    }
    & > div:nth-child(9) {
        grid-area: i;
        background-image: url(${Jest});
        background-size: 50% !important;
    }
    & > div:nth-child(10) {
        grid-area: j;
        background-size: 60% !important;
        background-image: url(${Node});
    }
    & > div:nth-child(11) {
        grid-area: k;
        background-size: 50% !important;
        background-image: url(${linux});
    }
    & > div:nth-child(12) {
        grid-area: l;
        background-size: 60% !important;
        background-image: url(${mysql});
    }
`
