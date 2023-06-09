import { H1 } from "@components/H1/h1"
import { ContentWrap } from "./styled"
import gith from "@img/gith_history.png"
import { AboutMeCard } from "./aboutmeCard"

export const AboutME = () => {
    return (
        <ContentWrap>
            <H1>About Me</H1>
            <AboutMeCard />
        </ContentWrap>
    )
}
