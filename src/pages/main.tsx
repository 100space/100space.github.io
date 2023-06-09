import React from "react"
import { AboutME } from "./aboutme"
import { Intro } from "./intro"
import { ProJect } from "./project"
import { Skill } from "./skill"

export const Main = () => {
    return (
        <>
            <Intro />
            <AboutME />
            <Skill />
            <ProJect />
        </>
    )
}
