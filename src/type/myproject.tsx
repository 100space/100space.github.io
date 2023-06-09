import { H2 } from "@components/H1/h1"
import { ProjectImage, ProjectSubject, ProjectWrap } from "@pages/project/styled"
import { ReactNode } from "react"
import { ProjectProps } from "./index"
export const myproject: ProjectProps[] = [
    {
        subject: "Terminus : 터미널 연습하기",
        date: "230323 ~ 230414 (23일)",
        contributor: "3명",
        roles: "프론트엔드",
        URL: "https://www.terminus.run",
        explain: "브라우저에서 Linux, mySQL명령어를 연습하기 위한 사이트",
        skill: ["React", "Redux", "Xterm.js", "socket.io"],
    },
    {
        subject: "블록체인 지갑 만들기",
        date: "230511 ~ 230515 (5일)",
        contributor: "1명",
        roles: "프론트엔드",
        URL: "https://baekspace.tistory.com/200",
        explain: "블록체인 노드와 백서버을 이용하여 지갑만들기, 구글 확장프로그램 만들기",
        skill: ["React", "Typescript", "Redux", "blockchain"],
    },
    {
        subject: "커뮤니티 사이트 구현하기",
        date: "230130 ~ 230219 (21일)",
        contributor: "3명",
        roles: "프론트엔드, 배포, 백엔드 일부 기능",
        URL: "https://baekspace.tistory.com/127",
        explain:
            "NunJucks를 이용한 커뮤니티 사이트, RESTful API을 이용한 CRUD, Socket.io를 이용한 알림,채팅기능, 소셜로그인 구현",
        skill: ["Javascript", "AWS", "Socket.io", "JWT"],
    },
    {
        subject: "커뮤니티 사이트, 회원가입, 관리자페이지 구현하기",
        date: "221226 ~ 230102 (8일)",
        contributor: "2명",
        roles: "프론트엔드",
        URL: "https://baekspace.tistory.com/100",
        explain: "커뮤니티 사이트, 관리자 페이지와 회원 가입 기능, multer을 이용한 프로필 이미지 구현",
        skill: ["HTML/CSS", "Javascript", "multer"],
    },
]

export const handlerOpen = (e: React.MouseEvent<HTMLElement>, a: string) => {
    e.currentTarget.style.cursor = "pointer"
    return window.open(a)
}

const skills = (v: string[]): ReactNode => {
    return v.map((m, i) => {
        return <span key={i}>{m}</span>
    })
}
export const ProjectLists = myproject.map((v, i) => {
    return (
        <ProjectWrap>
            <ProjectImage />
            <ProjectSubject>
                <H2>
                    <p>프로젝트 이름 :</p>
                    <span>{v.subject}</span>
                </H2>
                <H2>
                    <p>프로젝트 기간 :</p>
                    <span>{v.date}</span>
                </H2>
                <H2>
                    <p>프로젝트 URL :</p>
                    <span onClick={(e) => handlerOpen(e, v.URL)}>{v.URL} (링크 이동)</span>
                </H2>
                <H2>
                    <p>프로젝트 설명 :</p>
                    <span>{v.explain}</span>
                </H2>
                <H2>
                    <p>프로젝트 참여자 :</p>
                    <span>{v.contributor}</span>
                </H2>
                <H2>
                    <p>프로젝트 역할 :</p>
                    <span>{v.roles}</span>
                </H2>
                <H2>
                    <p>스킬 스택 :</p>
                    <span>{skills(v.skill)}</span>
                </H2>
            </ProjectSubject>
        </ProjectWrap>
    )
})
