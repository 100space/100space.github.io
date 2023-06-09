import { Header } from "@common/header/header"
import { Scroll } from "@components/scroll"
import { Main } from "@pages/main"
import { InnerWrap, MainWrap, PageWrap } from "@styled/Wrap.styled"
import React, { UIEventHandler, useEffect, useRef, useState } from "react"

const App: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null)

    return (
        <MainWrap>
            <Header />
            <InnerWrap>
                <PageWrap ref={pageRef}>
                    <Main />
                </PageWrap>
            </InnerWrap>
        </MainWrap>
    )
}
export default App
