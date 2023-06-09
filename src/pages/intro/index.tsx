import { Scroll } from "@components/scroll"
import { Subject } from "@components/subject/subject"
import profile from "@img/profile.png"
import { IntroWrap } from "./styled"

export const Intro = () => {
    return (
        <IntroWrap>
            <Scroll />
            <Subject />
            <img src={profile} alt="" className="profile" />
        </IntroWrap>
    )
}
