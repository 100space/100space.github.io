import { H1 } from "@components/H1/h1"
import { ContentWrap } from "@pages/aboutme/styled"
import { SkillBox } from "./skillbox"

export const Skill = () => {
    return (
        <ContentWrap>
            <H1>Skill Stack</H1>
            <SkillBox />
        </ContentWrap>
    )
}
