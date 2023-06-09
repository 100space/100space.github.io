import { CardWrap, GitWrap, ItemWrap, MyData } from "@pages/aboutme/styled"
import kakao from "@img/kakao.png"
import { IconImg, ItemBox, ItemText } from "./styled"

export const Item = () => {
    const contact = [
        {
            class: "web",
            text: "https://baekspace.tistory.com",
        },
        {
            class: "mail",
            text: "baekbr13@gmail.com",
        },
        {
            class: "kakao",
            text: kakao,
        },
    ]

    const openWindow = (v: { class?: string; text?: string }) => {
        if (v.class === "web") {
            window.open(v.text, "_blank", "noopener noreferrer")
        } else {
            window.open(`mailto:${v.text}`, "_blank")
        }
    }
    const contactItem = contact.map((v, i) => {
        if (v.class === "kakao") {
            return (
                <ItemBox key={i}>
                    <IconImg className={v.class} />
                    <ItemText pic="kakao" />
                </ItemBox>
            )
        } else {
            return (
                <ItemBox key={i}>
                    <IconImg className={v.class} onClick={() => openWindow(v)}></IconImg>
                    <ItemText>{v.text}</ItemText>
                </ItemBox>
            )
        }
    })

    return (
        <ItemWrap>
            <GitWrap>
                <MyData className="green">
                    2014~2016년 28사단 병장으로 만기 전역을 하였습니다.
                    <br />
                    전역 후, 2016~2022년 에어컨 설치기사로 7년간 일하면서 지내는 중 IoT기술에 관심이 생겼고,
                    <br />
                    평소 컴퓨터와 개발자 직군에 관심이 많았지만 접근하기 어렵다고 생각하여 관심만 가지던 중에
                    <br />
                    국비 지원 프로그램을 통해서 2022년 10월~ 블록체인 과정을 시작으로 개발자의 꿈을 키우고 있습니다.
                </MyData>
            </GitWrap>
            <CardWrap>{contactItem}</CardWrap>
        </ItemWrap>
    )
}
