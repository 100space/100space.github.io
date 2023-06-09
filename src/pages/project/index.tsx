import { H1 } from "@components/H1/h1"
import { ContentWrap } from "@pages/aboutme/styled"
import { ProjectList } from "./projectList"

export const ProJect = () => {
    return (
        <>
            <ContentWrap>
                <H1>Project</H1>
                <ProjectList />
            </ContentWrap>
        </>
    )
}
